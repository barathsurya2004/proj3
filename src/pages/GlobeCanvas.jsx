import { Canvas } from "@react-three/fiber";
import { EarthModel } from "../../public/models/Earth";
import { PerspectiveCamera } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./GlobeCanvas.css";
gsap.registerPlugin(ScrollTrigger);

const GlobeCanvas = () => {
  const divRef = useRef();
  const [progresss, setProgresss] = useState(1);

  useGSAP(() => {});

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
          <directionalLight position={[0, 0, 10]} intensity={3} />
          <PerspectiveCamera makeDefault zoom={1.3} position={[0, 0, 10]} />
          <ambientLight intensity={5} />
          <EarthModel />
        </Canvas>
      </div>
    </div>
  );
};

export default GlobeCanvas;
