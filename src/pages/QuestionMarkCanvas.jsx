import { Canvas } from "@react-three/fiber";
import { QMark } from "../../public/models/Q_mark";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import { BlendFunction } from "postprocessing";
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
        maskImage: `radial-gradient(circle at center left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
          20 + 70 * prog
        }%, rgba(255,255,255,1) ${20 + 80 * prog}%, rgba(255,255,255,1) 100%)`,
      }}
    >
      <Canvas>
        <ambientLight intensity={1.5} />
        <EffectComposer>
          <Noise
            premultiply
            blendFunction={BlendFunction.SCREEN}
            opacity={0.8}
          />
        </EffectComposer>
        <PerspectiveCamera makeDefault zoom={1.1} position={[-1, 0, 10]} />
        <pointLight intensity={25} color={"#FFEDDE"} position={[5, 3, 3]} />
        <QMark />
      </Canvas>
    </div>
  );
};

export default QuestionMarkCanvas;
