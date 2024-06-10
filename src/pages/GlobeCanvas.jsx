import { Canvas } from "@react-three/fiber";
import { EarthModel } from "../../public/models/Earth";
import { PerspectiveCamera } from "@react-three/drei";

const GlobeCanvas = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Canvas>
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />

        <EarthModel />
      </Canvas>
    </div>
  );
};

export default GlobeCanvas;
