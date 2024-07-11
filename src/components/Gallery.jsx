import { Suspense, useContext, useState } from "react";
import close from "../assets/close.svg";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
const Gallery = () => {
  const { mode, setMode, photos } = useContext(Context);
  const [currentSelection, setCurrentSelection] = useState(null);

  useGSAP(() => {});
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        zIndex: 500,
      }}
    >
      <div
        className="gallery-container"
        style={{
          width: (1494.583 * window.innerWidth) / 1920,
          height: (747.47 * window.innerHeight) / 1080,
          // background: "#D3AD62",
          mixBlendMode: "luminosity",
          // background:
          // "linear-gradient(0deg, rgba(89,71,49,0.8) 0%, rgba(89,71,49,0.5) 100%)",
          opacity: 1,
          borderRadius: (40 * window.innerWidth) / 1280,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          border: "5px solid #D3AD62",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#D3AD62",
          }}
        >
          <h1
            style={{
              fontSize: (34 * window.innerWidth) / 1920,
              color: "black",
            }}
          >
            Photos from my journey to Pandiyand and Chettinad
          </h1>
          <div>
            <img
              src={close}
              alt=""
              style={{
                width: 48.78 * (window.innerWidth / 1920),
                height: 62.69 * (window.innerWidth / 1920),
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(-100%, 25%)",
                cursor: "pointer",
              }}
              onClick={() => {
                setMode(null);
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "bisque",
            display: "flex",
            justifyContent: "space-between",
            overflow: "scroll",
          }}
        >
          <div
            className="current-selection"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "0",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={
                currentSelection
                  ? currentSelection
                  : "https://picsum.photos/id/10/200/200"
              }
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <div
            className="photos-grid-container"
            id="p-g-c"
            style={{
              margin: 0,
              width: "100%",
              height: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "5px",
              gridTemplateRows: `repeat(${Math.ceil(photos.length / 4)}, 1fr)`,
              overflow: "scroll",
            }}
          >
            {photos.map((photo, index) => (
              <div
                className="images"
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  aspectRatio: "1/1",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  setCurrentSelection(
                    "https://picsum.photos/id/" + (index + 10) + "/200/200"
                  );
                  const ele = document.querySelector(".photos-grid-container");
                  const state = Flip.getState(
                    ".photos-grid-container, .images"
                  );
                  ele.style.gridTemplateColumns = "repeat(3, 1fr)";
                  ele.style.width = "55%";
                  Flip.from(state, {
                    absolute: true,
                    duration: 0.5,
                    ease: "power1.inOut",
                  });
                  // gsap.to(".photos-grid-container", {
                  //   width: "55%",
                  //   gridTemplateColumns: "repeat(3, 1fr)",
                  //   ease: "power4.inOut",
                  // });
                  gsap.to(".current-selection", {
                    width: "45%",
                    paddingRight: "5px",
                    ease: "power4.inOut",
                  });
                }}
              >
                <img
                  src={"https://picsum.photos/id/" + (index + 10) + "/200/200"}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
