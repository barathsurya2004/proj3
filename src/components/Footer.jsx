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
          textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".disclaimer-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".disclaimer-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
          });
        }}
        onClick={() => {
          setMode("Disclaimer");
        }}
      >
        © 2024 Sudhesh Venkatachalam | Disclaimer.
      </p>

      <hr
        style={{
          width: "100%",
          //   margin: "0 20px",
        }}
      />
      <p
        className="designed-text"
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
          textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".designed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".designed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
          });
        }}
        onClick={() => {
          setMode("Contact");
        }}
      >
        Designed by Sudhesh Venkatachalam
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
        className="developed-text"
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
          position: "relative",
          cursor: "pointer",
          zIndex: 510,
          textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
        }}
        onPointerEnter={() => {
          const element = document.querySelector(".developed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,1)",
          });
        }}
        onPointerLeave={() => {
          const element = document.querySelector(".developed-text");
          gsap.to(element, {
            duration: 0.5,
            textDecoration: "underline 0.1em solid rgb(211, 173, 98,0)",
          });
        }}
      >
        Developed by Barath Surya
      </p>
    </div>
  );
};

export default Footer;
