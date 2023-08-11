"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "@/lib/Scene";

export default function Background() {
  return (
    <Canvas>
      <ambientLight />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Scene name="virus" />
    </Canvas>
  );
}
