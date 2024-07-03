import "./Card.css";

const Card = ({ content }) => {
  return (
    <div className="card-trigger">
      <div className="card-content">
        <h1
          style={{
            color: "#D3AD62",
            fontFamily: "TTtravels Next Bold",
          }}
        >
          food is
        </h1>

        <div className="love">
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            love
          </h2>
        </div>
        <div className="topic art">
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            art
          </h2>
        </div>
        <div className="adventure topic">
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            adventure
          </h2>
        </div>
        <div className="beyond-time topic">
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            beyond
          </h2>
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            time
          </h2>
        </div>
        <div className="culture topic">
          <h2
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next DemiBold Italic",
            }}
          >
            culture
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
