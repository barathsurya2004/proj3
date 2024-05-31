import { Canvas } from "@react-three/fiber";
import { Pumpkin } from "../../public/models/Pumpkin";
import { PerspectiveCamera } from "@react-three/drei";

const PumpkinCanvas = () => {
  return (
    <div className="pumpkin-canvas canvas">
      <Canvas>
        <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />
        <ambientLight intensity={1} />
        <pointLight intensity={20} color={"#FFEDDE"} position={[4, 3, 3]} />
        <Pumpkin />
      </Canvas>
    </div>
  );
};

export default PumpkinCanvas;
