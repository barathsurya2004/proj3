import { useGSAP } from "@gsap/react";
import Definition from "./Definition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Question = () => {
  useGSAP(() => {
    gsap.to(".question-text", {
      opacity: 1,
      left: 0,
      scrollTrigger: {
        trigger: ".question-trigger",
        start: "top 160%",
        end: "top center",
        toggleActions: "play none none reverse",
        scrub: 0.1,
      },
    });
    const questionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".definition",
        start: "top bottom",
        end: "top top",
        scrub: 0.1,
        snap: {
          snapTo: 1,
          duration: { min: 0.1, max: 1 },
          ease: "power1.in",
          delay: 0,
        },
      },
    });
    questionTl
      .fromTo(
        ".definition-container",
        {
          top: "100%",
        },
        {
          top: "35%",
          ease: "none",
        }
      )

      .fromTo(
        ".definition-container",
        {
          top: "35%",
        },
        {
          top: "-1%",
          immediateRender: false,
          ease: "none",
        }
      )
      .fromTo(
        ".question-text",
        {
          opacity: 1,
        },
        {
          opacity: 0.3,
          top: "15vh",
          ease: "none",
        },
        "<"
      );

    gsap.fromTo(
      ".definition-container",
      {
        top: "0%",
      },
      {
        top: "-100%",
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "top top",
          scrub: 0.1,
          snap: {
            snapTo: 1,
            duration: { min: 0.1, max: 1 },
            ease: "power1.in",
            delay: 0,
          },
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".question-text",
      {
        top: "15.4351vh",
      },
      {
        top: "-84.5649vh",
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "top top",
          scrub: 0.1,
          snap: {
            snapTo: 1,
            duration: { min: 0.1, max: 1 },
            ease: "power1.in",
            delay: 0,
          },
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  return (
    <>
      <div className="what-is-food">
        <div
          className="question-trigger"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="question"
            style={{
              height: "100vh",
              width: "100%",
              position: "fixed",
              zIndex: 10,
              top: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                marginLeft: (175 * window.innerWidth) / 1920,
                fontSize: (55 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Demibold",
                transform: "translate(0% ,-100%)",
              }}
              className="question-text"
            >
              What is food
            </h1>
          </div>
        </div>
      </div>
      <div
        className="definition"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Definition />
      </div>
      <div
        className="reading-space"
        style={{
          width: "100%",
          height: "20vh",
        }}
      ></div>
    </>
  );
};
export default Question;
