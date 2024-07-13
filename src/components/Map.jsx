import { useContext, useEffect } from "react";
import { Context } from "../context";
import close from "../assets/close.svg";
import gsap from "gsap";
const Map = () => {
  const { mode, setMode } = useContext(Context);
  const places = [
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
  ];
  useEffect(() => {
    if (mode === "Map") {
      gsap.fromTo(
        ".map",
        {
          y: "100vh",
        },
        {
          y: 0,
          duration: 0.5,
          ease: "power4.inOut",
        }
      );
    } else {
      gsap.to(".map", {
        y: "100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  return (
    <div
      className="map"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        zIndex: 500,
        position: "absolute",
      }}
    >
      <div
        className="map-container"
        style={{
          width: (1494.583 * window.innerWidth) / 1920,
          height: (747.47 * window.innerHeight) / 1080,
          // background: "#D3AD62",
          // opacity: 0.5,
          borderRadius: (40 * window.innerWidth) / 1280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          border: "5px solid #D3AD62",
        }}
      >
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "12%",
            backgroundColor: "#D3AD62",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: (36 * window.innerWidth) / 1920,
              color: "black",
            }}
          >
            Interview in chettinad
          </h1>
          <div
            style={{
              position: "absolute",
              top: (20 * window.innerWidth) / 1920,
              right: (25 * window.innerWidth) / 1920,
              width: (50 * window.innerWidth) / 1920,
              height: (50 * window.innerWidth) / 1920,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setMode(null);
            }}
          >
            <img src={close} alt="close" />
          </div>
        </div>
        <div
          className="content-holder"
          style={{
            width: "100%",
            height: "88%",
            display: "flex",
            overflow: "auto",
          }}
        >
          <div
            className="map-holder"
            style={{
              width: "67.5%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            map goes here
          </div>
          <div
            className="places-holder"
            style={{
              width: "32.5%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "scroll",
              scrollbarWidth: "none",
              borderLeft: "5px solid #D3AD62",
              background:
                "linear-gradient(90deg, rgba(89,71,49,0.3) 0%, rgba(89,71,49,0.2) 100%)",
            }}
          >
            {places.map((place, index) => {
              return (
                <div className="place" key={index}>
                  <h1
                    style={{
                      fontSize: (34 * window.innerWidth) / 1920,
                      color: "#DDD4C7",
                    }}
                  >
                    {place.name}
                  </h1>
                  <p
                    style={{
                      color: "#CEB9A5",
                      fontSize: (27 * window.innerWidth) / 1920,
                    }}
                  >
                    {place.food}•{place.location}
                  </p>
                  <hr
                    style={{
                      // width: "80%",
                      height: 1,
                      backgroundColor: "#AF9F8C",
                      border: "none",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
