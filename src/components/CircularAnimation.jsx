import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CircularAnimation.css";
gsap.registerPlugin(ScrollTrigger);

const CircularAnimation = ({ words }) => {
  useEffect(() => {
    var wordss = gsap.utils.toArray(".word1");
    wordss.forEach((word, index) => {
      gsap.fromTo(
        word,
        {
          rotation: 0,
        },
        {
          rotation: -60,
          scrollTrigger: {
            trigger: word,
            start: "center center",
            end: "top top",
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
        paddingLeft: "175px",
      }}
    >
      {words.map((word, index) => (
        <div key={index} className="word1">
          {word}
        </div>
      ))}
    </div>
  );
};

export default CircularAnimation;
