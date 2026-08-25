"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export interface HeroConstellationProps {
  /** Pointer position normalized to -1..1 across the whole viewport. */
  pointerRef: MutableRefObject<{ x: number; y: number }>;
}

const PARTICLE_COUNT = 80;
const CONNECT_DISTANCE = 1.7;
const MAX_SEGMENTS = PARTICLE_COUNT * 10; // generous cap on simultaneous connecting lines
const REPEL_RADIUS = 1.8;

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

/** A slow-drifting field of points with lines drawn between near neighbors —
 * reads as a network/systems graph, which is the point: it's the one visual
 * metaphor that actually says something about "AI engineer, distributed
 * systems" rather than being decoration for its own sake. Pure procedural
 * geometry (no textures, no async loading, no stacked transparency).
 *
 * The position buffers live on refs and are attached to the geometry
 * imperatively in an effect, then mutated in place every frame inside
 * useFrame — refs are the sanctioned mutable escape hatch in React's model
 * (unlike useMemo/useState values, which the compiler treats as protected
 * even once they're handed off to a ref elsewhere), and this is the
 * standard, performant way to animate a large buffer geometry without
 * reallocating it every frame. */
function Constellation({ pointerRef }: HeroConstellationProps) {
  const { viewport } = useThree();
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particlesRef = useRef<Particle[] | null>(null);
  const positionsRef = useRef<Float32Array | null>(null);
  const linePositionsRef = useRef<Float32Array | null>(null);
  if (!positionsRef.current) positionsRef.current = new Float32Array(PARTICLE_COUNT * 3);
  if (!linePositionsRef.current) linePositionsRef.current = new Float32Array(MAX_SEGMENTS * 2 * 3);

  // Attach the buffers once, after mount — geometry mutation is an
  // imperative Three.js concern, not something to express declaratively
  // through JSX args (which would mean reading ref.current during render).
  useEffect(() => {
    if (pointsRef.current && positionsRef.current) {
      pointsRef.current.geometry.setAttribute("position", new THREE.BufferAttribute(positionsRef.current, 3));
    }
    if (linesRef.current && linePositionsRef.current) {
      linesRef.current.geometry.setAttribute("position", new THREE.BufferAttribute(linePositionsRef.current, 3));
      linesRef.current.geometry.setDrawRange(0, 0);
    }
  }, []);

  useFrame(() => {
    if (!particlesRef.current) {
      // Seeded here rather than during render: Math.random() is impure,
      // and useFrame runs in R3F's animation loop, outside React's render
      // phase, which is exactly where one-time randomized setup belongs.
      const spreadX = viewport.width * 0.6;
      const spreadY = viewport.height * 0.6;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * spreadX * 2,
          (Math.random() - 0.5) * spreadY * 2,
          (Math.random() - 0.5) * 1.5
        ),
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06, 0),
      }));
    }

    const particles = particlesRef.current;
    const positions = positionsRef.current;
    const linePositions = linePositionsRef.current;
    if (!particles || !positions || !linePositions) return;

    const boundX = viewport.width * 0.6;
    const boundY = viewport.height * 0.6;
    const mouseX = pointerRef.current.x * viewport.width * 0.5;
    const mouseY = pointerRef.current.y * viewport.height * 0.5;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      const dx = p.position.x - mouseX;
      const dy = p.position.y - mouseY;
      const distSq = dx * dx + dy * dy;
      if (distSq < REPEL_RADIUS * REPEL_RADIUS && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / REPEL_RADIUS) * 0.012;
        p.velocity.x += (dx / dist) * force;
        p.velocity.y += (dy / dist) * force;
      }

      p.position.x += p.velocity.x;
      p.position.y += p.velocity.y;
      p.velocity.multiplyScalar(0.97);

      if (p.position.x > boundX) p.position.x = -boundX;
      if (p.position.x < -boundX) p.position.x = boundX;
      if (p.position.y > boundY) p.position.y = -boundY;
      if (p.position.y < -boundY) p.position.y = boundY;

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;
    }

    // Three.js attributes are mutable GPU-resource handles, not React state —
    // flipping this flag each frame is the required way to re-upload the
    // buffer this same ref attached back in the mount effect. The linter's
    // purity model doesn't have a case for "a ref touched in an effect is
    // also mutated from the render-loop callback", which is the standard
    // react-three-fiber pattern for animated buffer geometry.
    const pointsAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute | undefined;
    // eslint-disable-next-line react-hooks/immutability
    if (pointsAttr) pointsAttr.needsUpdate = true;

    let segmentCount = 0;
    for (let i = 0; i < PARTICLE_COUNT && segmentCount < MAX_SEGMENTS; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && segmentCount < MAX_SEGMENTS; j++) {
        const dx = particles[i].position.x - particles[j].position.x;
        const dy = particles[i].position.y - particles[j].position.y;
        const dz = particles[i].position.z - particles[j].position.z;
        if (dx * dx + dy * dy + dz * dz < CONNECT_DISTANCE * CONNECT_DISTANCE) {
          const base = segmentCount * 6;
          linePositions[base] = particles[i].position.x;
          linePositions[base + 1] = particles[i].position.y;
          linePositions[base + 2] = particles[i].position.z;
          linePositions[base + 3] = particles[j].position.x;
          linePositions[base + 4] = particles[j].position.y;
          linePositions[base + 5] = particles[j].position.z;
          segmentCount++;
        }
      }
    }

    const geo = linesRef.current?.geometry;
    const lineAttr = geo?.attributes.position as THREE.BufferAttribute | undefined;
    if (geo && lineAttr) {
      // Same imperative-Three.js exception as the points attribute above.
      // eslint-disable-next-line react-hooks/immutability
      lineAttr.needsUpdate = true;
      geo.setDrawRange(0, segmentCount * 2);
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          color="#ec5b34"
          size={0.05}
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          toneMapped={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#ec5b34" transparent opacity={0.14} depthWrite={false} toneMapped={false} />
      </lineSegments>
    </>
  );
}

export default function HeroConstellation({ pointerRef }: HeroConstellationProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Constellation pointerRef={pointerRef} />
    </Canvas>
  );
}
