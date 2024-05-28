import { useGSAP } from "@gsap/react";
import "./CircularText.css"; // Ensure to import the CSS file
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(Draggable);

const CircularText = ({ texts, radius }) => {
  const [pressed, setPressed] = useState(false);
  const pressedRef = useRef(pressed);
  const zIndexRef = useRef(0);

  useEffect(() => {
    pressedRef.current = pressed;
  }, [pressed]);

  texts = [...texts, ...texts, ...texts];
  texts.reverse();

  const [angle, setAngle] = useState(360 / texts.length);
  const [isWordVisible, setIsWordVisible] = useState(10);
  let fontsize = 55;

  useEffect(() => {
    Draggable.create("#drag", {
      type: "rotation",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".circle-container",
      {
        rotation: angle * 10 + 55,
      },
      {
        rotation: angle * 10 - 60,
        scrollTrigger: {
          trigger: ".draggable-circle",
          start: "top bottom",
          onEnter: () => {
            zIndexRef.current = 1000;
          },
          onLeaveBack: () => {
            zIndexRef.current = 0;
          },
          onLeave: () => {
            setIsWordVisible(texts.length);
          },
          onEnterBack: () => {
            setIsWordVisible(10);
          },
          end: "+=2650",
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
        height: `${radius * 2 + 1480}px`,
        width: `${radius * 2 + 1480}px`,

        zIndex: zIndexRef.current,
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
