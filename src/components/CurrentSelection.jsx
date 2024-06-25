import { useContext } from "react";
import { Context } from "../context";

const CurrentSelection = ({}) => {
  const { meshSelected } = useContext(Context);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 520,
        width: "40%",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          zIndex: 512,
        }}
      >
        {meshSelected ? (
          <div>
            <h1
              style={{
                fontFamily: "TTtravels Next Bold",
                fontSize: (55 * window.innerWidth) / 1920,
              }}
            >
              {meshSelected}
            </h1>
            <h2
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
              }}
            >
              Central Asian cuisine blends influences from its nomadic heritage,
              featuring hearty dishes like plov (pilaf), kebabs, and bread.
              Dairy products, mutton, and horse meat are staples, reflecting the
              region's pastoral lifestyle.
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentSelection;
