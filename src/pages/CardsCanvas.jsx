import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const CardsCanvas = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={75} />
        {children}
      </Canvas>
    </div>
  );
};

export default CardsCanvas;
