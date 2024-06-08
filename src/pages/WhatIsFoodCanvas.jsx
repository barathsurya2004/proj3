import { Canvas } from "@react-three/fiber";

import { PerspectiveCamera } from "@react-three/drei";
import { AppleAnim } from "../../public/models/Apple";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CustomEase } from "gsap/all";
import { BurgerAnim } from "../../public/models/Burger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);
const WhatIsFoodCanvas = () => {
  return (
    <div className="foods-canvas canvas">
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
