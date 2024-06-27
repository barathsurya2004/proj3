import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../context";

const SvgMorphAnimation = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);
  const endCircleRef = useRef(null); // Ref for the new end circle
  const { meshSelected, pointer, down } = useContext(Context);
  const downPosition = {
    x: 841 * (window.innerWidth / 1920),
    y: 730 * (window.innerHeight / 1080),
  };
  const upPosition = {
    x: 1246 * (window.innerWidth / 1920),
    y: 310 * (window.innerHeight / 1080),
  };
  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const circle = circleRef.current;
    const endCircle = endCircleRef.current; // Get the end circle

    const rect = container.getBoundingClientRect();
    const x = pointer[0] - rect.left;
    const y = pointer[1] - rect.top;

    const position = down ? downPosition : upPosition; // Starting X of the line
    const startX = position.x;
    const startY = position.y;
    const length = Math.hypot(x - startX, y - startY);
    const angle = Math.atan2(y - startY, x - startX) * (180 / Math.PI);

    // Calculate end point of the line
    const endX = startX + length * Math.cos((angle * Math.PI) / 180);
    const endY = startY + length * Math.sin((angle * Math.PI) / 180);

    gsap.set(line, { width: length, rotation: angle });
    gsap.set(endCircle, { x: endX - startX, y: endY - startY }); // Position the end circle
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
        ref={circleRef}
        style={{
          width: "0px",
          height: "0px",
          borderRadius: "50%",
          position: "absolute",
          left: down ? downPosition.x : upPosition.x,
          top: down ? downPosition.y : upPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        ref={lineRef}
        style={{
          height: 5 * (window.innerWidth / 1920),
          backgroundColor: "#d3ad62",
          position: "absolute",
          left: down ? downPosition.x : upPosition.x,
          top: down ? downPosition.y : upPosition.y,
          transformOrigin: "left center",
        }}
      ></div>
      <div
        ref={endCircleRef} // Reference for the new end circle
        style={{
          width: 20 * (window.innerWidth / 1920),
          height: 20 * (window.innerWidth / 1920),
          backgroundColor: "#d3ad62",
          borderRadius: "50%",
          position: "absolute",
          left: down ? downPosition.x : upPosition.x, // Initial position, will be updated by gsap
          top: down ? downPosition.y : upPosition.y, // Initial position, will be updated by gsap
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        style={{
          height: 5 * (window.innerWidth / 1920),
          backgroundColor: "#d3ad62",
          position: "absolute",
          left: down
            ? downPosition.x - 674 * (window.innerWidth / 1920)
            : upPosition.x,
          top: down ? downPosition.y : upPosition.y,
          transformOrigin: "right center",
          width: 674 * (window.innerWidth / 1920),
        }}
      ></div>
    </div>
  );
};

export default SvgMorphAnimation;
