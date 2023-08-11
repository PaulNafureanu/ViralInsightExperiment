"use client";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const pathMapper = {
  virus: "/scenes/virus/scene.gltf",
};

interface Props {
  name: keyof typeof pathMapper;
}

const Scene: React.FC<Props> = ({ name }) => {
  const ref = useRef<THREE.Mesh>(null);
  const gltf = useLoader(GLTFLoader, pathMapper[name]);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.x += 0.01;
  });

  return <primitive object={gltf.scene} ref={ref} />;
};

export default Scene;
