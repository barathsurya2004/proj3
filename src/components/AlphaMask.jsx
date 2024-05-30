import "./AlphaMask.css";

const AlphaMask = ({ radius }) => {
  return (
    <>
      <div
        className="alpha-mask"
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "-18%",
        }}
      >
        <div
          className="torus"
          style={{
            "--radius-inner": `${radius + (350 * window.innerHeight) / 1080}px`,
            "--radius-outer": `${
              radius + (1500 * window.innerHeight) / 1080
            }px`,
          }}
        ></div>
      </div>
    </>
  );
};

export default AlphaMask;
