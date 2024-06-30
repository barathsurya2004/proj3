import image from "../assets/thunder.svg";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: (100 * window.innerHeight) / 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: (30 * window.innerWidth) / 1920,
        paddingRight: (30 * window.innerWidth) / 1920,
      }}
    >
      <p
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
        }}
      >
        © 2024 Sudhesh Venkatachalam | Disclaimer.
      </p>
      <hr
        style={{
          width: "100%",
          //   margin: "0 20px",
        }}
      />
      <p
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
        }}
      >
        Designed by Sudhesh Venkatachalam
      </p>
      <img
        src={image}
        alt=""
        style={{
          width: (15 * window.innerWidth) / 1920,
          height: (25 * window.innerWidth) / 1920,
          margin: 0,
        }}
      />
      <p
        style={{
          fontSize: (20 * window.innerWidth) / 1920,
          fontFamily: "Filson Pro Regular",
          margin: "0 20px",
          whiteSpace: "nowrap",
        }}
      >
        Built by Barath Surya
      </p>
    </div>
  );
};

export default Footer;
