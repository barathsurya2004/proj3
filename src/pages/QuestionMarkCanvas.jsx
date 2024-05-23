import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";

const QuestionMarkCanvas = () => {
  return (
    <div className="q-mark canvas">
      <Canvas>
        <QMark />
      </Canvas>
    </div>
  );
};

export default QuestionMarkCanvas;
