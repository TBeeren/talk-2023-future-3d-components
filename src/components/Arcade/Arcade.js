import React, { Suspense, useRef } from "react";
import { Plane, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import screenshot from "../../../assets/screenshot.png";

const model = React.lazy(() => import("./arcade.glb"));

export const Arcade = (props) => {
  const { nodes, materials } = useGLTF(model);
  const planeRef = useRef();
  const texture = new THREE.TextureLoader().load(screenshot);

  const handleClick = (e) => props.zoomToView(e.object.position);

  return (
    <group {...props} dispose={null} name="arcade" onClick={handleClick} ref={props.reference}>
      <group rotation={[-Math.PI / 2, 0, 0]} onClick={handleClick}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.CR_videogame_door}
          name={"arcade"}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.CR_videogame_machine}
          name={"arcade"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.CR_videogamecoins}
          name={"arcade"}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.CR_videogamedesign2}
          name={"arcade"}
        />
        <Suspense fallback={null} >
          <Plane
            args={[0.37, 0.29]}
            rotation={[Math.PI / 2 - 0.08, 0, 0]}
            position={[-0.33, 2.39, 1.18]}
            ref={planeRef}
            map={texture}
          >
            <meshStandardMaterial map={texture} />
          </Plane>
        </Suspense>
      </group>
    </group>
  );
};

useGLTF.preload(model);
