import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";

const QuestionMarkCanvas = () => {
  return (
    <div className="q-mark canvas">
      <Canvas>
        <pointLight
          position={[4, 2.8672, 1.58927]}
          intensity={15}
          color={"#FFEDDE"}
        />
        <QMark />
      </Canvas>
    </div>
  );
};

export default QuestionMarkCanvas;
