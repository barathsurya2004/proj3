import { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { CustomEase, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularText from "../components/CircularText";
import CircularAnimation from "../components/CircularAnimation";
import Card from "./Card";
import { Context } from "../context";
import FaceCanvas from "./FaceCanvas";
import ShallWeAnim from "./ShallWeAnim";
import Flag from "./Flag";
import CurrentSelection from "../components/CurrentSelection";
import EndingPage from "./EndingPage";
import ThereIsMore from "./ThereIsMore";
import Ingredients from "./Ingredients";
import Procedure from "./Procedure";
import Characteristics from "./Characteristics";
import SharePage from "./SharePage";
import Question from "./Question";
import Lottie from "lottie-react";
import animationData from "../assets/new_scroll.json";
import img1 from "../assets/food (1).svg";
import img2 from "../assets/food (2).svg";
import img3 from "../assets/food (3).svg";
import img4 from "../assets/food (4).svg";
import img5 from "../assets/food (5).svg";
import img6 from "../assets/food (6).svg";
import img7 from "../assets/food (7).svg";
import img8 from "../assets/food (8).svg";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollToPlugin);
const Hero = () => {
  const [radius, setRadius] = useState(725);
  const { q_mark, setQMark, setMeshSelected } = useContext(Context);
  const foods = [img1, img2, img3, img4, img5, img6, img7, img8];
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

    gsap.to(".card-content", {
      bottom: "0",
      scrollTrigger: {
        trigger: ".food-is",
        start: "top 80%",
        end: "top top",
        scrub: true,
      },
      ease: "none",
    });
    gsap.fromTo(
      ".love",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.01,
        scrollTrigger: {
          trigger: ".food-is-art",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.to(".art", {
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".food-is-art",
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
    gsap.to(".art", {
      left: -10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-adventure",
        start: "top bottom",
        end: "top 80%",
        scrub: 0.1,
      },
    });
    gsap.to(".adventure", {
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".food-is-adventure",
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
    gsap.to(".adventure", {
      left: -10,

      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-beyond-time",
        start: "top bottom",
        end: "top 80%",
        scrub: 0.1,
      },
    });
    gsap.to(".beyond-time", {
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".food-is-beyond-time",
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
    gsap.to(".beyond-time", {
      left: -10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".food-is-culture",
        start: "top bottom",
        end: "top 80%",
        scrub: 0.1,
      },
    });
    gsap.to(".culture", {
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".food-is-culture",
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

    const cultureTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".food-is-culture-definition",
        start: "top bottom",
        end: "top top",
        scrub: 0.1,

        snap: {
          snapTo: 1,
          duration: { min: 0.1, max: 1 },
          ease: "power1.in",
          delay: 0,
          inertia: false,
        },
      },
    });
    cultureTl
      .fromTo(
        ".culture-definition",
        {
          top: "150%",
        },
        {
          top: "20%",
        }
      )
      .fromTo(
        ".culture",
        {
          top: "50%",
        },
        {
          top: "33%",

          immediateRender: false,
        }
      )
      .fromTo(
        ".card-content",
        {
          bottom: 0,
        },
        {
          bottom: 170 * (window.innerHeight / 1080),
          immediateRender: false,
        },
        "<"
      )
      .fromTo(
        ".culture-definition",
        {
          top: "20%",
        },
        {
          top: "1%",
          immediateRender: false,
        },
        "<"
      );
    gsap.fromTo(
      ".card-content",
      {
        bottom: 175 * (window.innerHeight / 1080),
      },
      {
        bottom: window.innerHeight + 175 * (window.innerHeight / 1080),
        scrollTrigger: {
          trigger: ".cuisines-of-the-world",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.to(".culture", {
      top: "-70vh",
      scrollTrigger: {
        trigger: ".cuisines-of-the-world",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      immediateRender: false,
      ease: "none",
    });
    gsap.fromTo(
      ".culdef",
      { top: "45%" },
      {
        top: "-55vh",
        scrollTrigger: {
          trigger: ".cuisines-of-the-world",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.to(".cuisines-of-the-world-title", {
      bottom: 118 * (window.innerHeight / 1080),
      scrollTrigger: {
        trigger: ".cuisines-of-the-world",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".cuisines-of-the-world-title", {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".cuisines-of-india",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
    });
    gsap.fromTo(
      ".cuisines-of-india-title",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".cuisines-of-india",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".cuisines-of-india-title",
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: ".cuisines-of-tn",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".cuisines-of-tn-title",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".cuisines-of-tn",
          start: "top 50",
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".alpha-mask-for-cuisine",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".cuisines-of-india",
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
        },
      }
    );
    gsap.to(".globe-canvas", {
      top: "-101vh",
      scrollTrigger: {
        trigger: ".globe-goes-up",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      ease: "none",
    });
    gsap.to(".cuisines-of-tn-title", {
      top: "-100vh",
      scrollTrigger: {
        trigger: ".globe-goes-up",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      ease: "none",
    });
    gsap.fromTo(
      ".yet-so-unique",
      {
        top: "150%",
      },
      {
        top: "50%",
        scrollTrigger: {
          trigger: ".globe-goes-up",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    const yetSoUniqueTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".yet-so-unique-content-trigger",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      ease: "none",
    });
    yetSoUniqueTl
      .fromTo(
        ".yet-so-unique-content",
        {
          top: "150%",
        },
        {
          top: "60%",
          immediateRender: false,
          ease: "none",
        }
      )
      .fromTo(
        ".yet-so-unique",
        {
          top: "50%",
        },
        {
          top: "38%",
          ease: "none",
          immediateRender: false,
        }
      )
      .fromTo(
        ".yet-so-unique-content",
        {
          top: "60%",
        },
        {
          top: "47%",
          ease: "none",
          immediateRender: false,
        },
        "<"
      );
    gsap.fromTo(
      ".yet-so-unique",
      {
        top: "38%",
      },
      {
        top: "-70%",
        scrollTrigger: {
          trigger: ".reading-space-yet-so-unique",
          start: "top 50%",
          end: "top top",
          scrub: true,
          snap: {
            snapTo: 2,
            duration: { min: 0.1, max: 1 },
            ease: "none",
          },
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".yet-so-unique-content",
      {
        top: "47%",
      },
      {
        top: "-53%",
        scrollTrigger: {
          trigger: ".reading-space-yet-so-unique",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".shall-we-title",
      {
        top: "150%",
      },
      {
        top: "50%",
        scrollTrigger: {
          trigger: ".shall-we",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".shall-we-title",
      {
        top: "50%",
      },
      {
        top: "-50%",
        scrollTrigger: {
          // markers: true,
          trigger: ".shall-we-to-flag",
          start: "top 60%",
          end: "top -100vh",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    const foodsChangetl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });
    foodsChangetl
      .fromTo(
        ".food-0",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-0",
        {
          opacity: 1,
          x: 0,
        },
        {
          delay: 5,
          opacity: 0,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-1",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-1",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-2",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-2",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-3",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-3",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          x: -30,
          duration: 0.5,
          delay: 5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-4",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-4",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-5",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-5",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-6",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-6",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          x: -30,
          delay: 5,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-7",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-7",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-8",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-8",
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          immediateRender: false,
        }
      );
    gsap.to(null, {
      scrollTrigger: {
        trigger: ".chettinad-pointer-trigger",
        start: "top bottom",
        onEnter: () => {
          setMeshSelected("Chettinad");
        },
        onLeaveBack: () => {
          setMeshSelected(null);
        },
      },
    });
    gsap.to(null, {
      scrollTrigger: {
        trigger: ".pandiyanad-pointer-trigger",
        start: "top bottom",
        onEnter: () => {
          setMeshSelected("Pandiyanad");
        },
        onLeaveBack: () => {
          setMeshSelected("Chettiand");
        },
      },
    });
    gsap.to(null, {
      scrollTrigger: {
        trigger: ".pandiyanad-pointer-trigger",
        start: "bottom bottom",
        onEnter: () => {
          setMeshSelected(null);
        },
        onLeaveBack: () => {
          setMeshSelected("Pandiyanad");
        },
      },
    });
    gsap.fromTo(
      ".info-scroll-text-trigger",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".info-text-trigger",
          start: "top bottom",
          end: "top 80%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".info-scroll-text-trigger",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".info-text-trigger",
          start: "top 30%",
          end: "top top",
          scrub: true,
        },
        immediateRender: false,
      }
    );
  });
  return (
    <>
      <div className="hero-container">
        <div className="hero-content snap">
          <div
            style={{
              position: "absolute",
              top: "0",
              left: 0,
              width: "100%",
              height: "95vh",
            }}
          >
            <Lottie
              animationData={animationData}
              style={{
                height: "100%",
              }}
            />
          </div>
          <div
            className="alignn"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 679 * (window.innerWidth / 1920),
                height: 170 * (window.innerHeight / 1080),
                position: "relative",
                marginBottom: 125 * (window.innerHeight / 1080),
              }}
            >
              {foods.map((food, index) => {
                return (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      position: "absolute",
                      transform: index == 6 ? "translateY(25%)" : 0,
                    }}
                  >
                    <img
                      className={`food-${index}`}
                      key={index}
                      src={food}
                      alt="food"
                      style={{
                        height: "100%",
                        opacity: 0,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <p
              style={{
                fontSize: 27 * (window.innerHeight / 1080),
              }}
            >
              Food is something we consume and interact with every day. We
              typically eat every 4-6 hours, enjoying a variety of foods. We
              have emotional connections to certain meals; many times, we crave
              food made by our moms or from home. We share food, enjoy food,
              waste food, and strive for food. Often, we don't know how it's
              made or the effort involved; we just eat and repeat the cycle when
              hunger strikes again. This cycle of consumption, repeats itself
              tirelessly, every single meal, every single day!
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: (34 * window.innerHeight) / 1080,
                marginTop: (60 * window.innerHeight) / 1080,
              }}
            >
              Apart from all this, is there more to food
            </p>
          </div>
        </div>
        <div className="scroll-move-start snap">
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
        <Question />
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
        <div
          className="food-is-culture-definition"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="culture-definition"
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
              zIndex: 10,
              left: 0,
              top: 0,
              fontSize: (27 * window.innerHeight) / 1080,
            }}
          >
            <div
              className="culdef"
              style={{
                width: (788 * window.innerWidth) / 1920,
                marginLeft: "13.02vw",
                position: "absolute",
                top: "45%",
              }}
            >
              <p
                style={{
                  color: "#F2D8A0",
                }}
              >
                Food is more deeply integrated into our life and culture than we
                assume. Just like languages built with words, cuisines use
                ingredients as vocabulary. Indian cuisine, for example, relies
                on ingredients like cardamom, turmeric, and chilies. Preparation
                methods act like verbs, shaping the dish's essence. Think of the
                slow simmering of fragrant biryanis compared to the tandoori's
                fiery smoky perfection. Flavors and techniques are the grammar,
                creating a symphony on the plate. From the creamy kurmas to the
                Jamuns.
              </p>
              <p
                style={{
                  color: "#F2D8A0",
                }}
              >
                A cuisine tells a story of regional traditions and cultural
                heritage, all through the language of food.
              </p>
            </div>
          </div>
        </div>
        <div
          className="cuisines-of-the-world"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <CurrentSelection />
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
              zIndex: 501,
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          >
            <div
              className="cuisines-of-the-world-title"
              style={{
                position: "absolute",
                right: 177 * (window.innerWidth / 1920),
                bottom: -window.innerHeight + 118 * (window.innerHeight / 1080),
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h1
                style={{
                  fontSize: (144 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Bold",
                  margin: 0,
                  transform: `translate(${(13 * window.innerWidth) / 1280}px,${
                    (20 * window.innerWidth) / 1280
                  }px)`,
                  color: "#D3AD62",
                }}
              >
                Cuisines
              </h1>
              <h3
                style={{
                  fontSize: (89 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Demibold Italic",
                  margin: 0,
                  transform: `translate(${
                    (15 * window.innerWidth) / 1280
                  }px,0)`,
                  color: "#D3AD62",
                }}
              >
                of the{" "}
                <span
                  style={{
                    fontSize: (144 * window.innerHeight) / 1080,
                    fontFamily: "TTtravels Next Demibold Italic",
                    color: "#D3AD62",
                  }}
                >
                  World
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="scrub-time-helper" />
        <div
          className="cuisines-of-india"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="cuisines-of-india-title"
            style={{
              position: "fixed",
              zIndex: 501,
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 122 * (window.innerHeight / 1080),
                left: 167 * (window.innerWidth / 1920),
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  fontSize: (144 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Bold",
                  margin: 0,
                  color: "#D3AD62",
                }}
              >
                Cuisines
              </h2>
              <h3
                style={{
                  fontSize: (89 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Demibold Italic",
                  margin: 0,
                  transform: `translate(0,${
                    -(35 * window.innerHeight) / 1280
                  }px`,
                  color: "#D3AD62",
                }}
              >
                of
                <span
                  style={{
                    fontSize: (144 * window.innerHeight) / 1080,
                    fontFamily: "TTtravels Next Demibold Italic",
                    color: "#D3AD62",
                  }}
                >
                  India
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="scrub-time-helper" />
        <div
          className="cuisines-of-tn"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="cuisines-of-tn-title"
            style={{
              position: "fixed",
              pointerEvents: "none",
              zIndex: 501,
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 70 * (window.innerHeight / 1080),
                left: 175 * (window.innerWidth / 1920),
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.2,
              }}
            >
              <h2
                style={{
                  fontSize: (144 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Demibold Italic",
                  margin: 0,
                  color: "#D3AD62",
                }}
              >
                Tamil
              </h2>
              <h2
                style={{
                  fontSize: (144 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Demibold Italic",
                  margin: 0,
                  color: "#D3AD62",
                }}
              >
                Nadu's
              </h2>
              <h2
                style={{
                  fontSize: (144 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next Bold",
                  margin: 0,
                  color: "#D3AD62",
                }}
              >
                Cuisines
              </h2>
            </div>
          </div>
        </div>
        <div className="scrub-time-helper" />
        <div
          className="info-text-trigger"
          style={{
            width: "100%",
            height: "150vh",
          }}
        >
          <div
            className="info-scroll-text-trigger"
            style={{
              position: "fixed",
              zIndex: 501,
              top: 660 * (window.innerHeight / 1080),
              left: 175 * (window.innerWidth / 1920),
            }}
          >
            <p
              style={{
                fontSize: 27 * (window.innerHeight / 1080),
                maxWidth: 854 * (window.innerWidth / 1920),
              }}
            >
              Among the cuisines of Tamil Nadu, Chettinad and Pandiyanad present
              a unique scenario. Despite being just 60 kilometers apart, they
              offer completely different tastes and experiences. They epitomize
              diversity and serve as a prime example of how two cuisines can be
              so distinct, despite their geographical proximity and other shared
              factors.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="chettinad-pointer-trigger"
        ></div>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="pandiyanad-pointer-trigger"
        ></div>

        <div
          className="globe-goes-up"
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="yet-so-unique"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: "150%",
              left: "50%",
              transform: "translate(-50%, -52.5%)",
              width: "100%",
              height: "100vh",
            }}
          >
            <h2
              style={{
                fontFamily: "TTtravels Next Demibold",
                fontSize: 86 * (window.innerHeight / 1080),
                margin: 0,
                color: "#D3AD62",
              }}
            >
              “They are so close, yet
            </h2>
            <h1
              style={{
                fontFamily: "TTtravels Next Demibold",
                fontSize: 86 * (window.innerHeight / 1080),
                lineHeight: 1,
                margin: 0,
                color: "#D3AD62",
              }}
            >
              SO UNIQUE”
            </h1>
          </div>
        </div>
        <div
          className="yet-so-unique-content-trigger"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            className="yet-so-unique-content"
            style={{
              position: "fixed",
              top: "150%",
              left: "50%",
              transform: "translate(-50%, 0%)",
              width: 725 * (window.innerWidth / 1920),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 27 * (window.innerHeight / 1080),
                textAlign: "center",
              }}
            >
              Cuisines are separated by many factors, yet here most boundaries
              are blurred. Both the people and the place share many
              similarities, but the food they eat is distinct.
            </p>
            <p
              style={{
                fontSize: 27 * (window.innerHeight / 1080),
                textAlign: "center",
                width: "80%",
              }}
            >
              When food is considered a cultural identity, understanding these
              details and differences becomes more important than ever.
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: 51 * (window.innerHeight / 1080),
              }}
            >
              Let’s find out more!
            </p>
          </div>
        </div>
        <div
          className="reading-space-yet-so-unique"
          style={{
            width: "100%",
            height: "25vh",
          }}
        />
        <div
          className="shall-we"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <h1
              className="shall-we-title"
              style={{
                fontSize: (86 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Demibold",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-55%, -125%)",
                zIndex: 10,
                color: "#D3AD62",
              }}
            >
              Shall we
            </h1>
          </div>
        </div>
        <div
          className="qMark-melt"
          style={{
            width: "100%",
            height: "50vh",
          }}
        ></div>
        <div className="shall-we-to-flag">
          <ShallWeAnim />
          <Flag />
        </div>

        <div
          className="there-is-more"
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <ThereIsMore />
        </div>
        <div
          className="ingredients-page"
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Ingredients />
        </div>
        <div
          className="procedure-page"
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Procedure />
        </div>
        <div
          className="characteristics-page"
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Characteristics />
        </div>
        <div
          className="last-pages"
          style={{
            position: "relative",
            top: 0,
            left: 0,
          }}
        >
          <div
            className="share-page"
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              top: 0,
              left: 0,
            }}
          >
            <SharePage />
          </div>
          <div
            style={{
              height: "10vh",
              width: "100%",
            }}
          ></div>
          <div className="face-container">
            <FaceCanvas />
          </div>
          <div
            className="ending-page"
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              // zIndex: 500,
            }}
          >
            <EndingPage />
          </div>
        </div>

        <div
          className="voting-helper-page"
          style={{
            height: "110vh",
            width: "100%",
          }}
        ></div>
        <div
          className="ending-page-helper"
          style={{
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Hero;
