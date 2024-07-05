import { useEffect, useRef, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerWidth * radius) / 1920;
  const [change, setChange] = useState(0);
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [alphaMaskVisible, setAlphaMaskVisible] = useState(false);
  const [indVisible, setIndVisible] = useState(null);
  const prevIndVisibleRef = useRef();

  useEffect(() => {
    const prevIndVisible = prevIndVisibleRef.current;
    // Animate the previous indVisible to opacity 0.3
    if (prevIndVisible !== undefined && prevIndVisible !== indVisible) {
      gsap.to(`.cir-text-${prevIndVisible}`, {
        opacity: 0.3,
        duration: 0.5,
        ease: "power4",
      });
    }

    // Animate the current indVisible to opacity 1
    gsap.to(`.cir-text-${indVisible}`, {
      opacity: 1,
      duration: 0.5,
      ease: "power4",
    });

    // Update the ref with the current indVisible for the next render
    prevIndVisibleRef.current = indVisible;
  }, [indVisible]);

  useGSAP(() => {
    Draggable.create("#drag", {
      type: "rotation",
      onDragEnd: () => {
        const rotation = gsap.getProperty("#drag", "rotation");
        gsap.to("#drag", {
          rotation: rotation - (rotation % 12),
        });
        let ind = Math.floor(
          (30 - ((((rotation - (rotation % 12)) % 360) + 360) % 360) / 12) % 30
        );
        setIndVisible(ind);
      },
    });
    gsap.fromTo(
      "#drag",
      {
        rotation: 45,
      },
      {
        rotation: -36,
        scrollTrigger: {
          trigger: ".draggable-circle",
          start: "top bottom",
          end: `+=${window.innerHeight * 1.6}`,
          scrub: 0.05,
          onLeave: () => {
            setZIndex(1000);
            setIndVisible(3);
            setVisibleCount(texts.length);
          },
          onEnterBack: () => {
            setIndVisible(null);
            setZIndex(10);
            setVisibleCount(10);
          },
        },
      }
    );
    gsap.to("#drag", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        end: "top top",
        onEnter: () => {
          setZIndex(0);
          setAlphaMaskVisible(true);
        },
        onLeaveBack: () => {
          setZIndex(800);
          setIndVisible(3);
          setAlphaMaskVisible(false);
        },
        onUpdate: (progress) => {
          setChange(progress.progress);
        },
      },
    });
  });
  return (
    <div
      style={{
        position: "fixed",
        top: (-26 * window.innerHeight) / 1080,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: zIndex,
      }}
    >
      <div className="circle-container" style={{}}>
        <div
          id="drag"
          className="circle"
          style={{
            position: "absolute",
            width: `${radius * 5}px `,
            height: `${radius * 5}px`,
            left: ` ${(-2364 * window.innerWidth) / 1920}px`,
          }}
        >
          {texts.map((text, index) => {
            const angle = (index * 360) / texts.length;
            let fontSize = 0.05095;
            if (index > visibleCount) fontSize = "0";
            // console.log(index);
            return (
              <div
                className={`circle-text cir-text-${index}`}
                key={index}
                style={{
                  opacity: 0.3,
                }}
              >
                <div
                  style={{
                    transform: ` rotate(${angle}deg) translate(${
                      radius + window.innerWidth * change
                    }px) `,
                    transformOrigin: `left center`,
                    fontFamily: "TTtravels Next Demibold",
                    fontSize:
                      fontSize * window.innerHeight +
                      change * window.innerHeight * 0.05,
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularText;
