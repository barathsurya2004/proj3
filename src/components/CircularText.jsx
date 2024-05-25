import { useGSAP } from "@gsap/react";
import "./CircularText.css"; // Ensure to import the CSS file
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useState } from "react";
gsap.registerPlugin(Draggable);
const CircularText = ({ texts, radius }) => {
  texts = [...texts, ...texts, ...texts];
  texts.reverse();
  console.log(texts);
  const [zIndex, setZIndex] = useState(0);
  const [angle, setAngle] = useState(360 / texts.length);
  const [isWordVisible, setIsWordVisible] = useState(10);
  let fontsize = 55;
  useEffect(() => {
    Draggable.create("#drag", {
      type: "rotation",
      inertia: true,
    });
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".circle-container",
      {
        rotation: angle * 10 + 45,
      },
      {
        rotation: angle * 10 - 45,
        scrollTrigger: {
          markers: true,
          trigger: ".draggable-circle",
          start: "top bottom",
          onEnter: () => {
            setZIndex(1000);
          },
          onLeaveBack: () => {
            setZIndex(0);
          },
          onLeave: () => {
            setIsWordVisible(texts.length);
          },
          onEnterBack: () => {
            setIsWordVisible(10);
          },
          end: "+=2600",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <div
      id="drag"
      className="circle-container"
      style={{
        height: `${radius * 2 + 1500}px`,
        width: `${radius * 2 + 1500}px`,
        zIndex: zIndex,
      }}
    >
      {texts.map((word, index) => {
        if (index > isWordVisible) {
          fontsize = 0;
        } else {
          fontsize = 55;
        }
        return (
          <div key={index} className="word">
            <div
              style={{
                height: "1px",
                width: "1px",
                borderRadius: "50%",
                transform: `rotate(${
                  -angle * index
                }deg) translate(${radius}px) `,
                margin: 0,
                fontSize: `${fontsize}px`,
              }}
            >
              {word}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularText;
