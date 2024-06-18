import React from "react";
import center from "../assets/center.svg";
import left from "../assets/left-station.svg";
import right from "../assets/right-station.svg";
const Flag = () => {
  const styles = {
    container: {
      width: "100%",
      height: "110vh",
      position: "relative",
      overflow: "hidden",
    },
    img: {
      position: "absolute",
      top: "-100%",
      height: "300%",
      width: "50%",
      left: 0,
    },
  };

  return (
    <div className="flag-container" style={styles.container}>
      <img style={{ ...styles.img, left: "25%" }} src={center} alt="" />
      <img style={{ ...styles.img, left: "-24.8%" }} src={left} alt="" />
      <img
        style={{ ...styles.img, stroke: "#bb8be8", left: "74.8%" }}
        src={right}
        alt=""
      />
    </div>
  );
};

export default Flag;
