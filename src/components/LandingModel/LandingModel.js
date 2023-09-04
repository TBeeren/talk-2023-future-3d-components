import { RocketPlanet } from "../RocketPlanet/RocketPlanet";
import { Arcade } from "../Arcade/Arcade";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import CameraControls from "camera-controls";

CameraControls.install({ THREE });

const bouncePosition = function (bounceSpeed, bounceDistance, height) {
  return Math.sin(Date.now() * (bounceSpeed / 100)) * bounceDistance + height;
};

export const LandingModel = (props) => {
  const [zoom, setZoom] = useState(false);
  const groupRef = useRef();
  const arcadeRef = useRef();
  const twoRadian = Math.PI * 2;

  useFrame((state, delta) => {
    if (zoom && groupRef.current.rotation.y % (Math.PI * 2) >= 0 && groupRef.current.rotation.y % (Math.PI * 2) <= 0.01) {
      arcadeRef.current.position.y = bouncePosition(0.18, 0.005, -0.135);
      return;
    }

    let acceleration = bouncePosition(0.1, 0.8, Math.abs((Math.PI * 0.65)));
    if (zoom && groupRef.current.rotation.y % twoRadian >= twoRadian - 1) {
      acceleration *= 0.8;
    }

    groupRef.current.rotation.y += 0.5 * delta * acceleration;
    arcadeRef.current.position.y = bouncePosition(0.3, 0.01, -0.135);
  });

  const handleArrowUpEvent = (e) => e.key === "ArrowUp" ? setZoom(true) : e.key === "ArrowDown" ? setZoom(false) : null;

  useEffect(() => {
    document.addEventListener("keydown", handleArrowUpEvent);
  }, []);


  return (
    <>
      {/* <OrbitControls camera={camera}/>*/}
      <group {...props} ref={groupRef} position={[0.2, -0.1, 0]}>
        <RocketPlanet scale={0.25}/>
        <Arcade
          scale={0.1}
          reference={arcadeRef}
          rotation={[0, 0.1, 0.03]}
          position={[-0.05, -0.15, 0.7]}
          zoomToView={() => setZoom(!zoom)}
        />
        <Controls zoom={zoom} focus={arcadeRef}/>
      </group>
    </>
  );
};

const Controls = ({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3() }) => {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);

  return useFrame((state, delta) => {
    const zoomedPos = focus.current.position;
    if (zoom) {
      pos.set(zoomedPos.x + 0.15, zoomedPos.y + 0.04, zoomedPos.z - 0.11);
      look.set(zoomedPos.x + 0.14, zoomedPos.y + 0.01, zoomedPos.z - 0.2);
      if (state.camera.fov > 35) {
        state.camera.fov -= 0.2;
      }
    } else {
      pos.set(-0.03, 0.05, 1.6);
      look.set(0, 0.05, 1.4);
      if (state.camera.fov < 50) {
        state.camera.fov += 1;
      }
    }

    state.camera.position.lerp(pos, 0.4);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true);
    return controls.update(delta);
  });
};

export default LandingModel;
