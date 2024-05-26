import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CircularAnimation.css";
gsap.registerPlugin(ScrollTrigger);

const CircularAnimation = ({ words }) => {
  useEffect(() => {
    var wordss = gsap.utils.toArray(".word1");
    wordss.forEach((word, index) => {
      gsap.to(word, {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: word,
          start: "center 58%",
          end: "center 42%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.fromTo(
        word,
        {
          rotation: 0,
          y: 0,
        },
        {
          rotation: -110,
          y: 1000,
          scrollTrigger: {
            trigger: word,
            start: "center center",
            end: "+=2500",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          immediateRender: false,
        }
      );
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        width: "100vw",
        paddingTop: "50vh",
        paddingLeft: "175px",
      }}
    >
      {words.map((word, index) => (
        <div key={index} className="word1">
          <div className="word-cont">{word}</div>
        </div>
      ))}
    </div>
  );
};

export default CircularAnimation;
