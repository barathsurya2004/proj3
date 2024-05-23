import { useGSAP } from "@gsap/react";
import "./CircularText.css"; // Ensure to import the CSS file
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const CircularText = ({ texts, radius }) => {
  const angleIncrement = 360 / texts.length;

  return (
    <div className="circular-text-container">
      {texts.map((text, index) => (
        <div key={index} className="circular-text">
          {text}
        </div>
      ))}
    </div>
  );
};

export default CircularText;
