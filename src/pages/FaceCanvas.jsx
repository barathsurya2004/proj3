import { Canvas } from "@react-three/fiber";
import FaceReact from "../pages/FaceReact";

import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { FaceModel } from "../../public/models/Face";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense } from "react";
import { Face } from "../../public/models/Face1";
gsap.registerPlugin(ScrollTrigger);
const FaceCanvas = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".face-model",
      { top: "100vh" },
      {
        top: 0,
        scrollTrigger: {
          trigger: ".face-container",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  return (
    <>
      <FaceReact />
      <div
        className="face-model"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: "100vh",
          zIndex: 700,
          left: 0,
        }}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={25} />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.4} /> */}
          <Suspense fallback={null}>
            {/* <FaceModel /> */}
            <Face />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default FaceCanvas;
