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
  const [change, setChange] = useState(0);
  radius = (window.innerHeight * radius) / 1080;
  texts = [...texts, ...texts, ...texts];
  texts.reverse();
  useEffect(() => {
    Draggable.create("#drag", {
      type: "rotation",
    });
  }, []);
  const [angle, setAngle] = useState(360 / texts.length);
  const [isWordVisible, setIsWordVisible] = useState(10);
  let fontsize = 55;

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

          end: "+=2650",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.to(".circle-container", {
      scrollTrigger: {
        trigger: ".draggable-circle",
        start: "top -30%",
        onEnter: () => {
          setIsWordVisible(texts.length);
          zIndexRef.current = 1000;
        },
        onLeaveBack: () => {
          zIndexRef.current = 0;
          setIsWordVisible(10);
        },
        end: "top top",
      },
    });

    gsap.to(".circle-container", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        end: "top top",
        onEnter: () => {
          zIndexRef.current = 0;
        },
        onLeaveBack: () => {
          zIndexRef.current = 1000;
        },
        onUpdate: (progress) => {
          console.log(progress.progress);
          setChange(progress.progress);
        },
      },
    });
  });

  return (
    <div
      id="drag"
      className="circle-container"
      style={{
        height: `${radius * 2 + 1480}px`,
        width: `${radius * 2 + 1480}px`,
        top: `${-radius - (window.innerHeight * 80) / 1080}px`,
        zIndex: zIndexRef.current,
      }}
    >
      {texts.map((word, index) => {
        if (index > isWordVisible) {
          fontsize = 0;
        } else {
          fontsize = (window.innerHeight * 55) / 1080;
        }
        return (
          <div key={index} className="word">
            <div
              style={{
                height: "1px",
                width: "1px",
                transform: `rotate(${-angle * index}deg) translate(${
                  radius + 2000 * change
                }px) `,
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
