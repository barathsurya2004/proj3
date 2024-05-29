import { useEffect, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerWidth * radius) / 1920;
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(0);
  useEffect(() => {
    Draggable.create("#drag", {
      type: "rotation",
    });
  });
  useGSAP(() => {
    gsap.to("#drag", {
      scrollTrigger: {
        trigger: ".draggable-circle",
        start: "top bottom",
        end: "bottom top",
        onLeave: () => setZIndex(1000),
        onLeaveBack: () => setZIndex(0),
      },
    });
  });
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: zIndex,
      }}
    >
      <div className="circle-container" style={{}}>
        <div
          id="drag"
          className="circle"
          style={{
            position: "absolute",
            width: `${radius * 5}px `,
            height: `${radius * 5}px`,
            left: ` ${(-2364 * window.innerWidth) / 1920}px`,
          }}
        >
          {texts.map((text, index) => {
            const angle = (index * 360) / texts.length;

            return (
              <div className="circle-text" key={index}>
                <div
                  style={{
                    transform: ` rotate(${angle}deg) translate(${radius}px) `,
                    transformOrigin: `left center`,
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularText;
