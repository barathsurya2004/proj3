import { useContext } from "react";
import close from "../assets/close contact.svg";
import { Context } from "../context";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
const Contact = () => {
  const { mode, setMode } = useContext(Context);
  return (
    <div
      className="contact-container"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        width: (1500 * window.innerWidth) / 1920,
        height: (750 * window.innerHeight) / 1080,
        // backgroundColor: "white",
        background:
          " linear-gradient(0deg, rgba(89,71,49,0.5) 0%, rgba(89,71,49,0.3) 100%)",

        borderRadius: (40 * window.innerWidth) / 1920,
        border: "solid 5px #D3AD62",
      }}
    >
      <div
        className="close-button"
        style={{
          position: "absolute",
          top: 57 * (window.innerHeight / 1080),
          right: 47 * (window.innerWidth / 1920),
          width: (50 * window.innerWidth) / 1920,
          height: (50 * window.innerWidth) / 1920,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 510,
        }}
        onClick={() => {
          setMode(null);
        }}
      >
        <img src={close} alt="close" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "65%",
          height: "100%",
          padding: "20px",
        }}
      >
        <h2
          style={{
            fontSize: (55 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next Bold",
            color: "#F2D8A0",
            margin: 15,
          }}
        >
          Drop me a hello!
        </h2>
        <div>
          <p
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              color: "#DDD4C7",
              margin: 25,
            }}
          >
            <img
              src={mail}
              alt=""
              style={{
                width: 40 * (window.innerWidth / 1920),
                transform: "translateY(25%) translateX(-50%)",
              }}
            />
            sudheshimself@gmail.com
          </p>
          <p
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              color: "#DDD4C7",
              margin: 25,
            }}
          >
            <img
              src={linkedin}
              alt=""
              style={{
                width: 40 * (window.innerWidth / 1920),
                transform: "translateY(25%) translateX(-50%)",
              }}
            />
            Sudhesh Venkatachalam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
