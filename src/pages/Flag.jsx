import React, { useEffect, useRef, useState } from "react";
import center from "../assets/center.svg";
import left from "../assets/left-station.svg";
import right from "../assets/right-station.svg";
import button from "../assets/slider-button.svg";
import gsap from "gsap";
import PandiFlag from "./PandiFlag";
import ChettiFlag from "./ChettiFlag";

const Flag = () => {
  const path1 = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="474 0 960.45 3000">
      <defs>
        <filter id="purple-glow" filterUnits="userSpaceOnUse">
          <feFlood
            result="flood"
            flood-color="#bb8be8"
            flood-opacity="0.1"
          ></feFlood>
          <feComposite
            in="flood"
            result="mask"
            in2="SourceGraphic"
            operator="in"
          ></feComposite>
          <feMorphology
            in="mask"
            result="dilated"
            operator="dilate"
            radius="150"
          ></feMorphology>
          <feGaussianBlur
            in="dilated"
            result="blurred"
            stdDeviation="170"
          ></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <path
        fill="none"
        stroke="#bb8be8"
        stroke-width="17"
        d="M480.225,0 L480.225,3392.025"
        filter="url(#purple-glow)"
      />
    </svg>
  );

  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [overflowPandiyanad, setOverflowPandiyanad] = useState("hidden");
  const [overflowChettinad, setOverflowChettinad] = useState("hidden");
  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (sliderValue < 40) {
      setSliderValue(5);
      setOverflowChettinad("scroll");
      setOverflowPandiyanad("hidden");
    } else if (sliderValue > 60) {
      setSliderValue(95);
      setOverflowChettinad("hidden");
      setOverflowPandiyanad("scroll");
    } else {
      setSliderValue(50);
      setOverflowChettinad("hidden");
      setOverflowPandiyanad("hidden");
    }
  };

  useEffect(() => {
    const slider = document.querySelector(".slider-flags");
    slider.addEventListener("pointerdown", handlePointerDown);
    slider.addEventListener("pointerup", handlePointerUp);

    return () => {
      slider.removeEventListener("pointerdown", handlePointerDown);
      slider.removeEventListener("pointerup", handlePointerUp);
    };
  }, [sliderValue]);

  const styles = {
    container: {
      width: "100%",
      height: "110vh",
      position: "relative",
      overflow: "hidden",
    },
    img: {
      position: "absolute",
      top: "-100%",
      height: "300%",
      width: "50%",
      left: 0,
    },
    flags: {
      position: "absolute",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 510,
      scrollbarWidth: "none",
    },
    completeFlagContainer: {
      position: "absolute",
      top: 0,
      minWidth: "100vw",
      height: "100%",
    },
  };

  return (
    <div className="flag-container" style={styles.container}>
      <div
        className="pandiyanad-flag"
        style={{
          ...styles.flags,
          width: `${sliderValue}%`,
          overflow: overflowPandiyanad,
        }}
      >
        <div
          className="complete-flag-container"
          style={{
            ...styles.completeFlagContainer,
            left: 0,
          }}
        >
          <img
            style={{
              ...styles.img,
              left: "-24.8%",
            }}
            src={left}
            alt=""
          />
          {/* {path1} */}
          <PandiFlag />
        </div>
      </div>

      <div
        className="chettinad-flag"
        style={{
          ...styles.flags,
          left: `${sliderValue}%`,
          width: `${100 - sliderValue}%`,
          overflow: overflowChettinad,
        }}
      >
        <div
          className="complete-flag-container"
          style={{
            ...styles.completeFlagContainer,
            textAlign: "right",
            right: 0,
          }}
        >
          <img
            style={{
              ...styles.img,
              stroke: "#bb8be8",
              left: "74.8%",
            }}
            src={right}
            alt=""
          />
          <ChettiFlag />
        </div>
      </div>

      <img
        style={{
          ...styles.img,
          left: ` ${sliderValue - 25}%`,
          zIndex: 509,
        }}
        src={center}
        alt=""
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          left: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%,-50%)",
            zIndex: 510,
          }}
        >
          <div className="slider-line">
            <div
              className="slider-button"
              aria-hidden="true"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
            >
              <img
                src={button}
                alt=""
                style={{
                  width: (100 * window.innerWidth) / 1920,
                  padding: "auto 0",
                  position: "absolute",
                  left: `${sliderValue}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <input
            style={{
              opacity: 0,
              width: "100%",
              // height: "100vh",
            }}
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="slider-flags"
            onChange={(e) => {
              const value = e.target.value;
              setSliderValue(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Flag;
