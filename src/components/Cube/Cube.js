import React from "react";
import {
  Canvas,
  useFrame
} from "@react-three/fiber";

const Box = ({color = "#0ABFE5"}) => {
  const [
    boxRotation,
    setBoxRotation
  ] = React.useState({ x: 0,
    y: 0 });

  useFrame(() => {
    setBoxRotation({
      x: boxRotation.x + 0.01,
      y: boxRotation.y + 0.01
    });
  });

  return (
    <mesh
      rotation={[
        boxRotation.x,
        boxRotation.y, 0
      ]}
    >
      <boxGeometry
        attach="geometry"
        args={[1, 1, 1]}
      />
      <meshStandardMaterial
        attach="material"
        color={color}
      />
    </mesh>
  );
};

const Cube = ({color}) => (
  <Canvas>
    <Box color={color}/>
    <ambientLight />
    <directionalLight
      args={["#FFFFFF", 0.5]}
    />
  </Canvas>
);


export default Cube;
