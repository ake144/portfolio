"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Vertex shader ──────────────────────────────────────────────────── */
const vertexShader = `
  uniform float uTime;
  uniform float uScrollY;
  uniform vec2  uMouse;

  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // slow undulating wave over the surface
    float wave = sin(pos.x * 2.2 + uTime * 0.55) * 0.045
               + sin(pos.y * 1.8 + uTime * 0.40) * 0.038
               + sin((pos.x + pos.y) * 3.1 + uTime * 0.70) * 0.022;

    // parallax pull from scroll – moves the surface vertically
    float scrollWarp = uScrollY * 0.0014;

    // subtle mouse-driven bulge
    float dx = uv.x - uMouse.x;
    float dy = uv.y - uMouse.y;
    float dist = sqrt(dx*dx + dy*dy);
    float bulge = smoothstep(0.38, 0.0, dist) * 0.06;

    pos.z += wave + scrollWarp + bulge;

    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

/* ─── Fragment shader ────────────────────────────────────────────────── */
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uScrollY;
  uniform float uAlpha;

  varying vec2 vUv;
  varying float vWave;

  void main() {
    // parallax UV shift – bg moves slower than the foreground text
    float scrollNorm = uScrollY * 0.00018;
    vec2 shiftedUv = vUv + vec2(0.0, scrollNorm);

    // slight chromatic-aberration / distortion from the wave
    float aberr = vWave * 0.018;
    vec4 colR = texture2D(uTexture, shiftedUv + vec2( aberr, 0.0));
    vec4 colG = texture2D(uTexture, shiftedUv);
    vec4 colB = texture2D(uTexture, shiftedUv + vec2(-aberr, 0.0));

    vec4 color = vec4(colR.r, colG.g, colB.b, 1.0);

    // dark vignette – deepens toward edges for cinematic feel
    float cx = abs(vUv.x - 0.5) * 1.85;
    float cy = abs(vUv.y - 0.5) * 1.4;
    float vignette = 1.0 - smoothstep(0.25, 1.0, cx + cy);
    color.rgb *= vignette * 0.7; // keep it dark / stylised

    // very subtle colour tint pulsing with time
    float pulse = sin(uTime * 0.32) * 0.5 + 0.5;
    color.rgb = mix(color.rgb, color.rgb * vec3(0.55, 0.62, 1.0), 0.18 + pulse * 0.08);

    // grain / film-noise
    float grain = fract(sin(dot(vUv, vec2(12.9898 + uTime, 78.233))) * 43758.5453);
    color.rgb += (grain - 0.5) * 0.025;

    color.a = uAlpha;
    gl_FragColor = color;
  }
`;

/* ─── Particle vertex ────────────────────────────────────────────────── */
const particleVertex = `
  attribute float aSize;
  uniform float uTime;
  uniform float uScrollY;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    pos.y -= mod(uTime * 0.06 + position.y * 0.5, 2.0) * 2.0 - 2.0;
    pos.y += uScrollY * 0.0004;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (320.0 / -mvPosition.z);
    gl_Position  = projectionMatrix * mvPosition;

    vAlpha = clamp(1.0 - abs(pos.y) * 0.55, 0.0, 1.0);
  }
`;

const particleFragment = `
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float alpha = (1.0 - smoothstep(0.7, 1.0, d)) * vAlpha * 0.55;
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`;

export function ThreeHeroScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        /* ── Scene setup ─────────────────────────────────────────── */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, el.clientWidth / el.clientHeight, 0.1, 100);
        camera.position.z = 1.5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(el.clientWidth, el.clientHeight);
        renderer.setClearColor(0x000000, 0);
        el.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        /* ── Texture ──────────────────────────────────────────────── */
        const loader = new THREE.TextureLoader();
        const texture = loader.load("/avatar.jpg");
        texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;

        /* ── Background plane ─────────────────────────────────────── */
        const aspect = el.clientWidth / el.clientHeight;
        const planeH = 2.6;
        const planeW = planeH * aspect;
        const segments = 80;

        const uniforms: Record<string, THREE.IUniform> = {
            uTexture: { value: texture },
            uTime: { value: 0 },
            uScrollY: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uAlpha: { value: 1.0 },
        };

        const geo = new THREE.PlaneGeometry(planeW, planeH, segments, segments);
        const mat = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
        });
        const plane = new THREE.Mesh(geo, mat);
        plane.position.z = -0.6;
        scene.add(plane);

        /* ── Floating particles ───────────────────────────────────── */
        const pCount = 320;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        const pSizes = new Float32Array(pCount);
        for (let i = 0; i < pCount; i++) {
            pPos[i * 3] = (Math.random() - 0.5) * planeW * 1.1;
            pPos[i * 3 + 1] = (Math.random() - 0.5) * planeH * 1.1;
            pPos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
            pSizes[i] = Math.random() * 2.0 + 0.5;
        }
        pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
        pGeo.setAttribute("aSize", new THREE.BufferAttribute(pSizes, 1));

        const pUniforms: Record<string, THREE.IUniform> = {
            uTime: { value: 0 },
            uScrollY: { value: 0 },
        };
        const pMat = new THREE.ShaderMaterial({
            vertexShader: particleVertex,
            fragmentShader: particleFragment,
            uniforms: pUniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        /* ── State ────────────────────────────────────────────────── */
        let scrollY = 0;
        let mouseX = 0.5;
        let mouseY = 0.5;
        let targetAlpha = 1.0;
        let raf = 0;
        const clock = new THREE.Clock();

        const onScroll = () => {
            scrollY = window.scrollY;
            // fade out the canvas background once user scrolls past first viewport
            targetAlpha = Math.max(0, 1 - scrollY / (el.clientHeight * 0.9));
        };
        const onMouse = (e: MouseEvent) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = 1 - e.clientY / window.innerHeight;
        };
        const onResize = () => {
            const w = el.clientWidth;
            const h = el.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("mousemove", onMouse, { passive: true });
        window.addEventListener("resize", onResize);

        /* ── Render loop ──────────────────────────────────────────── */
        const animate = () => {
            raf = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            uniforms.uTime.value = t;
            uniforms.uScrollY.value = scrollY;
            uniforms.uMouse.value.set(mouseX, mouseY);
            uniforms.uAlpha.value += (targetAlpha - uniforms.uAlpha.value) * 0.05;

            pUniforms.uTime.value = t;
            pUniforms.uScrollY.value = scrollY;

            // camera subtle drift
            camera.position.x += (mouseX * 0.08 - camera.position.x) * 0.03;
            camera.position.y += (mouseY * 0.04 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            geo.dispose();
            mat.dispose();
            pGeo.dispose();
            pMat.dispose();
            el.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
        />
    );
}
