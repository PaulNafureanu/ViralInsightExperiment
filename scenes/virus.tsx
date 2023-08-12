"use client";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const Virus = () => {
  const path = "/scenes/virus/scene.gltf";
  const ref = useRef<THREE.Mesh>(null);
  const gltf = useLoader(GLTFLoader, path);

  useFrame(({ clock }) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });

  return <primitive object={gltf.scene} ref={ref} />;
};

export default Virus;
