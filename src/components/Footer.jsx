import { useContext, useEffect } from "react";
import image from "../assets/thunder.svg";
import { Context } from "../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Footer = () => {
  const { mode, setMode } = useContext(Context);
  useEffect(() => {
    if (mode === null || mode === "Disclaimer") {
      gsap.to(".disclaimer-text", {
        opacity: 1,
        duration: 0.2,
      });
    } else {
      gsap.to(".disclaimer-text", {
        opacity: 0.3,
        duration: 0.2,
      });
    }
    if (mode === null) {
      gsap.to(".designed-text", {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(".developed-text", {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(".thunder", {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(".sep-line", {
        opacity: 1,
        duration: 0.2,
      });
    } else {
      gsap.to(".designed-text", {
        opacity: 0.3,
        duration: 0.2,
      });
      gsap.to(".developed-text", {
        opacity: 0.3,
        duration: 0.2,
      });
      gsap.to(".thunder", {
        opacity: 0.3,
        duration: 0.2,
      });
      gsap.to(".sep-line", {
        opacity: 0.3,
        duration: 0.2,
      });
    }
  }, [mode]);
  return (
    <div
      style={{
        width: "100%",
        height: (90 * window.innerHeight) / 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: (85 * window.innerWidth) / 1920,
        paddingRight: (85 * window.innerWidth) / 1920,
      }}
    >
      <p
        className="disclaimer-text"
        style={{
          position: "relative",
          fontSize: (21 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 510,
          textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".disclaimer-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".disclaimer-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
          });
        }}
        onClick={() => {
          setMode("Disclaimer");
        }}
      >
        © 2024 Sudhesh Venkatachalam | Disclaimer
      </p>

      <hr
        className="sep-line"
        style={{
          width: "100%",
          marginLeft: (25 * window.innerWidth) / 1920,
          marginRight: (25 * window.innerWidth) / 1920,
        }}
      />
      <p
        className="designed-text"
        style={{
          fontSize: (21 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
          textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".designed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".designed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
          });
        }}
        onClick={() => {
          setMode("Contact");
        }}
      >
        Designed by Sudhesh Venkatachalam
      </p>
      <img
        className="thunder"
        src={image}
        alt=""
        style={{
          width: (15 * window.innerWidth) / 1920,
          height: (25 * window.innerWidth) / 1920,
          margin: 10,
        }}
      />
      <p
        className="developed-text"
        style={{
          fontSize: (21 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
          textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".developed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".developed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.2vh solid rgba(242, 216, 160,0)",
          });
        }}
      >
        Developed by Barath Surya
      </p>
    </div>
  );
};

export default Footer;
