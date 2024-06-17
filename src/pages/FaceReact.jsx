import { useContext } from "react";
import bolt from "../assets/lightning bolt.svg";
import { Context } from "../context";
import pandiIcon from "../assets/pandisvg.svg";
import pandiVote from "../assets/pandivote.svg";
import chettiIcon from "../assets/chettisvg.svg";
import chettiVote from "../assets/chettivote.svg";
import gsap from "gsap";
import { useState } from "react";

const FaceReact = () => {
  const styles = {
    para: {
      fontSize: (34 * window.innerHeight) / 1080,
      fontFamily: "TTtravels Next DemiBold",
      textAlign: "center",
      lineHeight: 0.5,
    },
  };
  const [textPandi, setTextPandi] = useState(
    <>
      <p
        style={{
          ...styles.para,
          color: "#BB8BE8",
        }}
      >
        Pandiyanad
      </p>
      <p
        style={{
          ...styles.para,
          color: "#BB8BE8",
        }}
      >
        Cuisine
      </p>
    </>
  );
  const [textChetti, setTextChetti] = useState(
    <>
      <p
        style={{
          ...styles.para,
          color: "#CC7272",
        }}
      >
        Chettinad
      </p>
      <p
        style={{
          ...styles.para,
          color: "#CC7272",
        }}
      >
        Cuisine
      </p>
    </>
  );
  const { hovered, setHovered } = useContext(Context);
  const [imagePandi, setImagePandi] = useState(pandiIcon);
  const [imageChetti, setImageChetti] = useState(chettiIcon);
  const PandihandleClick = () => {
    setImagePandi(pandiVote);
    gsap.fromTo(
      ".pandi-image",
      {
        rotationY: 0,
      },
      {
        duration: 0.5,
        rotationY: 360,
      }
    );
    setTimeout(() => {
      setImagePandi(pandiIcon);
    }, 2000);
  };
  const ChettihandleClick = () => {
    setImageChetti(chettiVote);
    gsap.fromTo(
      ".chetti-image",
      {
        rotationY: 0,
      },
      {
        duration: 0.5,
        rotationY: 360,
      }
    );
    setTimeout(() => {
      setImageChetti(chettiIcon);
    }, 2000);
  };
  const handleMouseEnterPandi = () => {
    setTextPandi(
      <>
        <p
          style={{
            ...styles.para,
            color: "#BB8BE8",
          }}
        >
          ~Vote~
        </p>
      </>
    );
  };

  const handleMouseLeavePandi = () => {
    setTextPandi(
      <>
        <p
          style={{
            ...styles.para,
            color: "#BB8BE8",
          }}
        >
          Pandiyanad
        </p>
        <p
          style={{
            ...styles.para,
            color: "#BB8BE8",
          }}
        >
          Cuisine
        </p>
      </>
    );
  };

  const handleMouseEnterChetti = () => {
    setTextChetti(
      <>
        <p
          style={{
            ...styles.para,
            color: "#CC7272",
          }}
        >
          ~Vote~
        </p>
      </>
    );
  };

  const handleMouseLeaveChetti = () => {
    setTextChetti(
      <>
        <p
          style={{
            ...styles.para,
            color: "#CC7272",
          }}
        >
          Chettinad
        </p>
        <p
          style={{
            ...styles.para,
            color: "#CC7272",
          }}
        >
          Cuisine
        </p>
      </>
    );
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="react-cards"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          // zIndex: 505,
        }}
      >
        <div
          className="pandi-react-card"
          style={{
            position: "absolute",
            top: "19.25%",
            left: "10%",
            zIndex: 505,
            height: (400 * window.innerHeight) / 1080,
          }}
        >
          <img
            className="pandi-image"
            src={imagePandi}
            alt="pandi"
            style={{
              width: (250 * window.innerHeight) / 1080,
              height: (250 * window.innerHeight) / 1080,
              cursor: "pointer",
            }}
            onClick={PandihandleClick}
            onPointerEnter={() => {
              setHovered(true);
              handleMouseEnterPandi();
            }}
            onPointerLeave={() => {
              setHovered(false);
              handleMouseLeavePandi();
            }}
          />
          <p
            className="pandi-text"
            style={{ ...styles.para, color: "#BB8BE8" }}
          >
            {textPandi}
          </p>
        </div>
        <div
          className="chetti-react-card"
          style={{
            position: "absolute",
            top: "19.25%",
            right: "10%",
            zIndex: 505,
          }}
        >
          <img
            src={imageChetti}
            className="chetti-image"
            onClick={ChettihandleClick}
            alt="chetti"
            style={{
              width: (250 * window.innerHeight) / 1080,
              height: (250 * window.innerHeight) / 1080,
              cursor: "pointer",
            }}
            onPointerEnter={() => {
              setHovered(true);
              handleMouseEnterChetti();
            }}
            onPointerLeave={() => {
              setHovered(false);
              handleMouseLeaveChetti();
            }}
          />
          {textChetti}
        </div>
      </div>
      <img
        src={bolt}
        style={{
          position: "absolute",
          width: (576 * window.innerHeight) / 1080,
          top: (-58.15 * window.innerHeight) / 1080,
          transform: "translate(-50%, 0)",
          left: "50%",
          zIndex: 1,
        }}
      />
      <div
        className="pandiyanad-react"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "48%",
          background: "#A693CC",
          height: "100%",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          maskSize: "100% 100%",
        }}
      ></div>
      <div
        className="chettinad-react"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "52%",
          background: "#CC7272",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default FaceReact;
