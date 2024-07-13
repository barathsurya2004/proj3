import { useContext } from "react";
import image from "../assets/thunder.svg";
import { Context } from "../context";
import gsap from "gsap";
const Footer = () => {
  const { mode, setMode } = useContext(Context);
  return (
    <div
      style={{
        width: "100%",
        height: (100 * window.innerHeight) / 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: (30 * window.innerWidth) / 1920,
        paddingRight: (30 * window.innerWidth) / 1920,
      }}
    >
      <p
        className="disclaimer-text"
        style={{
          position: "relative",
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 510,
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".disclaimer-underLine");
          const cont = document.querySelector(".disclaimer-underLine-cont");
          cont.style.justifyContent = "flex-start";
          gsap.to(element, {
            duration: 0.5,
            width: "100%",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".disclaimer-underLine");
          const cont = document.querySelector(".disclaimer-underLine-cont");
          cont.style.justifyContent = "flex-end";
          gsap.to(element, {
            duration: 0.5,
            width: "0%",
          });
        }}
        onClick={() => {
          setMode("Disclaimer");
        }}
      >
        © 2024 Sudhesh Venkatachalam | Disclaimer.
        <span
          className="disclaimer-underLine-cont"
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 1 + (0.3 * window.innerHeight) / 1080,
          }}
        >
          <span
            className="disclaimer-underLine"
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
      </p>

      <hr
        style={{
          width: "100%",
          //   margin: "0 20px",
        }}
      />
      <p
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".designed-underLine");
          const cont = document.querySelector(".designed-underLine-cont");
          cont.style.justifyContent = "flex-start";
          gsap.to(element, {
            duration: 0.5,
            width: "100%",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".designed-underLine");
          const cont = document.querySelector(".designed-underLine-cont");
          cont.style.justifyContent = "flex-end";
          gsap.to(element, {
            duration: 0.5,
            width: "0%",
          });
        }}
        onClick={() => {
          setMode("Contact");
        }}
      >
        Designed by Sudhesh Venkatachalam
        <span
          className="designed-underLine-cont"
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 1 + (0.3 * window.innerHeight) / 1080,
          }}
        >
          <span
            className="designed-underLine"
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
      </p>
      <img
        src={image}
        alt=""
        style={{
          width: (15 * window.innerWidth) / 1920,
          height: (25 * window.innerWidth) / 1920,
          margin: 0,
        }}
      />
      <p
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".developed-underLine");
          const cont = document.querySelector(".developed-underLine-cont");
          cont.style.justifyContent = "flex-start";
          gsap.to(element, {
            duration: 0.5,
            width: "100%",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".developed-underLine");
          const cont = document.querySelector(".developed-underLine-cont");
          cont.style.justifyContent = "flex-end";
          gsap.to(element, {
            duration: 0.5,
            width: "0%",
          });
        }}
      >
        Developed by Barath Surya
        <span
          className="developed-underLine-cont"
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 1 + (0.3 * window.innerHeight) / 1080,
          }}
        >
          <span
            className="developed-underLine"
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
      </p>
    </div>
  );
};

export default Footer;
