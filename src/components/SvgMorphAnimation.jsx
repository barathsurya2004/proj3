import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { Context } from "../context";

const SvgMorphAnimation = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);
  const endCircleRef = useRef(null); // Ref for the new end circle
  const { meshSelected, pointer } = useContext(Context);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const circle = circleRef.current;
    const endCircle = endCircleRef.current; // Get the end circle

    const rect = container.getBoundingClientRect();
    const x = pointer[0] - rect.left;
    const y = pointer[1] - rect.top;

    const startX = 100; // Starting X of the line
    const startY = 100; // Starting Y of the line
    const length = Math.hypot(x - startX, y - startY);
    const angle = Math.atan2(y - startY, x - startX) * (180 / Math.PI);

    // Calculate end point of the line
    const endX = startX + length * Math.cos((angle * Math.PI) / 180);
    const endY = startY + length * Math.sin((angle * Math.PI) / 180);

    gsap.set(line, { width: length, rotation: angle });
    gsap.set(endCircle, { x: endX - startX, y: endY - startY }); // Position the end circle
  }, [meshSelected]);

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
          width: "20px",
          height: "20px",
          backgroundColor: "orange",
          borderRadius: "50%",
          position: "absolute",
          left: "100px",
          top: "100px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        ref={lineRef}
        style={{
          height: "5px",
          backgroundColor: "orange",
          position: "absolute",
          left: "100px",
          top: "100px",
          transformOrigin: "left center",
        }}
      ></div>
      <div
        ref={endCircleRef} // Reference for the new end circle
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "orange",
          borderRadius: "50%",
          position: "absolute",
          left: "100px", // Initial position, will be updated by gsap
          top: "100px", // Initial position, will be updated by gsap
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default SvgMorphAnimation;
