import pandiFlag from "../assets/pandi-flag.svg";
import pandiIcon from "../assets/pandisvg.svg";
const PandiFlag = () => {
  return (
    <div
      className="pandi-flag-content"
      style={{
        display: "flex",
        position: "relative",
        width: "90%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "110vh",
          width: "50%",
          paddingTop: 300 * (window.innerHeight / 1080),
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            className="pandi-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-100%)",
              left: 0,
            }}
          >
            <img
              src={pandiIcon}
              alt=""
              style={{
                height: 250 * (window.innerHeight / 1080),
              }}
            />
          </div>
          <h1
            style={{
              fontSize: (89 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#BB8BE8",
            }}
          >
            Pandiyanad
            <br />
            Cuisine
          </h1>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={pandiFlag}
          alt=""
          style={{
            position: "absolute",
            top: "50vh",
            // transform: "translateY(-50%)",
            right: 0,
            height: 360 * (window.innerHeight / 1080),
          }}
        />
      </div>
      <div
        className="pandi-flag-content-actual"
        style={{
          width: "60%",
          padding: "0 10%",
        }}
      >
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#BB8BE8",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#BB8BE8",
          }}
        >
          Central Asian cuisine blends influences from its nomadic heritage,
          featuring hearty dishes like plov (pilaf), kebabs, and bread. Dairy
          products, mutton, and horse meat are staples, reflecting the region's
          pastoral lifestyle.
        </p>
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#BB8BE8",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#BB8BE8",
          }}
        >
          Central Asian cuisine blends influences from its nomadic heritage,
          featuring hearty dishes like plov (pilaf), kebabs, and bread. Dairy
          products, mutton, and horse meat are staples, reflecting the region's
          pastoral lifestyle.
        </p>
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#BB8BE8",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#BB8BE8",
          }}
        >
          Central Asian cuisine blends influences from its nomadic heritage,
          featuring hearty dishes like plov (pilaf), kebabs, and bread. Dairy
          products, mutton, and horse meat are staples, reflecting the region's
          pastoral lifestyle.
        </p>
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#BB8BE8",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#BB8BE8",
          }}
        >
          Central Asian cuisine blends influences from its nomadic heritage,
          featuring hearty dishes like plov (pilaf), kebabs, and bread. Dairy
          products, mutton, and horse meat are staples, reflecting the region's
          pastoral lifestyle.
        </p>
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#BB8BE8",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#BB8BE8",
          }}
        >
          Central Asian cuisine blends influences from its nomadic heritage,
          featuring hearty dishes like plov (pilaf), kebabs, and bread. Dairy
          products, mutton, and horse meat are staples, reflecting the region's
          pastoral lifestyle.
        </p>
      </div>
    </div>
  );
};

export default PandiFlag;
