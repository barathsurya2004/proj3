import { useGSAP } from "@gsap/react";
import anim from "../assets/final sline.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
      <img src={anim} style={styles.img} className="anim-flag" alt="" />
    </div>
  );
};

export default ShallWeAnim;
