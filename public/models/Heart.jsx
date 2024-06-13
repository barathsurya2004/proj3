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
  const hover = useRef();
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
  useFrame(() => {
    group.current.rotation.y += 0.01;
  });
  const { nodes, materials } = useGLTF("/models/heart.glb");
  return (
    <group
      onPointerMove={(e) => {
        e.stopPropagation();
        // e.target.style.cursor = "pointer";
        console.log(e.pointer.x, e.pointer.y);
        gsap.to(hover.current.rotation, {
          x: -e.point.y / 10,
          y: e.point.x / 10 - 0.5,
          duration: 0.4,
        });
      }}
      onPointerOut={(e) => {
        gsap.to(hover.current.rotation, {
          x: 0,
          y: 0,
          duration: 0.5,
        });
      }}
      ref={hover}
      position={[3, 0, 0]}
    >
      <group ref={group} {...props} dispose={null} scale={0}>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={6.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#FF0000" transparent opacity={0} />
        </mesh>
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
