import { Pepper } from "../../public/models/cards/Pepper";
import { Tamarind } from "../../public/models/cards/Tamarind";
import image from "../assets/share.svg";
import CardsCanvas from "./CardsCanvas";

const SharePage = () => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: 0,
          width: "100%",
          height: (310 * window.innerHeight) / 1080,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960.45 3000"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <path
            fill="none"
            stroke="#d3ad62"
            stroke-width="5"
            d="M480.225,0 L480.225,3392.025"
          />
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: (25 * window.innerHeight) / 1080,
        }}
      >
        <img
          src={image}
          style={{
            width: (125 * window.innerWidth) / 1920,
            height: (125 * window.innerHeight) / 1080,
            margin: 0,
          }}
          alt=""
        />
        <h1
          style={{
            fontSize: (55 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next DemiBold",
            textAlign: "center",
            margin: (25 * window.innerHeight) / 1080,
          }}
        >
          Share
        </h1>
        <p
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            textAlign: "center",
            width: (300 * window.innerWidth) / 1920,
            margin: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Click to send these to your firends and let them know the beauty of
          these cuisines
        </p>
      </div>
      <div
        style={{
          margin: 0,
          width: "100%",
          height: (70 * window.innerHeight) / 1080,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960.45 3000"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <path
            fill="none"
            stroke="#d3ad62"
            stroke-width="5"
            d="M480.225,0 L480.225,3392.025"
          />
        </svg>
      </div>
      <h1
        style={{
          fontSize: (55 * window.innerWidth) / 1920,
          fontFamily: "TTtravels Next DemiBold",
          textAlign: "center",
          margin: (25 * window.innerHeight) / 1080,
          width: (950 * window.innerWidth) / 1920,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        So many differences, yet complimentary.
      </h1>
      <div
        className="pandi-share"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100vh",
        }}
      >
        <CardsCanvas>
          <Pepper />
        </CardsCanvas>
      </div>
      <div
        className="chetti-share"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100vh",
        }}
      >
        <CardsCanvas>
          <Tamarind />
        </CardsCanvas>
      </div>
    </div>
  );
};

export default SharePage;
