/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 heart.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(useGSAP);
export function HeartModel(props) {
  const group = useRef();
  const hoverH = useRef();
  useGSAP(() => {
    gsap.fromTo(
      group.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 0.4,
        y: 0.4,
        z: 0.4,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-love",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      group.current.scale,
      {
        x: 0.4,
        y: 0.4,
        z: 0.4,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-art",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        immediateRender: false,
      }
    );
  });
  useFrame((state, delta) => {
    group.current.rotation.y += 0.01;
    // console.log(e);
    // console.log(state.pointer.x, state.pointer.y);
    gsap.to(hoverH.current.rotation, {
      x: -state.pointer.y / 3,
      y: state.pointer.x / 3,
      duration: 0.1,
    });
  });
  const { nodes, materials } = useGLTF("/models/heart.glb");
  return (
    <group ref={hoverH} position={[3, 0, 0]}>
      <group ref={group} {...props} dispose={null} scale={0}>
        {/* <axesHelper args={[5]} /> */}
        <mesh
          geometry={nodes.polySurface1.geometry}
          material={materials.standardSurface2}
          position={[0, 0.016, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/heart.glb");
