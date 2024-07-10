import { useContext } from "react";
import close from "../assets/close contact.svg";
import { Context } from "../context";

const Disclaimer = () => {
  const { mode, setMode } = useContext(Context);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
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
        className="diclaimer-container"
        style={{
          width: 1050 * (window.innerWidth / 1920),
          height: 520 * (window.innerHeight / 1080),
          background:
            "linear-gradient(0deg, rgba(89,71,49,0.5) 0%, rgba(89,71,49,0.3) 100%)",
          //   opacity: 0.5,
          borderRadius: 40 * (window.innerWidth / 1280),
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "2%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "5px solid #D3AD62",
        }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "center",
            color: "#DDD4C7",
            fontSize: 27 * (window.innerWidth / 1920),
          }}
        >
          The information provided on this website is for educational and
          informational purposes only. I, Sudhesh Venkatachalam, am the sole
          author and creator of this content. While every effort has been made
          to ensure the accuracy of the information, I do not guarantee its
          completeness, reliability, or suitability. The content is based on my
          knowledge and experience and may not reflect the most current research
          or trends. Users are encouraged to verify any information and consult
          relevant professionals before making any decisions based on the
          content of this website. I disclaim any liability for any loss or
          damage arising from the use of this information.
        </p>
        <div className="close-button">
          <img
            src={close}
            alt="close"
            onClick={() => {
              setMode(null);
            }}
            style={{
              width: 48.78 * (window.innerWidth / 1920),
              height: 62.69 * (window.innerWidth / 1920),
              transform: "translate(-100%, 25%)",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
