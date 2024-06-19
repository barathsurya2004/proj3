import left from "../assets/left.svg";
import right from "../assets/right.svg";
import center from "../assets/center.svg";
import curve from "../assets/curve.svg";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ShallWeAnim = () => {
  useGSAP(() => {
    gsap.to(".mask-control-flag", {
      y: "-300%",
      scrollTrigger: {
        // markers: true,
        trigger: ".anim-handler-flag",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.fromTo(
      ".mask-helper-flag",
      {
        top: "-40%",
      },
      {
        top: 0,
        scrollTrigger: {
          //   markers: true,
          trigger: ".anim-handler-flag",
          start: "50% 50%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".mask-helper-flag",
      {
        top: 0,
      },
      {
        top: "-100%",
        scrollTrigger: {
          trigger: ".flag-container",
          start: "top bottom",
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  const styles = {
    container: {
      width: "100%",
      height: "300vh",
      position: "relative",
      overflow: "hidden",
    },
    img: {
      position: "absolute",
      top: "5%",
      height: "100%",
      width: "50%",
    },
  };

  return (
    <div style={styles.container} className="anim-handler-flag">
      <div
        className="mask-helper-flag"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          left: 0,
          top: "-40%",
        }}
      >
        <div
          className="mask-control-flag"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "150%",
            left: "0",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "300vh",
              width: "100%",
            }}
          >
            <img
              src={left}
              style={{
                ...styles.img,
                zIndex: 1,
                left: "0",
              }}
              alt=""
            />
            <img
              src={right}
              style={{
                ...styles.img,
                left: "50%",
                zIndex: 2,
              }}
              alt=""
            />
            <img
              src={curve}
              style={{
                position: "absolute",
                height: "200%",
                width: "12%",
                left: "49.8%",
                top: "-70%",
                zIndex: 3,
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShallWeAnim;
