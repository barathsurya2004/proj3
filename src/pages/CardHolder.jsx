import { Pepper } from "../../public/models/cards/Pepper";
import CardsCanvas from "./CardsCanvas";
import leftButton from "../assets/prevNotPossible.svg";
import rightButton from "../assets/nextPossible.svg";
import activePage from "../assets/pagiCurrent.svg";
import inactivePage from "../assets/pagiInactive.svg";

const CardHolder = () => {
  return (
    <>
      <div
        className="left-button-cards"
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          zIndex: 1000,
        }}
      >
        <img
          src={leftButton}
          style={{
            width: (24 * window.innerWidth) / 1920,
          }}
          alt=""
        />
      </div>
      <CardsCanvas>
        <Pepper />
      </CardsCanvas>
      <div
        className="right-button-cards"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          zIndex: 1000,
        }}
      >
        <img
          src={rightButton}
          style={{
            width: (24 * window.innerWidth) / 1920,
          }}
          alt=""
        />
      </div>
      <div
        className="pagination-cards"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
        }}
      >
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={activePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={inactivePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={inactivePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardHolder;
