import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../context";

const SvgMorphAnimation = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const { meshSelected, pointer, down } = useContext(Context);
  const newLineRef = useRef(null);
  const downPosition = {
    x: 701 * (window.innerWidth / 1920),
    y: 725 * (window.innerHeight / 1080),
  };
  const upPosition = {
    x: 1225 * (window.innerWidth / 1920),
    y: 230 * (window.innerHeight / 1080),
  };

  const circleRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const rect = container.getBoundingClientRect();
    const cursorX = pointer[0] - rect.left;
    const cursorY = pointer[1] - rect.top;

    const selectedPosition = down ? downPosition : upPosition;
    const length = Math.hypot(
      selectedPosition.x - cursorX,
      selectedPosition.y - cursorY
    );
    const angle =
      Math.atan2(selectedPosition.y - cursorY, selectedPosition.x - cursorX) *
      (180 / Math.PI);

    gsap.set(line, {
      rotation: angle,
      x: cursorX,
      y: cursorY,
      transformOrigin: "0% 50%",
    });
    gsap.set(circleRef.current, {
      x: cursorX,
      y: cursorY,
    });
    const tl = gsap.timeline();
    tl.fromTo(
      line,
      {
        width: 0,
      },
      {
        width: length,
        duration: 0.25,
        ease: "none",
      }
    ).fromTo(
      newLineRef.current,
      {
        width: 0,
      },
      {
        width: 525 * (window.innerWidth / 1920),
        duration: 0.25,
        ease: "none",
      }
    );
  }, [meshSelected, down]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={lineRef}
        style={{
          height: 5 * (window.innerWidth / 1920),
          backgroundColor: "#d3ad62",
          position: "absolute",
          transformOrigin: "left center",
        }}
      ></div>
      <div
        className="hori-line"
        ref={newLineRef}
        style={{
          top: down ? downPosition.y : upPosition.y,
          left: down ? downPosition.x : upPosition.x,
          height: 5 * (window.innerWidth / 1920),
          transform: `rotate(${down ? 180 : 0}deg)`,
          backgroundColor: "#d3ad62",
          position: "absolute",
          transformOrigin: "left center",
          width: 674 * (window.innerWidth / 1920),
        }}
      ></div>
      <div
        className="circle-hover"
        ref={circleRef}
        style={{
          width: 20 * (window.innerWidth / 1920),
          height: 20 * (window.innerWidth / 1920),
          borderRadius: "50%",
          backgroundColor: "#d3ad62",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default SvgMorphAnimation;
