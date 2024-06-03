import "./Card.css";

const Card = ({ content }) => {
  return (
    <div className="card-trigger">
      <div className="card">
        <h1
          style={{
            marginLeft: (175 * window.innerWidth) / 1920,
            fontSize: (55 * window.innerHeight) / 1080,
          }}
        >
          {content}
        </h1>
      </div>
    </div>
  );
};

export default Card;
