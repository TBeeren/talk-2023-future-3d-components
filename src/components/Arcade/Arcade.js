import React, { useRef } from "react";
import { Plane, useGLTF } from "@react-three/drei";
import model from "./arcade.glb";
import * as THREE from "three";
import screenshot from "../../../assets/screenshot.png";

const texture = new THREE.TextureLoader().load(screenshot);

export const Arcade = (props) => {
  const { nodes, materials } = useGLTF(model);
  const planeRef = useRef();

  const handleClick = (e) => props.zoomToView(e.object.position);

  return (
    <>
    <group {...props} dispose={null} name="arcade" onClick={handleClick} ref={props.reference}>
      <group position={[0.18, 5.981, 0]} scale={[0.068, 5.341, 2.791]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group position={[1.249, 1.64, -1.791]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group position={[1.192, 7.125, -1.198]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.pacman_logo_oben}
        />
        <Plane
          args={[2.5, 2.0]}
          rotation={[-0.39, 0, 0]}
          position={[1.07, 0.55, 0]}
          ref={planeRef}
        >
          <meshStandardMaterial attach={"material"} map={texture}/>
        </Plane>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[4.361, 5.981, 0]} scale={[-0.068, 5.341, 2.791]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group
        position={[2.34, 6.098, 0.822]}
        rotation={[0.16, 0, 0]}
        scale={[0.027, 0.17, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.material_0}
        position={[3.73, 6.017, 0.563]}
        rotation={[0.156, 0, 0]}
        scale={[0.111, 0.015, 0.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.material_0}
        position={[3.729, 5.942, 1.035]}
        rotation={[0.156, 0, 0]}
        scale={[0.111, 0.015, 0.111]}
      />
    </group>
  </>
  );
};

useGLTF.preload(model);
