"use client";

import { Suspense, useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { createCardBackTexture } from "./generate-card-back";

export interface PortraitCanvasProps {
  src: string;
  name: string;
  role: string;
  /** 0 = above frame / invisible, 1 = fully scrolled through. Driven by GSAP
   * ScrollTrigger in the parent wrapper: the first slice plays the drop-in
   * entrance, a band in the middle plays a 360° flip that briefly reveals a
   * designed "back of card", and the card rests front-facing everywhere else
   * — so the photo is always what's showing when the user stops scrolling,
   * and only spins through the back as a deliberate moment mid-scroll. */
  progressRef: MutableRefObject<number>;
  /** Pointer position normalized to -1..1 within the container, layered on
   * top of the scroll-driven flip as a subtle holographic-card tilt. */
  pointerRef: MutableRefObject<{ x: number; y: number }>;
}

const ENTRY_END = 0.18; // fraction of progress spent on the drop-in
// The flip only plays inside this middle band. Outside it the card rests
// exactly front-facing (angle 0, or the visually-identical 2*PI) — so
// wherever the user stops scrolling, the photo is what's on screen.
const FLIP_BAND_START = 0.42;
const FLIP_BAND_END = 0.68;

function PortraitMesh({ src, name, role, progressRef, pointerRef }: PortraitCanvasProps) {
  const texture = useTexture(src);
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const frontMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const backMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const glowMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  // The plane always exactly fills the visible frame (no fixed size derived
  // from the photo's own aspect ratio) — this is what makes it edge-to-edge
  // with zero gap regardless of the container's shape.
  const planeWidth = viewport.width;
  const planeHeight = viewport.height;
  const planeAspect = planeWidth / planeHeight;

  const image = texture.image as unknown;
  const imageAspect =
    image && typeof image === "object" && "width" in image && "height" in image
      ? (image as { width: number; height: number }).width / (image as { width: number; height: number }).height
      : planeAspect;

  // Cover-fit the texture onto that full-frame plane — the same crop math
  // as CSS `object-fit: cover`, done here via UV repeat/offset so the photo
  // fills the frame with no letterboxing on either axis.
  useEffect(() => {
    if (imageAspect > planeAspect) {
      const scale = planeAspect / imageAspect;
      texture.repeat.set(scale, 1);
      texture.offset.set((1 - scale) / 2, 0);
    } else {
      const scale = imageAspect / planeAspect;
      texture.repeat.set(1, scale);
      texture.offset.set(0, (1 - scale) / 2);
    }
    // Three.js textures are mutable GPU-resource handles by design — flipping
    // this flag is the required way to tell it a config change (repeat/offset
    // above) needs re-uploading. Not a React state mutation.
    // eslint-disable-next-line react-hooks/immutability
    texture.needsUpdate = true;
  }, [texture, imageAspect, planeAspect]);

  // The back card is our own drawing, so it's generated to natively match
  // the frame's shape — no cropping needed on that face.
  const backTexture = useMemo(
    () => createCardBackTexture({ name, role, aspect: planeAspect }),
    [name, role, planeAspect]
  );

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const progress = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const t = state.clock.getElapsedTime();
    const floatY = Math.sin(t * 0.6) * planeHeight * 0.02;

    // Drop-in entrance, compressed into the first slice of the scroll range,
    // scaled to the frame's own height so it looks right at any size.
    const entryProgress = THREE.MathUtils.clamp(progress / ENTRY_END, 0, 1);
    const dropDistance = planeHeight * 0.8;
    // Gentle parallax drift across the whole scroll range — the portrait
    // moves a little independently of the page, rather than being pinned
    // dead still, so it reads as "with" the section instead of just "in" it.
    const parallax = (progress - 0.5) * planeHeight * 0.06;
    const entryY = THREE.MathUtils.lerp(dropDistance, parallax, entryProgress) + floatY;
    const entryRotX = THREE.MathUtils.lerp(0.45, 0, entryProgress);
    const entryScale = THREE.MathUtils.lerp(0.88, 1, entryProgress);
    const opacity = THREE.MathUtils.clamp(entryProgress * 1.6, 0, 1);

    // 360° flip confined to a narrow middle band — photo, to the brand card
    // on the reverse, back to photo — tied directly to scroll. Locked to 0
    // before the band and 2*PI after it (same orientation as 0, just reached
    // by continuing forward rather than snapping back) so resting positions
    // on either side of the band always show the front face.
    let flipAngle: number;
    if (progress <= FLIP_BAND_START) {
      flipAngle = 0;
    } else if (progress >= FLIP_BAND_END) {
      flipAngle = Math.PI * 2;
    } else {
      const bandProgress = (progress - FLIP_BAND_START) / (FLIP_BAND_END - FLIP_BAND_START);
      flipAngle = bandProgress * Math.PI * 2;
    }

    const targetTiltX = pointerRef.current.y * 0.16;
    const targetTiltY = pointerRef.current.x * 0.22;

    group.position.y = THREE.MathUtils.lerp(group.position.y, entryY, 0.15);
    const nextScale = THREE.MathUtils.lerp(group.scale.x, entryScale, 0.1);
    group.scale.setScalar(nextScale);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, entryRotX + targetTiltX, 0.08);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, flipAngle + targetTiltY, 0.16);

    if (frontMaterialRef.current) frontMaterialRef.current.opacity = opacity;
    if (backMaterialRef.current) backMaterialRef.current.opacity = opacity;
    // The ambient border glow stays visible through the whole flip (it's
    // double-sided) so the card never looks like it "loses" its light.
    if (glowMaterialRef.current) glowMaterialRef.current.opacity = opacity * 0.35;
  });

  return (
    <group ref={groupRef} position={[0, planeHeight * 0.8, 0]}>
      {/* Ambient border glow — double-sided so it reads through the flip.
          Explicit depthWrite/renderOrder on every layer here so the stack
          of near-coplanar transparent planes always paints back-to-front
          regardless of how Three's automatic sort breaks ties between
          objects this close together. */}
      <mesh position={[0, 0, -0.04]} scale={1.04} renderOrder={0}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          ref={glowMaterialRef}
          color="#f0552d"
          transparent
          opacity={0}
          toneMapped={false}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Back face — brand identity card, rotated 180° so it only faces the
          camera once the group has flipped past the halfway point */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0, -0.012]} renderOrder={1}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          ref={backMaterialRef}
          map={backTexture}
          transparent
          opacity={0}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>

      {/* Front face — the photo, cover-fit to the same full-frame plane */}
      <mesh renderOrder={2}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          ref={frontMaterialRef}
          map={texture}
          transparent
          opacity={0}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function PortraitCanvas(props: PortraitCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.4], fov: 32 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <PortraitMesh {...props} />
      </Suspense>
    </Canvas>
  );
}
