import Loader from "./pages/Loader";
import "./App.css";
import BackGround from "./pages/BackGround";
import { Suspense, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AfterLoad from "./pages/AfterLoad";
import QuestionMarkCanvas from "./pages/QuestionMarkCanvas";
import { useContext } from "react";
import { Context } from "./context";
import PumpkinCanvas from "./pages/PumpkinCanvas";
import { useProgress } from "@react-three/drei";
const App = () => {
  const { q_mark, loading } = useContext(Context);
  const [loadingFreze, setLoadingFreze] = useState(true);
  useEffect(() => {
    if (!loading) {
      gsap.to(".afterload-container", {
        opacity: 1,
        onStart: () => {
          setLoadingFreze(false);
        },
      });
      gsap.fromTo(
        ".q-mark",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      gsap.to(".afterload-container", {
        opacity: 0,
      });
    }
  }, [loading]);
  useGSAP(() => {
    gsap.fromTo(
      ".q-mark",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".pumpkin",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        immediateRender: false,
      }
    );
    gsap.to(".pumpkin-canvas", {
      opacity: 1,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".pumpkin",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <>
      <div
        className="loading-helper"
        style={{
          overflow: loadingFreze ? "hidden" : null,
        }}
      >
        <BackGround />
        <div className="webgl-canvas">
          <QuestionMarkCanvas />
          <PumpkinCanvas />
        </div>
        <Loader />
        <AfterLoad />
      </div>
    </>
  );
};

export default App;
