import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CircularAnimation.css";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const CircularAnimation = ({ words }) => {
  const radius = 725;
  const margin = 3;
  useGSAP(() => {
    words.forEach((word, index) => {
      let wordElement = `.word1-${index}`;
      gsap.to(wordElement, {
        opacity: 0,
        scrollTrigger: {
          trigger: wordElement,
          start: "center center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
        duration: 0.001,
      });
      let cWordElement = `.c-word1-${index}`;
      gsap.to(cWordElement, {
        opacity: 1,
        scrollTrigger: {
          trigger: wordElement,
          start: "center center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
        duration: 0.001,
      });
    });
    gsap.to(".text-circle", {
      rotation: -180,
      scrollTrigger: {
        trigger: ".words-container",
        start: `top -${2 * margin - 0.1}%`,
        end: `bottom -${2 * margin}%`,
        scrub: true,
      },
      ease: "none",
    });
  });

  return (
    <div
      className="words-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "50vh",
        paddingLeft: `${(window.innerWidth * 173) / 1920}px`,
      }}
    >
      <div
        className="text-circle-container"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className="text-circle"
          style={{
            position: "relative",
            width: "100%",
            transformOrigin: `${
              (-(radius - 175) * window.innerWidth) / 1920
            }px center`,
            height: "100%",
          }}
        >
          {words.map((word, index) => (
            <div
              key={index}
              className={`c-word1-${index}`}
              style={{
                position: "absolute",
                opacity: 0,
                top: "50%",
                fontSize: "5.0925vh",
                left: -((radius - 170) * window.innerWidth) / 1920,
                transform: `rotate(${
                  index * (360 / (words.length * 3))
                }deg) translate(${
                  (radius * window.innerWidth) / 1920
                }px, -50%) `,
                transformOrigin: "top left",
              }}
            >
              <div className="word-cont">{word}</div>
            </div>
          ))}
        </div>
      </div>
      {words.map((word, index) => (
        <div
          key={index}
          className={`word1 word1-${index}`}
          style={{
            margin: `${margin}vh 0`,
          }}
        >
          <div className="word-cont">{word}</div>
        </div>
      ))}
    </div>
  );
};

export default CircularAnimation;
