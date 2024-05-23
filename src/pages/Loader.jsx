import "./Loader.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import { useState } from "react";
gsap.registerPlugin(CustomEase);
const Loader = () => {
  let count = 0;
  const [i, setI] = useState(0);
  let index = 0;
  const content = [
    "we are what we eat",
    "food and travels, best buds forever",
    "go anywhere, right from your kitchen",
  ];
  useGSAP(() => {
    gsap.fromTo(
      ".bar-load",
      { width: 0 },
      {
        width: "100%",
        duration: 5,
        ease: CustomEase.create("custom", "M0,0 C1,0 0.61873,1 1,1 "),
      }
    );
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1 "),
      repeat: -1,

      onRepeat() {
        if (count % 2 !== 0) {
          index += 1;
          setI(index % content.length);
        }
        count += 1;
      },
      yoyo: true,
    });
  });
  return (
    <div className="loader">
      <div className="container">
        <div className="text">{content[i]}</div>
        <div className="bar">
          <div className="bar-load"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
