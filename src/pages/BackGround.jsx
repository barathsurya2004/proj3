import "./BackGround.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import { useEffect, useState } from "react";
import image from "../assets/Asset 3.png";
gsap.registerPlugin(CustomEase);
const BackGround = () => {
  const hori = 8;
  const verti = (16 / 9) * (8 + 1) - 1;
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollY(window.scrollY);
    });
  });
  useGSAP(() => {
    gsap.to(".grid-lines-hori", {
      width: "100%",
      duration: 4.371,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: CustomEase.create("custom", "M0,0 C0.33,0 0.67,1 1,1 "),
    });
    gsap.to(".grid-lines-verti", {
      height: "100%",
      duration: 4.371,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: CustomEase.create("custom", "M0,0 C0.33,0 0.67,1 1,1 "),
    });
  });
  return (
    <>
      <div className="vid-helper" />
      <div
        className="guide"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 100,
          margin: 0,
        }}
      >
        <img src={image} alt="guide" style={{ width: "100%", margin: 0 }} />
      </div>
      <video
        disablePictureInPicture
        disableRemotePlayback
        className="back-vid"
        src="/grain_export.mp4"
        autoPlay
        loop
        muted
      />
      <video
        className="fore-vid"
        disableRemotePlayback
        disablePictureInPicture
        src="/grain_export.mp4"
        autoPlay
        loop
        muted
      />
      <div className="bg-container">
        <div className="horizontal-lines">
          {Array.from({ length: hori }, (item, index) => (
            <div
              className="grid-lines-hori"
              key={index}
              style={{
                top: `${(window.innerHeight / 8) * index}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="vertical-lines">
          {Array.from({ length: verti }, (item, index) => (
            <div className="grid-lines-verti" key={index}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackGround;
