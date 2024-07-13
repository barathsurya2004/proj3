import Footer from "../components/Footer";
import image from "../assets/backToTop.svg";
import { useContext, useState } from "react";
import Gallery from "../components/Gallery";
import { Context } from "../context";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Disclaimer from "../components/Disclaimer";
import gsap from "gsap";
import goto from "../assets/goto.svg";
const EndingPage = () => {
  const { mode, setMode } = useContext(Context);
  const styles = {
    h1: {
      fontSize: (55 * window.innerWidth) / 1920,
      fontFamily: "TTtravels Next Bold",
      position: "relative",
      zIndex: 450,
      cursor: "pointer",
    },
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="navbar-ending-page"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",

          width: "100%",
          position: "absolute",
          top: (17 * window.innerHeight) / 720,
        }}
      >
        <h1
          style={{
            ...styles.h1,
            opacity: mode == null || mode == "Map" ? 1 : 0.5,
            zIndex: 510,
          }}
          onClick={() => {
            setMode("Map");
          }}
        >
          Places to go
        </h1>
        <h1
          className="journal"
          style={{
            ...styles.h1,
            opacity: mode == null || mode == "Journal" ? 1 : 0.5,
            zIndex: 510,
            position: "relative",
            boxSizing: "content-box",
          }}
          onClick={() => {
            setMode("Journal");
          }}
          onPointerEnter={() => {
            const journal = document.querySelector(".journal");
            gsap.to(journal, {
              duration: 0.2,
              transform: "translate(-30px, 0)",
            });
            const icon = document.querySelector(".journal-icon");
            gsap.fromTo(
              icon,
              {
                opacity: 0,
                right: 35,
              },
              {
                duration: 0.2,
                right: -35,
                opacity: 1,
              }
            );
            const element = document.querySelector(".journal-underLine");
            const cont = document.querySelector(".journal-underLine-cont");
            cont.style.justifyContent = "flex-start";
            gsap.to(element, {
              duration: 0.5,
              width: "100%",
            });
          }}
          onPointerLeave={() => {
            const journal = document.querySelector(".journal");
            gsap.to(journal, {
              duration: 0.2,
              transform: "translate(0, 0)",
            });
            const icon = document.querySelector(".journal-icon");
            gsap.fromTo(
              icon,
              {
                opacity: 1,
                right: -35,
              },
              {
                duration: 0.2,
                right: 35,
                opacity: 0,
              }
            );
            const element = document.querySelector(".journal-underLine");
            const cont = document.querySelector(".journal-underLine-cont");
            cont.style.justifyContent = "flex-end";
            gsap.to(element, {
              duration: 0.5,
              width: "0%",
            });
          }}
        >
          <span
            style={{
              fontSize: (55 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next Bold",
              zIndex: 450,
              cursor: "pointer",
              paddingRight: 0,
              boxSizing: "content-box",
            }}
            className="journal-text"
          >
            Journal
          </span>
          <span
            className="journal-icon"
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translate(0, -50%)",
              opacity: 0,
            }}
          >
            <img
              src={goto}
              alt=""
              style={{
                width: (40 * window.innerWidth) / 1920,
                height: (40 * window.innerWidth) / 1920,
              }}
            />
          </span>
          <span
            className="journal-underLine-cont"
            style={{
              display: "flex",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 2 + (0.3 * window.innerHeight) / 1080,
            }}
          >
            <span
              className="journal-underLine"
              style={{
                display: "block",
                bottom: 0,
                left: 0,
                width: "0%",
                height: 1 + (0.3 * window.innerHeight) / 1080,
                backgroundColor: "#D9A404",
              }}
            />
          </span>
        </h1>
        <h1
          style={{
            ...styles.h1,
            opacity: mode == null || mode == "Gallery" ? 1 : 0.5,
            zIndex: 510,
          }}
          onClick={() => {
            setMode("Gallery");
          }}
        >
          Gallery
        </h1>
        <h1
          style={{
            ...styles.h1,
            opacity: mode == null || mode == "Contact" ? 1 : 0.5,
            zIndex: 510,
          }}
          onClick={() => {
            setMode("Contact");
          }}
        >
          Contact
        </h1>
      </div>
      <div
        style={{
          padding: "9% 0 0 0",
          width: (700 * window.innerWidth) / 1920,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          pointerEvents: "none",
          margin: "0 0 0 50%",
          opacity: mode == null ? 1 : 0,
        }}
      >
        <h2
          style={{
            fontSize: (50 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next Bold",
            margin: "0 auto 0 0",
          }}
        >
          About this website
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            marginBottom: (15 * window.innerWidth) / 1920,
          }}
        >
          This website was created by Sudhesh Venkatachalam for Project_3 in
          Semester 6 as part of the Bachelor's of Design program at IIT
          Hyderabad, under the guidance of Dr. Saurav Khuttiya Deori.
        </p>
        <p
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            margin: 0,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          doloribus commodi sint, nulla, pariatur nihil incidunt itaque quidem
          dicta obcaecati quae veritatis dolore vitae, temporibus eaque tempora
          minus illo natus. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis, eligendi dolor? At quia nesciunt voluptate
          reiciendis eos rerum autem, dolore quibusdam corrupti vitae, magnam
          deserunt minima pariatur mollitia saepe incidunt.
        </p>
      </div>
      <div>
        <Footer />
      </div>
      <div
        className="back-to-top"
        style={{
          position: "absolute",
          bottom: (100 * window.innerHeight) / 1080,
          right: (100 * window.innerWidth) / 1920,
          width: (57 * window.innerWidth) / 1920,
          height: (57 * window.innerHeight) / 1080,
        }}
      >
        <img src={image} alt="" />
      </div>
      <div
        className="overLay"
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          paddingTop: (40 * window.innerHeight) / 720,
          // opacity: 0.5,
          overflow: "hidden",
        }}
      >
        <Gallery />
        <Map />
        <Disclaimer />
        <Contact />
      </div>
    </div>
  );
};

export default EndingPage;
