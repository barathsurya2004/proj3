import { Canvas } from "@react-three/fiber";
import { HeartModel } from "../../public/models/Heart";
import { PerspectiveCamera } from "@react-three/drei";
import { TreasureMapModel } from "../../public/models/Treasure_map";
import { ClockModel } from "../../public/models/Clock";
import { ArtModel } from "../../public/models/Art";
import { useEffect } from "react";
import gsap from "gsap";

const FoodIsCanvas = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 500,
      }}
    >
      <Canvas>
        <directionalLight
          intensity={3}
          color={"#FFEDDE"}
          position={[5, 4, 5]}
        />
        <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <HeartModel />
        <ArtModel />
        <TreasureMapModel />
        <ClockModel />
      </Canvas>
    </div>
  );
};

export default FoodIsCanvas;
