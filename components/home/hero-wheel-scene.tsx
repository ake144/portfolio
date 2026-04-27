"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function Wheel() {
  const wheelRef = useRef<Group | null>(null);
  const spokeAngles = useMemo(
    () => Array.from({ length: 22 }, (_, index) => (index * Math.PI * 2) / 22),
    [],
  );

  useFrame((state, delta) => {
    if (!wheelRef.current) {
      return;
    }

    wheelRef.current.rotation.z -= delta * 0.09;
    wheelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.05;
    wheelRef.current.position.y = -1.95 + Math.sin(state.clock.elapsedTime * 0.35) * 0.05;
  });

  return (
    <Float speed={0.4} floatIntensity={0.08} rotationIntensity={0.06}>
      <group ref={wheelRef} position={[0, -1.95, -0.2]}>
        <mesh>
          <torusGeometry args={[2.05, 0.18, 34, 280]} />
          <meshStandardMaterial color="#05070d" metalness={0.93} roughness={0.22} />
        </mesh>

        <mesh>
          <torusGeometry args={[1.72, 0.025, 12, 220]} />
          <meshStandardMaterial color="#5f6676" metalness={0.72} roughness={0.3} />
        </mesh>

        {spokeAngles.map((angle) => (
          <mesh key={angle} rotation={[0, 0, angle]} position={[0, 0.82, 0]}>
            <boxGeometry args={[0.018, 1.7, 0.018]} />
            <meshStandardMaterial color="#1f2531" metalness={0.58} roughness={0.42} />
          </mesh>
        ))}

        <mesh>
          <cylinderGeometry args={[0.22, 0.22, 0.34, 64]} />
          <meshStandardMaterial color="#0d1017" metalness={0.98} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroWheelScene() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0.05, 5.2], fov: 39 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#020307"]} />
        <fog attach="fog" args={["#020307", 4, 10.5]} />
        <ambientLight intensity={0.28} />
        <directionalLight position={[2.6, 2.8, 3.8]} intensity={1.25} color="#dbeafe" />
        <pointLight position={[-2, 0.7, 2]} intensity={1.15} color="#93c5fd" />
        <pointLight position={[2.4, -0.2, 1.4]} intensity={0.9} color="#f5f5f5" />
        <Wheel />
        <Sparkles count={110} size={1.25} speed={0.16} opacity={0.2} color="#ffffff" scale={[8, 5, 4]} />
      </Canvas>
    </div>
  );
}
