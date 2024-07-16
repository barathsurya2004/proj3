import { useContext, useRef, useState } from "react";
import { Context } from "../context";
import arrow from "../assets/arrowBase.svg";
import useDoubleClick from "use-double-click";

const FullScreen = ({ currentSelection, photos, setcurrentSelection }) => {
  const { fullscreen, setFullscreen, pointer } = useContext(Context);
  const pointerRef = useRef();
  const [zooming, setZooming] = useState(false);
  const clickRef = useRef();
  useDoubleClick({
    onSingleClick: (e) => {
      if (!zooming) {
        setFullscreen(false);
      }
    },
    onDoubleClick: (e) => {
      setZooming(!zooming);
      if (zooming) {
      } else {
      }
      console.log(zooming);
    },
    ref: clickRef,
    latency: 250,
  });
  return (
    <div
      className="fullscreen-viewer"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        display: fullscreen ? "flex" : "none",
      }}
    >
      <div
        className="navigation-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="left-arrow"
          style={{
            position: "absolute",
            top: "50%",
            left: "1%",
            zIndex: 1000,
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={() => {
            const index = photos.findIndex(
              (photo) => photo.url === currentSelection
            );
            if (index === 0) {
              setcurrentSelection(photos[photos.length - 1].url);
            } else {
              setcurrentSelection(photos[index - 1].url);
            }
          }}
        >
          <img
            src={arrow}
            alt=""
            style={{
              width: (50 * window.innerWidth) / 1920,
              height: (50 * window.innerWidth) / 1920,
            }}
          />
        </div>
        <div
          className="right-arrow"
          style={{
            position: "absolute",
            top: "50%",
            right: "1%",
            zIndex: 1000,
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={() => {
            const index = photos.findIndex(
              (photo) => photo.url === currentSelection
            );
            if (index === photos.length - 1) {
              setcurrentSelection(photos[0].url);
            } else {
              setcurrentSelection(photos[index + 1].url);
            }
          }}
        >
          <img
            src={arrow}
            alt=""
            style={{
              width: (50 * window.innerWidth) / 1920,
              height: (50 * window.innerWidth) / 1920,
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>
      <div
        className="current-image-fullscreen"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={clickRef}
      >
        <img
          src={currentSelection}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt=""
        />
      </div>
      <div
        className="fullscreen-carousel"
        style={{
          position: "absolute",
          bottom: 10,
          height: "10%",
          overflowX: "scroll",
          overflowY: "hidden",
          width: "100vw",
        }}
      >
        <div
          className="overflow-container"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {photos.map((photo, index) => {
            return (
              <div
                key={index}
                style={{
                  width: (200 * window.innerWidth) / 1920,
                  height: (200 * window.innerWidth) / 1920,
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setcurrentSelection(photo.url);
                }}
              >
                <img
                  src={photo.url}
                  style={{
                    width: (200 * window.innerWidth) / 1920,
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
