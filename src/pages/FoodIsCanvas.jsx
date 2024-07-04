import { Canvas } from "@react-three/fiber";
import { HeartModel } from "../../public/models/Heart";
import { PerspectiveCamera } from "@react-three/drei";
import { TreasureMapModel } from "../../public/models/Treasure_map";
import { ClockModel } from "../../public/models/Clock";
import { ArtModel } from "../../public/models/Art";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const FoodIsCanvas = () => {
  return (
    <div
      className="food-is-canvas"
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
        <PerspectiveCamera makeDefault zoom={1.1} position={[-0.7, 0, 10]} />
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
        <HeartModel />
        <ArtModel />
        <TreasureMapModel />
        <ClockModel />
      </Canvas>
    </div>
  );
};

export default FoodIsCanvas;
