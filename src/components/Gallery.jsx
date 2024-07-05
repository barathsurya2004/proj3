import { useContext } from "react";
import close from "../assets/close.svg";
import { Context } from "../context";

const Gallery = () => {
  const { mode, setMode } = useContext(Context);
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
          className="photos-container"
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 200px)",
            backgroundColor: "bisque",
          }}
        >
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
