import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "./astronaut.glb";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="648d44d75b514670a133ce6e37da93c6fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.rocket_mtl}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.character_mtl}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[11.766, 51.4, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_8"
                    position={[5.22, 89.677, 2.621]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_10"
                    position={[-97.652, 51.4, 35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_12"
                    position={[-97.652, 51.4, -35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_14"
                    position={[-97.652, 16.152, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_16"
                    position={[-97.652, 86.647, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Sphere001"
                    position={[11.766, 51.4, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Sphere004"
                    position={[5.22, 89.677, 2.621]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane004"
                    position={[-97.652, 51.4, 35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane005"
                    position={[-97.652, 51.4, -35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane006"
                    position={[-97.652, 16.152, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane007"
                    position={[-97.652, 86.647, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(model);
