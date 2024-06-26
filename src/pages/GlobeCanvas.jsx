import { Canvas, useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./GlobeCanvas.css";
import { Globe } from "../../public/models/Globe";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Earth } from "../../public/models/Earth";
gsap.registerPlugin(ScrollTrigger);

const Diable = () => useFrame(() => null, 1000);
const GlobeCanvas = () => {
  const [zRef, setZRef] = useState(0);
  const [change, setChange] = useState(0);
  useGSAP(() => {
    gsap.to(".globe-canvas", {
      scrollTrigger: {
        trigger: ".food-is-culture",
        onEnter: () => {
          setZRef(511);
        },
        onLeaveBack: () => {
          setZRef(0);
        },
      },
    });
    gsap.to(".globe-canvas", {
      scrollTrigger: {
        trigger: ".cuisines-of-india",
        start: "top bottom",
        end: "top top",
        onUpdate: (e) => {
          setChange(e.progress);
        },
        scrub: true,
      },
    });
  });

  return (
    <div
      className="globe-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: zRef,
      }}
    >
      <div
        className="globe-mask"
        style={{
          height: "100%",
          width: "100%",
          maskImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
            15 * change
          }%, rgba(255,255,255,1) ${50 * change}%, rgba(255,255,255,1) 100%)`,
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
          {/* <Globe /> */}
          <Earth />
        </Canvas>
      </div>
    </div>
  );
};

export default GlobeCanvas;
