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
    gsap.to(".question", {
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
            height: "300vh",
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
                left: "-100vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  marginLeft: (175 * window.innerWidth) / 1920,
                  fontSize: (55 * window.innerHeight) / 1080,
                }}
              >
                What is food
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
