import { useGSAP } from "@gsap/react";
import "./CircularText.css"; // Ensure to import the CSS file
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useState } from "react";
gsap.registerPlugin(Draggable);
const CircularText = ({ texts, radius }) => {
  const [minRotation, setMinRotation] = useState(180);
  const [zIndex, setZIndex] = useState(0);
  useEffect(() => {
    Draggable.create("#drag", {
      type: "rotation",
      inertia: true,
      bounds: {
        minRotation: minRotation,
      },
    });
  }, [minRotation]);
  useGSAP(() => {
    gsap.fromTo(
      ".circle-container",
      {
        rotation: 180,
      },
      {
        rotation: 60,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".draggable-circle",
          start: "center center",
          onEnter: () => {
            setMinRotation(100);
            setZIndex(1000);
          },
          onLeaveBack: () => {
            setMinRotation(180);
            setZIndex(0);
          },
          end: "top 5%",
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
        const angle = 20 * index; // Angle for each word

        return (
          <div key={index} className="word">
            <div
              style={{
                height: "1px",
                width: "1px",
                borderRadius: "50%",
                transform: `rotate(${-angle}deg) translate(${radius}px) `,
                margin: 0,
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
