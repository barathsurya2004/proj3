import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const QuestionMarkCanvas = () => {
  const [prog, setProg] = useState(0);
  useGSAP(() => {
    gsap.to(".q-mark", {
      duration: 1,
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        end: "top 10%",
        onUpdate: (progress) => {
          setProg(progress.progress);
        },

        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className="q-mark canvas"
      style={{
        maskImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
          10 + 90 * prog
        }%, rgba(255,255,255,1) ${50 + 50 * prog}%, rgba(255,255,255,1) 100%)`,
      }}
    >
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
