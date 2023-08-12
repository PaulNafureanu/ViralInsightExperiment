"use client";
import Virus from "@/scenes/virus";
import { Canvas } from "@react-three/fiber";

export default function Background({ className }: { className: string }) {
  return (
    <div className={className}>
      <Canvas>
        <ambientLight />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <Virus />
      </Canvas>
    </div>
  );
}
