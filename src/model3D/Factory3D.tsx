import * as THREE from "three";
import { Suspense, useMemo } from "react";
import { Canvas, applyProps } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { useEffect } from "react";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
//import factoryModel from "../assets/glTF/IndustrialTransparent4.gltf";

function FactoryModel(props: any) {
  //const { scene, nodes, materials } = useGLTF('/IndustrialTransparent4.gltf');
  const gltf = useLoader(GLTFLoader, "/IndustrialTransparent4.gltf");

  return (
    <>
      <group>
        <primitive object={gltf.scene} {...props} />
      </group>
    </>
  );
}

const Factory3D = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        display: "inline-block",
        width: "100%",
        height: "100%",
        zIndex: "-10",
      }}
      className="inline-block absolute top-0 left-0 -z-10 w-full h-screen"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [80, 30, 0], fov: 45 }}
    >
      <color attach="background" args={["#15151a"]} />
      <Suspense>
        <FactoryModel></FactoryModel>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Factory3D;
