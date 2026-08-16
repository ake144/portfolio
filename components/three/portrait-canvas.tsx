"use client";

import { useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export interface PortraitCanvasProps {
  src: string;
  /** 0 = above frame / invisible, 1 = settled in place. Driven by GSAP
   * ScrollTrigger in the parent wrapper so the entrance ties directly to
   * scroll position (and reverses cleanly on scroll-up). */
  progressRef: MutableRefObject<number>;
  /** Pointer position normalized to -1..1 within the container, for the
   * holographic-card tilt. */
  pointerRef: MutableRefObject<{ x: number; y: number }>;
}

function PortraitMesh({ src, progressRef, pointerRef }: PortraitCanvasProps) {
  const texture = useTexture(src);
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const backMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const height = 2.1;
  const width = height * aspect;

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const progress = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const t = state.clock.getElapsedTime();
    const floatY = Math.sin(t * 0.6) * 0.045;

    const entryY = THREE.MathUtils.lerp(1.7, 0, progress) + floatY;
    const entryRotX = THREE.MathUtils.lerp(0.45, 0, progress);
    const entryScale = THREE.MathUtils.lerp(0.88, 1, progress);
    const opacity = THREE.MathUtils.clamp(progress * 1.6, 0, 1);

    const targetTiltX = pointerRef.current.y * 0.16;
    const targetTiltY = pointerRef.current.x * 0.22;

    group.position.y = THREE.MathUtils.lerp(group.position.y, entryY, 0.15);
    const nextScale = THREE.MathUtils.lerp(group.scale.x, entryScale, 0.1);
    group.scale.setScalar(nextScale);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, entryRotX + targetTiltX, 0.08);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetTiltY, 0.08);

    if (materialRef.current) materialRef.current.opacity = opacity;
    if (backMaterialRef.current) backMaterialRef.current.opacity = opacity * 0.35;
  });

  return (
    <group ref={groupRef} position={[0, 1.7, 0]}>
      <mesh position={[0, 0, -0.06]} scale={1.035}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial ref={backMaterialRef} color="#f0552d" transparent opacity={0} toneMapped={false} />
      </mesh>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial ref={materialRef} map={texture} transparent opacity={0} toneMapped={false} />
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
      <PortraitMesh {...props} />
    </Canvas>
  );
}
