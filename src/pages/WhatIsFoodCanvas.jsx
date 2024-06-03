import { Canvas } from "@react-three/fiber";
import { Pumpkin } from "../../public/models/Pumpkin";
import { PerspectiveCamera } from "@react-three/drei";
import { AppleModel } from "../../public/models/Apple";
import { BurgerLarge } from "../../public/models/BurgerLarge";
import { ChickenLeg } from "../../public/models/ChickenLeg";
import { CookingPot } from "../../public/models/CookingPot2_Soup";
import { Cupcake } from "../../public/models/Cupcake";
import { Pancakes } from "../../public/models/Pancakes_Stack";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);
const WhatIsFoodCanvas = () => {
  const rotRef = useRef();

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
        <group dispose={null}>
          <AppleModel />
          {/* <BurgerLarge /> */}
          {/* <ChickenLeg /> */}
          {/* <CookingPot /> */}
          {/* <Cupcake /> */}
          {/* <Pancakes /> */}
        </group>
      </Canvas>
    </div>
  );
};

export default WhatIsFoodCanvas;
