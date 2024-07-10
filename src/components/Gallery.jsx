import { Suspense, useContext, useState } from "react";
import close from "../assets/close.svg";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Gallery = () => {
  const { mode, setMode, photos } = useContext(Context);
  const [currentSelection, setCurrentSelection] = useState(null);

  useGSAP(() => {});
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        zIndex: 510,
      }}
    >
      <div
        className="gallery-container"
        style={{
          width: (1494.583 * window.innerWidth) / 1920,
          height: (747.47 * window.innerHeight) / 1080,
          background: "#D3AD62",
          opacity: 1,
          borderRadius: (40 * window.innerWidth) / 1280,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>
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
            backgroundColor: "bisque",
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
              width: "0%",
              height: "100%",
              paddingRight: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={currentSelection}
              alt="Current selection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="photos-grid-container"
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
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  aspectRatio: "1/1",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCurrentSelection(photo.url);
                  gsap.to(".photos-grid-container", {
                    width: "55%",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    ease: "power4.inOut",
                  });
                  gsap.to(".current-selection", {
                    width: "45%",
                    ease: "power4.inOut",
                  });
                }}
              >
                <img
                  src={photo.url}
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
