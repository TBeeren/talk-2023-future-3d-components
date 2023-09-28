import React, { useRef } from "react";
import Graphik from "../../../assets/fonts/graphik.json";
import { FontLoader } from "three/addons/loaders/FontLoader";


const WelcomeText = () => {
  const textRef = useRef();
  const text = "Frontmania 2023";
  const graphikFont = new FontLoader().parse(Graphik);
  const textOptions = {
    font: graphikFont,
    size: 0.05,
    height: 0.015,
    curveSegments: 3,
    bevelEnabled: true,
    bevelThickness: 0.0025,
    bevelSize: 0.0025,
    bevelOffset: 0,
    bevelSegments: 3
  };
  const sideOptions = {
    font: graphikFont,
    size: 0.05,
    height: 0.015,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.0024,
    bevelSize: 0.0028,
    bevelOffset: 0,
    bevelSegments: 4
  };

  return (
    <group position={[-0.15, 0.02, 0.3]} rotation={[0, -0.2, 0]} ref={textRef}>
      <mesh>
        <textGeometry attach="geometry" args={[text, sideOptions]}/>
        <meshLambertMaterial attach="material" color={"#0000a4"}/>
      </mesh>
      <mesh>
        <textGeometry attach="geometry" args={[text, textOptions]}/>
        <meshLambertMaterial attach="material" color={"#1eadff"}/>
      </mesh>
    </group>
  );
};

export default WelcomeText;
