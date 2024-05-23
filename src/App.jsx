import Loader from "./pages/Loader";
import "./App.css";
import BackGround from "./pages/BackGround";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AfterLoad from "./pages/AfterLoad";
import QuestionMarkCanvas from "./pages/QuestionMarkCanvas";
const App = () => {
  const [bool, setBool] = useState(true);
  useGSAP(() => {
    gsap.to(".loader", {
      delay: 5.5,
      onComplete: () => {
        setBool(false);
      },
    });
  });
  return (
    <>
      <BackGround />
      <QuestionMarkCanvas />
      {bool ? <Loader /> : <AfterLoad />}
    </>
  );
};

export default App;
