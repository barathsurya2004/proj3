import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

const QuestionMarkCanvas = () => {
  return (
    <div className="q-mark canvas">
      <Canvas>
        <ambientLight intensity={1} />

        <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />
        <pointLight intensity={20} color={"#FFEDDE"} position={[5, 3, 3]} />
        <QMark />
      </Canvas>
    </div>
  );
};

export default QuestionMarkCanvas;
