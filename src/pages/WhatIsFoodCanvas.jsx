import { Canvas } from "@react-three/fiber";

import { PerspectiveCamera } from "@react-three/drei";
import { AppleAnim } from "../../public/models/Apple";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { AnimaFinal } from "../../public/models/FinalAnim";
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const WhatIsFoodCanvas = () => {
  const [prog, setProg] = useState(0);
  useGSAP(() => {
    gsap.to(".foods-canvas", {
      duration: 1,
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top 40%",
        end: "top -50%",
        onUpdate: (progress) => {
          setProg(progress.progress);
        },
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className="foods-canvas canvas"
      style={{
        maskImage: `radial-gradient(circle at center left, rgba(255,255,255,1) ${
          prog * 100
        }%, rgba(255,255,255,1) ${10 + 90 * prog}%, rgba(255,255,255,0) ${
          50 + 50 * prog
        }%, rgba(255,255,255,0) 100%)`,
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
        <directionalLight
          name="Sun"
          intensity={3}
          decay={2}
          color="#fff5b6"
          position={[2.004, 0.211, 5.056]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[0, 0, -1]} />
        </directionalLight>
        <pointLight
          name="Point"
          intensity={5.1}
          decay={2}
          color="#fff5b6"
          position={[4.109, 0.072, -5.18]}
          rotation={[-Math.PI / 2, 0, 0]}
        />

        <ambientLight intensity={0.3} />
        <group dispose={null} scale={5} position={[3.5, 0, 0]}>
          <AnimaFinal />
        </group>
      </Canvas>
    </div>
  );
};

export default WhatIsFoodCanvas;
