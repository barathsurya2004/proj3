import chettiflag from "../assets/chetti-flag.svg";
import chettiIcon from "../assets/chettisvg.svg";
import holder from "../assets/placeholder1.svg";
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
            className="chetti-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-100%)",
              top: 0,
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
            top: "25vh",
            // transform: "translateY(-50%)",
            height: 360 * (window.innerHeight / 1080),
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          paddingTop: "15%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,

            marginTop: "15%",
            height: "85%",

            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
          />
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
          />
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
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
              margin: 0,
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#F07373",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            Chettinad cuisine is as intricate as the blend of spices get.
            Originating from present-day Karaikudi and neighboring villages in
            the Sivagangai district (often referred to as Chettinad, meaning
            "the land of Chettiars"), this community-influenced cuisine is
            renowned nationwide. Although it evolved alongside Pandiyanad
            cuisine, Chettinad cuisine has its unique surprises.
          </p>
          <h2
            style={{
              fontSize: (55 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#F07373",
              margin: 0,
            }}
          >
            History
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#F07373",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            Once, a thriving community lived around Puducherry's coastal region,
            excelling in trade and commerce. When seven families who had left
            for trade returned only to find their homeland devastated by a
            tsunami, they sought refuge in the elevated lands under the Pandiyan
            kings. The Pandiyans granted them land in exchange for
            work(accountign and commerce), leading to the formation of the seven
            villages (from the 7 families) that make up modern Chettinad.
            Impressed by their work, the Pandiyans allotted a quarter of their
            land with its own jurisdiction and appointed a local king. This
            mini-kingdom, known as KaanaaduKaathan Parappu, meaning "the land of
            the ruler of a quarter of the Pandiyan's land," shaped Chettinad
            cuisine as an embodiment of rich history and exceptional flavor.
          </p>
          <h2
            style={{
              fontSize: (55 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#F07373",
              margin: 0,
            }}
          >
            Current
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#F07373",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            Due to various reasons, Chettinad cuisine is one of the most popular
            cuisines nationwide. Most people think of Chettinad dishes when they
            think about South Indian food. The sole popularity of Chettinad
            cuisine and the craze around it is consuming the legacies of the
            nearby cuisines, leaving the people from the Chettinad region
            confused about what food carries their Chettinad legacy. Despite
            this, since Chettinad cuisine evolves from a community, there is a
            constant claim of who makes the authentic Chettinad food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChettiFlag;
