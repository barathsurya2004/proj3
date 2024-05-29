import { useEffect, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerWidth * radius) / 1920;
  const [change, setChange] = useState(0);
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  useGSAP(() => {
    Draggable.create("#drag", {
      type: "rotation",
      onDragEnd: () => {
        const rotation = gsap.getProperty("#drag", "rotation");
        console.log(rotation);
        gsap.to("#drag", {
          rotation: rotation - (rotation % 12),
        });
      },
    });
    gsap.fromTo(
      "#drag",
      {
        rotation: 45,
      },
      {
        rotation: -36,
        scrollTrigger: {
          trigger: ".draggable-circle",
          start: "top bottom",
          end: `+=${window.innerHeight * 1.6}`,
          scrub: true,
          onLeave: () => {
            setZIndex(1000);
            setVisibleCount(texts.length);
          },
          onEnterBack: () => {
            setZIndex(0);
            setVisibleCount(10);
          },
        },
      }
    );
    gsap.to("#drag", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        end: "top top",
        onEnter: () => {
          setZIndex(0);
        },
        onLeaveBack: () => {
          setZIndex(1000);
        },
        onUpdate: (progress) => {
          setChange(progress.progress);
        },
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
            let fontSize;
            if (index > visibleCount) fontSize = "0";
            return (
              <div className="circle-text" key={index}>
                <div
                  style={{
                    transform: ` rotate(${angle}deg) translate(${
                      radius + window.innerWidth * change
                    }px) `,
                    transformOrigin: `left center`,
                    fontSize: fontSize,
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
