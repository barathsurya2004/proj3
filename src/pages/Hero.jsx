import { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { CustomEase, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularText from "../components/CircularText";
import CircularAnimation from "../components/CircularAnimation";
import AlphaMask from "../components/AlphaMask";
import Card from "./Card";
import { Context } from "../context";
import Definition from "./Definition";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
const Hero = () => {
  const [radius, setRadius] = useState(725);
  const { q_mark, setQMark } = useContext(Context);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".white-flash",
      {
        opacity: 0,
      },
      {
        delay: 5,
        opacity: 1,
        duration: 0.03,
        ease: CustomEase.create("custom", "M0,0 C0.5,0 0.5,1 1,1 "),
      }
    )
      .to(".white-flash", {
        opacity: 0,
        duration: 0.03,
        ease: CustomEase.create("custom", "M0,0 C0.5,0 0.5,1 1,1"),
      })
      .to(".white-flash", {
        opacity: 1,
        delay: 0.01,
        duration: 0.03,
        ease: CustomEase.create("custom", "M0,0 C0.5,0 0.5,1 1,1"),
      })
      .to(".white-flash", {
        opacity: 0,
        duration: 0.03,
        ease: CustomEase.create("custom", "M0,0 C0.5,0 0.5,1 1,1"),
      });
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: 30,
      },
      {
        delay: 0.5,
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".hero-content",

          toggleActions: "play none none none",
        },
      }
    );
    gsap.to(".question-text", {
      opacity: 1,
      left: 0,
      scrollTrigger: {
        trigger: ".question-trigger",
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
    gsap.fromTo(
      ".question-text",
      {
        opacity: 1,
      },
      {
        opacity: 0.5,
        top: "15.4351vh",
        scrollTrigger: {
          trigger: ".definition",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        immediateRender: false,
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
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.to(".card-content", {
      bottom: 0,
      scrollTrigger: {
        trigger: ".food-is",
        start: "top 80%",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".love", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-art",
        start: "top bottom",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.to(".art", {
      left: 0,
      scrollTrigger: {
        trigger: ".food-is-art",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".art", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-adventure",
        start: "top bottom",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.to(".adventure", {
      left: 0,
      scrollTrigger: {
        trigger: ".food-is-adventure",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".adventure", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-beyond-time",
        start: "top bottom",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.to(".beyond-time", {
      left: 0,
      scrollTrigger: {
        trigger: ".food-is-beyond-time",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".beyond-time", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-culture",
        start: "top bottom",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.to(".culture", {
      left: 0,
      scrollTrigger: {
        trigger: ".food-is-culture",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.fromTo(
      ".definition-container",
      {
        y: "10vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".definition",
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".definition-container",
      {
        y: 0,
      },
      {
        y: "-100vh",
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        ease: "none",
      }
    );
  });
  return (
    <>
      <div className="hero-container">
        <div className="white-flash" />
        <div className="hero-content">
          <div className="alignn">
            <p>
              Food is something we consume and interact with every day. We
              typically eat every 4-6 hours, enjoying a variety of foods. We
              have emotional connections to certain meals; many times, we crave
              food made by our moms or from home. We share food, enjoy food,
              waste food, and strive for food. Often, we don't know how it's
              made or the effort involved; we just eat and repeat the cycle when
              hunger strikes again. This cycle of consumption, repeats itself
              tirelessly, every single meal, every single day!
            </p>
            <p>Apart from all this, is there more to food</p>
          </div>
        </div>
        <div className="scroll-move-start">
          <div>
            <CircularAnimation
              words={[
                "Is food the same for all",
                "Is food only for the body",
                "Do food have habits",
                "Is food geo-taggeed",
                "Does food influence life",
                "Does food have mood",
                "Whats a meal and a feast",
                "What is good food for you",
                "Where is your food from",
                "Does food have history",
              ]}
            />
          </div>
        </div>
        <div className="draggable-circle">
          <CircularText
            texts={[
              "Is food the same for all",
              "Is food only for the body",
              "Do food have habits",
              "Is food geo-taggeed",
              "Does food influence life",
              "Does food have mood",
              "Whats a meal and a feast",
              "What is good food for you",
              "Where is your food from",
              "Does food have history",
            ]}
            radius={radius}
          />
        </div>
        <div
          className="drag-space"
          style={{
            width: "100%",
            height: "200vh",
          }}
        ></div>
        <div className="wheel-burst"></div>
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
                top: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  marginLeft: (175 * window.innerWidth) / 1920,
                  fontSize: (55 * window.innerHeight) / 1080,
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
        <div className="buffer"></div>
        <div className="food-is">
          <Card />
        </div>
        <div
          className="food-is-love"
          style={{
            width: "100%",
            height: "150vh",
          }}
        ></div>
        <div
          className="food-is-art"
          style={{
            width: "100%",
            height: "150vh",
          }}
        ></div>
        <div
          className="food-is-adventure"
          style={{
            width: "100%",
            height: "150vh",
          }}
        ></div>
        <div
          className="food-is-beyond-time"
          style={{
            width: "100%",
            height: "150vh",
          }}
        ></div>
        <div
          className="food-is-culture"
          style={{
            width: "100%",
            height: "150vh",
          }}
        ></div>
      </div>
    </>
  );
};

export default Hero;
