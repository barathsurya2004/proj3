import { useGSAP } from "@gsap/react";
import anim from "../assets/final sline.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimSVG from "../components/animSVG";
gsap.registerPlugin(ScrollTrigger);

const ShallWeAnim = () => {
  const styles = {
    container: {
      width: "100%",
      height: "300vh",
      position: "relative",
      overflow: "hidden",
    },
    img: {
      height: "500vh",
      width: "99.99%",
    },
  };

  return (
    <div style={styles.container} className="anim-handler-flag">
      <AnimSVG width={"100%"} height={"130%"} />
    </div>
  );
};

export default ShallWeAnim;
