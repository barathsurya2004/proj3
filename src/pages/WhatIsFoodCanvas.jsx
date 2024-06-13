import { Canvas } from "@react-three/fiber";

import { PerspectiveCamera } from "@react-three/drei";
import { AppleAnim } from "../../public/models/Apple";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CustomEase } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);
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
        maskImage: `linear-gradient(90deg, rgba(255,255,255,1) ${
          prog * 100
        }%, rgba(255,255,255,1) ${10 + 90 * prog}%, rgba(255,255,255,0) ${
          50 + 50 * prog
        }%, rgba(255,255,255,0) 100%)`,
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={3}
          color={"#FFEDDE"}
          position={[4, 3, 3]}
        />
        <group dispose={null} scale={5} position={[3, 0, 0]}>
          <AppleAnim />
        </group>
      </Canvas>
    </div>
  );
};

export default WhatIsFoodCanvas;
