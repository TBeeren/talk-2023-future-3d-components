import React, { Suspense } from "react";

import { Canvas, extend } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { MeshBasicMaterial } from "three";

import Stars from "../Stars";
import LandingModel from "../LandingModel/LandingModel";
import WelcomeText from "../WelcomeText";

// Extending lib
extend({
  TextGeometry,
  MeshBasicMaterial
});

const LandingPage = () => (
  <Canvas
    shadows
    camera={{
      fov: 50,
      position: [-0.03, 0.05, 1.6]
    }}
  >

    <color attach="background" args={["#12071f"]} />
    <directionalLight castShadow position={[1, 2, 3]} intensity={2} shadow-normalBias={0.04}/>
    <ambientLight intensity={0.2}/>

    <Suspense>
      <Cloud opacity={0.2} speed={0.2} width={5} depth={8} segments={25}/>
      <Stars/>
      <LandingModel/>
      <WelcomeText/>
    </Suspense>

  </Canvas>
);

export default LandingPage;
