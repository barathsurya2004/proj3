import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import gsap from "gsap";
import SvgMorphAnimation from "./SvgMorphAnimation";

const CurrentSelection = () => {
  const { meshSelected, down } = useContext(Context);
  // Ref for the container to animate
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const [position, setPosition] = useState({});
  useEffect(() => {
    if (down) {
      setPosition({
        bottom: 413 * (window.innerHeight / 1080),
        left: 173 * (window.innerWidth / 1920),
      });
    } else {
      setPosition({
        top: 170 * (window.innerHeight / 1080),
        right: 95 * (window.innerWidth / 1280),
      });
    }
  }, [down]);
  useEffect(() => {
    if (meshSelected) {
      // Reset the element's opacity to 0 to prepare for the fade-in animation
      gsap.set(headingRef.current, { opacity: 0, y: 20 });
      // Animate the element to fade in and move up slightly
      gsap.to(headingRef.current, {
        delay: 0.25,
        opacity: 1,
        y: 0,
        duration: 0.25, // Animation duration in seconds
        ease: "power1.out", // Easing function for a smooth effect
      });
      gsap.set(textRef.current, { opacity: 0, y: -20 });
      gsap.to(textRef.current, {
        delay: 0.25,
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power1.out",
      });
    }
  }, [meshSelected]); // Dependency array includes meshSelected to trigger the effect on change

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 520,
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      {meshSelected && <SvgMorphAnimation />}
      <div
        // Attach the ref to the animated element
        style={{
          position: "absolute",
          ...position,
          zIndex: 512,
          width: 525 * (window.innerWidth / 1920),
        }}
      >
        {meshSelected ? (
          <div>
            <h1
              ref={headingRef}
              className="selection-heading"
              style={{
                fontFamily: "TTtravels Next Bold",
                fontSize: (55 * window.innerWidth) / 1920,
                position: "absolute",
                margin: 0,
                bottom: (-40 * window.innerHeight) / 720,
                left: 0,
              }}
            >
              {meshSelected}
            </h1>
            <h2
              ref={textRef}
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                position: "absolute",
                top: (35 * window.innerHeight) / 720,
                left: 0,
              }}
            >
              Central Asian cuisine blends influences from its nomadic heritage,
              featuring hearty dishes like plov (pilaf), kebabs, and bread.
              Dairy products, mutton, and horse meat are staples, reflecting the
              region's pastoral lifestyle.
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentSelection;
