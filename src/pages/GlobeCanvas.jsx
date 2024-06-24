import { Canvas, useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./GlobeCanvas.css";
import { Globe } from "../../public/models/Globe";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
gsap.registerPlugin(ScrollTrigger);

const Diable = () => useFrame(() => null, 1000);
const GlobeCanvas = () => {
  const divRef = useRef();
  const [progresss, setProgresss] = useState(1);

  return (
    <div
      className="globe-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 500,
      }}
    >
      <div
        className="globe-mask"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Canvas>
          {/* <OrbitControls /> */}
          {/* <Diable /> */}
          <ambientLight intensity={2} />
          <directionalLight intensity={3} position={[5, 10, 10]} />
          {/* <directionalLight intensity={2} position={[-5, -10, -10]} /> */}
          <PerspectiveCamera
            makeDefault={true}
            far={1000}
            near={0.001}
            fov={22.895}
            position={[0, 0, 2.212]}
          />
          <Globe />
        </Canvas>
      </div>
    </div>
  );
};

export default GlobeCanvas;
