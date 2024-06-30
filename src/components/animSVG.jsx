import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const AnimSVG = (props) => {
  useGSAP(() => {
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const center = document.getElementById("center");
    const centerCurve = document.getElementById("center-curve");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim-handler-flag",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    if (right && left && center && centerCurve) {
      tl.fromTo(
        "#center-curve",
        {
          strokeDasharray: centerCurve.getTotalLength(),
          strokeDashoffset: centerCurve.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.08,
        }
      )
        .fromTo(
          "#right",
          {
            strokeDasharray: right.getTotalLength(),
            strokeDashoffset: right.getTotalLength(),
          },
          {
            strokeDashoffset: 0,

            duration: 1,
            ease: "power1.inOut",
          }
        )
        .fromTo(
          "#left",
          {
            strokeDasharray: left.getTotalLength(),
            strokeDashoffset: left.getTotalLength(),
          },
          {
            strokeDashoffset: 0,

            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        .fromTo(
          "#center",
          {
            strokeDasharray: center.getTotalLength(),
            strokeDashoffset: center.getTotalLength(),
          },
          {
            strokeDashoffset: 0,

            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 1938.03 6126.25" {...props}>
      <defs>
        <style>{".cls-30{fill:url(#glow-gradient)}"}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <g id="main">
            <path
              id="right"
              d="M971.82 624.42c5 722.66 966.81 516.57 961.24 1124.74 1 398 1 4377.09 1 4377.09"
              data-name="Group 3"
              style={{
                strokeMiterlimit: 10,
                strokeWidth: 10,
                stroke: "#eb7272",
                fill: "none",
              }}
            />
          </g>
          <g id="main-2" data-name="main">
            <path
              id="left"
              d="M966.21 624.42C961.16 1347.08-.61 1141 5 1749.16 4 2147.2 4 6090.7 4 6200.7"
              data-name="Group 3"
              style={{
                stroke: "#bb8be8",
                strokeMiterlimit: 10,
                strokeWidth: 8,
                fill: "none",
              }}
            />
          </g>
          <g id="Layer_1-2" data-name="Layer 1-2">
            <path
              id="center-curve"
              d="M1227.49.08c-3.81 292.46-254.8 364.53-259.09 645.16"
              data-name="Group 1"
              style={{
                strokeWidth: 12,
                stroke: "#d3ad62",
                fill: "none",
              }}
            />
          </g>
          <path
            id="center"
            d="M969.11 637.92v5561.67"
            style={{
              stroke: "#d3ad62",
              strokeMiterlimit: 10,
              strokeWidth: 10,
              fill: "none",
            }}
          />
        </g>
      </g>
    </svg>
  );
};
export default AnimSVG;
