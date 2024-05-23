import Loader from "./pages/Loader";
import "./App.css";
import BackGround from "./pages/BackGround";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AfterLoad from "./pages/AfterLoad";
import QuestionMarkCanvas from "./pages/QuestionMarkCanvas";
const App = () => {
  const [bool, setBool] = useState(false);
  useGSAP(() => {
    // gsap.to(".loader", {
    //   delay: 5.5,
    //   onComplete: () => {
    //     setBool(false);
    //   },
    // });
    gsap.fromTo(
      ".webgl-canvas",
      { opacity: 0, y: 30 },
      {
        y: 0,
        delay: 1,
        opacity: 1,
        duration: 0.5,
      }
    );
  });
  return (
    <>
      <BackGround />
      <div className="webgl-canvas">
        <QuestionMarkCanvas />
      </div>
      {bool ? <Loader /> : <AfterLoad />}
    </>
  );
};

export default App;
