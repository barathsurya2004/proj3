import chettiflag from "../assets/chetti-flag.svg";
import chettiIcon from "../assets/chettisvg.svg";
const ChettiFlag = () => {
  return (
    <div
      className="chetti-flag-content"
      style={{
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        width: "90%",
        marginLeft: "auto",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "110vh",
          width: "50%",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            className="chetti-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-100%)",
              right: 0,
            }}
          >
            <img
              src={chettiIcon}
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
              color: "#F07373",
            }}
          >
            Chettinad
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
          src={chettiflag}
          alt=""
          style={{
            position: "absolute",
            left: 0,
            top: "50vh",
            transform: "translateY(-50%)",
            height: 360 * (window.innerHeight / 1080),
          }}
        />
      </div>
      <div
        className="chetti-flag-content-actual"
        style={{
          width: "60%",
          padding: "0 10%",
        }}
      >
        <h2
          style={{
            fontSize: (55 * window.innerHeight) / 1080,
            fontFamily: "TTtravels Next DemiBold",
            color: "#F07373",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#F07373",
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
            color: "#F07373",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#F07373",
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
            color: "#F07373",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#F07373",
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
            color: "#F07373",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#F07373",
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
            color: "#F07373",
          }}
        >
          History
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerHeight) / 1080,
            fontFamily: "Filson Pro Regular",
            color: "#F07373",
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

export default ChettiFlag;
