/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 q_mark.glb 
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger);
export function QMark(props) {
  const qMarkScale = useRef();
  const qMarkPos = useRef();
  const [rotation, setRotation] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-move-start",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
      },
    });
    tl.to(qMarkPos.current.position, {
      x: 1.3,
      y: -0.5,
      duration: 1,
    }).to(qMarkPos.current.position, {
      x: 3,
      y: -3,
      z: 0,
      duration: 3,
    });
    gsap.fromTo(
      qMarkScale.current.scale,
      {
        x: 0.025,
        y: 0.025,
        z: 0.025,
      },
      {
        x: 0.45,
        y: 0.45,
        z: 0.45,
        scrollTrigger: {
          trigger: ".scroll-move-start",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );
    gsap.to(qMarkPos.current.rotation, {
      scrollTrigger: {
        trigger: ".scroll-move-start",
        start: "50vh top",
        onEnter: () => setRotation(true),
        onLeaveBack: () => setRotation(false),
      },
    });
  });
  useFrame(() => {
    if (rotation) {
      qMarkPos.current.rotation.y += 0.01;
    } else {
      if (
        qMarkPos.current.rotation.y % (2 * Math.PI) < 2 * Math.PI - 0.05 &&
        qMarkPos.current.rotation.y % (2 * Math.PI) > 0.05
      ) {
        // console.log(qMarkPos.current.rotation.y % (2 * Math.PI));
        gsap.to(qMarkPos.current.rotation, {
          y:
            Math.floor(qMarkPos.current.rotation.y / (2 * Math.PI)) *
            2 *
            Math.PI,
          duration: 1,
        });
      }
    }
  });
  const { nodes, materials } = useGLTF("/models/q_mark.glb");
  return (
    <group {...props} ref={qMarkPos} dispose={null} position={[0.3, -1.1, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.025} ref={qMarkScale}>
        <mesh
          geometry={nodes.svgMeshShape3.geometry}
          position={[-4.752, -0.788, -2]}
          scale={[1, 1.575, 1]}
        >
          <meshStandardMaterial color={"#F2D8A0"} roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/q_mark.glb");
