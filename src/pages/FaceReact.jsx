import bolt from "../assets/lightning bolt.svg";

const FaceReact = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={bolt}
        style={{
          width: (576 * window.innerHeight) / 1080,
          position: "absolute",
          top: 0,
          transform: "translate(-50%, 0)",
          left: "50%",
          zIndex: 1,
        }}
      />
      <div
        className="pandiyanad-react"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          background: "#A693CC",
          height: "100%",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0))",
          maskSize: "100% 100%",
        }}
      ></div>
      <div
        className="chettinad-react"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          background: "#CC7272",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0))",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default FaceReact;
