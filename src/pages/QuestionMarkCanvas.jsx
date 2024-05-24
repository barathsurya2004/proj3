import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";

const QuestionMarkCanvas = () => {
  return (
    <div className="q-mark canvas">
      <Canvas>
        <ambientLight intensity={0.7} />
        <pointLight intensity={20} color={"#FFEDDE"} position={[5, 3, 3]} />
        <QMark />
      </Canvas>
    </div>
  );
};

export default QuestionMarkCanvas;
