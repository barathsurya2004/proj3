import { useContext, useEffect, useRef } from "react";
import { Context } from "../context";
import gsap from "gsap";

const CurrentSelection = () => {
  const { meshSelected } = useContext(Context);
  // Ref for the container to animate
  const headingRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (meshSelected) {
      // Reset the element's opacity to 0 to prepare for the fade-in animation
      gsap.set(headingRef.current, { opacity: 0, y: 20 });
      // Animate the element to fade in and move up slightly
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5, // Animation duration in seconds
        ease: "power1.out", // Easing function for a smooth effect
      });
      gsap.set(textRef.current, { opacity: 0, y: -20 });
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [meshSelected]); // Dependency array includes meshSelected to trigger the effect on change

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 520,
        width: "40%",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <div
        // Attach the ref to the animated element
        style={{
          position: "absolute",
          top: 10,
          zIndex: 512,
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
              }}
            >
              {meshSelected}
            </h1>
            <h2
              ref={textRef}
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
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
