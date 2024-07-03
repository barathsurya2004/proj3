import { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { CustomEase, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularText from "../components/CircularText";
import CircularAnimation from "../components/CircularAnimation";
import Card from "./Card";
import { Context } from "../context";
import Definition from "./Definition";
import { Face } from "three/examples/jsm/Addons.js";
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
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.to(".art", {
      left: 0,
      opacity: 1,
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
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.to(".adventure", {
      left: 0,
      opacity: 1,
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
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.to(".beyond-time", {
      left: 0,
      opacity: 1,
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
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.to(".culture", {
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".food-is-culture",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    const cultureTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".food-is-culture-definition",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    cultureTl
      .fromTo(
        ".culture-definition",
        {
          opacity: 0,
          top: "150%",
        },
        {
          top: "20%",
          opacity: 1,
        }
      )
      .fromTo(
        ".culture",
        {
          top: "50%",
        },
        {
          top: "30%",

          immediateRender: false,
        }
      )
      .fromTo(
        ".card-content",
        {
          bottom: 0,
        },
        {
          bottom: 175 * (window.innerHeight / 1080),
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
          top: "0%",
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
        }
      )
      .fromTo(
        ".yet-so-unique",
        {
          top: "50%",
        },
        {
          top: "30%",

          immediateRender: false,
        }
      )
      .fromTo(
        ".yet-so-unique-content",
        {
          top: "60%",
        },
        {
          top: "50%",
          immediateRender: false,
        },
        "<"
      );
    gsap.fromTo(
      ".yet-so-unique",
      {
        top: "30%",
      },
      {
        top: "-70%",
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
      ".yet-so-unique-content",
      {
        top: "50%",
      },
      {
        top: "-50%",
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
        <Question />
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
              transform: "translate(-50%, -50%)",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: "TTtravels Next Demibold",
                fontSize: 89 * (window.innerHeight / 1080),
                margin: 0,
              }}
            >
              “They are so close, yet
            </h2>
            <h1
              style={{
                fontFamily: "TTtravels Next Demibold",
                fontSize: 89 * (window.innerHeight / 1080),
                margin: 0,
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
            height: "100vh",
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
                fontSize: (89 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Demibold",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              Shall we ?
            </h1>
          </div>
        </div>
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
          className="share-page"
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <SharePage />
        </div>
        <div className="face-container">
          <FaceCanvas />
        </div>
        <div
          className="ending-page"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            zIndex: 500,
          }}
        >
          <EndingPage />
        </div>
      </div>
    </>
  );
};

export default Hero;
