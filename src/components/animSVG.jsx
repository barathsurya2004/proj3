import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const AnimSvg = (props) => {
  useGSAP(() => {
    const cont = document.getElementById("Layer_1");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const center = document.getElementById("center");
    const centerCurve = document.getElementById("center-curve");
    const qMark = document.getElementById("qMark");
    const maskAnim = document.getElementById("mask-qMark");
    const qMarkToSplit = document.getElementById("qMark-to-split");
    gsap.fromTo(
      cont,
      {
        top: "100vh",
      },
      {
        top: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".shall-we",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
      }
    );
    gsap.to(".animSvg-container", {
      top: -cont.getBoundingClientRect().height,
      scrollTrigger: {
        trigger: ".shall-we-to-flag",
        start: "top 60%",
        end: "58% top",
        scrub: 0.05,
      },
      ease: "none",
    });
    const animTime = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim-handler-flag",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    animTime
      .fromTo(
        maskAnim,
        {
          strokeDashoffset: 0,
          strokeDasharray: maskAnim.getTotalLength(),
        },
        {
          strokeDashoffset: maskAnim.getTotalLength(),
          duration: 0.145,
          ease: "none",
        }
      )
      .fromTo(
        qMarkToSplit,
        {
          strokeDashoffset: qMarkToSplit.getTotalLength(),
          strokeDasharray: qMarkToSplit.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.1,
        }
      )
      .fromTo(
        centerCurve,
        {
          strokeDashoffset: centerCurve.getTotalLength(),
          strokeDasharray: centerCurve.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.15,
        }
      )
      .fromTo(
        right,
        {
          strokeDashoffset: right.getTotalLength(),
          strokeDasharray: right.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.5,
        }
      )
      .fromTo(
        left,
        {
          strokeDashoffset: left.getTotalLength(),
          strokeDasharray: left.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.5,
        },
        "<"
      )
      .fromTo(
        center,
        {
          strokeDashoffset: center.getTotalLength(),
          strokeDasharray: center.getTotalLength(),
        },
        {
          strokeDashoffset: 0,
          duration: 0.5,
        },
        "<"
      );
  });
  return (
    <div
      className="animSvg-container"
      style={{
        width: "100vw",
        height: "500vh",
        position: "fixed",
        top: (320 * window.innerHeight) / 720,
        zIndex: 10,
      }}
    >
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1938.03 6835.82"
        width={"100%"}
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="clip-path">
            <path
              transform="translate(1200,5)"
              style={{
                stroke: "black",
                strokeWidth: 20,
              }}
              class="cls-2"
              d="M31.53,68.88c-4.93-17-2.4-24.61,1.27-28.34,5.48-5.57,13.66-2.71,19.28-9.83,3.62-4.59,5.16-12,2.17-16.73S44.4,8.93,33.57,8.62c-9.76-.27-15-.42-19.4,3.45C8.11,17.42,8.42,26.29,8.55,28.41"
            />
          </clipPath>
          <mask id="mask-for-elements">
            <path
              id="mask-qMark"
              transform="translate(1199,0)"
              style={{
                stroke: "white",
                strokeWidth: 20,
              }}
              class="cls-2"
              d="M31.53,68.88c-4.93-17-2.4-24.61,1.27-28.34,5.48-5.57,13.66-2.71,19.28-9.83,3.62-4.59,5.16-12,2.17-16.73S44.4,8.93,33.57,8.62c-9.76-.27-15-.42-19.4,3.45C8.11,17.42,8.42,26.29,8.55,28.41"
            />
          </mask>
        </defs>
        <g data-name="Layer 2">
          <path
            id="right"
            d="M971.82 1334c5 722.66 966.81 516.56 961.24 1124.74 1 398 1 4377.09 1 4377.09"
            data-name="Group 3"
            style={{
              strokeWidth: 10,
              strokeMiterlimit: 10,
              stroke: "#eb7272",
              fill: "none",
            }}
          />
          <g data-name="main">
            <path
              id="left"
              d="M966.21 1334C961.16 2056.65-.61 1850.55 5 2458.73c-1 398-1 4377.09-1 4377.09"
              data-name="Group 3"
              style={{
                stroke: "#bb8be8",
                strokeWidth: 10,
                strokeMiterlimit: 10,
                fill: "none",
              }}
            />
          </g>
          <g data-name="Layer 1-2">
            <path
              id="center-curve"
              d="M1227.49 709.64c-3.81 292.46-254.8 364.54-259.09 645.17"
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
            d="M969.11 1347.48v5488.34"
            style={{
              stroke: "#d3ad62",
              strokeWidth: 10,
              strokeMiterlimit: 10,
              fill: "none",
            }}
          />
          {/* <path
            transform="translate(1199,0)"
            style={{
              stroke: "#d3ad62",
              strokeWidth: 20,
            }}
            class="cls-2"
            d="M8.5,26.89s0-8.1,4.72-11.55C24,6.54,34.54,8.61,37.56,9c9.87,1.14,20.87,5.31,20.6,12.26-.28,7.33-6.13,9.48-19.4,16.46-2.92,1.54-4.94,4.8-6,7a14,14,0,0,0-1.15,7.78c.37,8.56.37,13.41,1,17.17"
          /> */}
          <path
            id="qMark"
            d="M1221.47 45.39v-2.13c0-20.21 25.28-13.36 25.28-24.75 0-5-3.92-8.81-17.54-8.81S1211 14.33 1211 21v1.42h-12.11v-1.6c0-12.55 8.28-20.83 30-20.83 22.43 0 30 7.57 30 17.09 0 20.11-25.39 12.9-25.39 27.05v1.25Zm.43 12.72c0-3 2.23-5.18 5.61-5.18s5.55 2.16 5.55 5.18-2.16 5.11-5.55 5.11-5.61-2.16-5.61-5.11"
            style={{
              fill: "#d3ad62",
            }}
            mask="url(#mask-for-elements)"
          />

          <path
            id="qMark-to-split"
            d="M1227.48 42.62v668.26"
            style={{
              strokeWidth: 12,
              stroke: "#d3ad62",
              strokeMiterlimit: 10,
              fill: "none",
            }}
          />
        </g>
      </svg>
    </div>
  );
};
export default AnimSvg;
