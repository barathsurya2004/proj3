import { useEffect } from "react";
import "./Hero.css";
import { CustomEase, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularText from "../components/CircularText";
import CircularAnimation from "../components/CircularAnimation";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".white-flash",
      {
        opacity: 0,
      },
      {
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
  });
  return (
    <div className="hero-container">
      <div className="white-flash" />
      <div className="hero-content">
        <p>
          Food is something we consume and interact with every day. We typically
          eat every 4-6 hours, enjoying a variety of foods. We have emotional
          connections to certain meals; many times, we crave food made by our
          moms or from home. We share food, enjoy food, waste food, and strive
          for food. Often, we don't know how it's made or the effort involved;
          we just eat and repeat the cycle when hunger strikes again. This cycle
          of consumption, repeats itself tirelessly, every single meal, every
          single day!
        </p>
        <p>Apart from all this, is there more to food</p>
      </div>
      <div className="scroll-move-start">
        <div>
          <CircularAnimation
            words={[
              "Is food only for the body",
              "Is food only for the body",
              "Is food only for the body",
              "Is food only for the body",
              "Is food only for the body",
              "Is food only for the body",
            ]}
          />
        </div>
      </div>
      <div className="draggable-circle">
        <CircularText
          texts={[
            "Is food only for the body",
            "Do food have habits",
            "Is food geo-taggeed",
            "Does food influence life",
            "Does food have mood",
            "Whats a meal and a feast",
          ]}
          radius={1450 / 2}
        />
      </div>
      <div
        className="dummy"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      ></div>
    </div>
  );
};

export default Hero;
