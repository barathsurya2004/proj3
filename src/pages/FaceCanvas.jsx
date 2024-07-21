import { Canvas } from "@react-three/fiber";
import FaceReact from "../pages/FaceReact";

import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { FaceModel } from "../../public/models/Face";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Face } from "../../public/models/Face1";
import { Context } from "../context";
gsap.registerPlugin(ScrollTrigger);

const FaceCanvas = () => {
  const [num, setNum] = useState(0);
  const { mode } = useContext(Context);
  useEffect(() => {
    if (mode == "Map" || mode == "Gallery") {
      gsap.to(".face-model", {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${100}%, rgba(0,0,0,1) ${100}%, rgba(0,0,0,1) 100%)`,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(".face-model", {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${-20}%, rgba(0,0,0,1) ${-20}%, rgba(0,0,0,1) 100%)`,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  useGSAP(() => {
    gsap.fromTo(
      ".face-model",
      { top: "150vh" },
      {
        top: "50vh",
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

    gsap.fromTo(
      ".face-model",
      { left: "50%" },
      {
        left: "28.5%",
        scrollTrigger: {
          trigger: ".ending-page",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  });
  return (
    <>
      <FaceReact />
      <div
        className="face-model"
        style={{
          height: "60vh",
          width: "40%",
          position: "fixed",
          top: "150vh",
          zIndex: mode == "Contact" ? 510 : 500,
          maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${
            num * 100
          }%, rgba(0,0,0,1) ${num * 100}%, rgba(0,0,0,1) 100%)`,
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={22} />
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
