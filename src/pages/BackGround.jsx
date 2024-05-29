import "./BackGround.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);
const BackGround = () => {
  const hori = 8;
  const verti = (16 / 9) * (hori + 1) - 1;
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
      {/* <div className="vid-helper" /> */}
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
            <div className="grid-lines-hori" key={index}></div>
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
