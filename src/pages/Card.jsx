import "./Card.css";

const Card = ({ content }) => {
  return (
    <div className="card-trigger">
      <div className="card-content">
        <h1>food is </h1>

        <div className="love">
          <h2>love</h2>
        </div>
        <div className="topic art">
          <h2>art</h2>
        </div>
        <div className="adventure topic">
          <h2>adventure</h2>
        </div>
        <div className="beyond-time topic">
          <h2>beyond time</h2>
        </div>
        <div className="culture topic">
          <h2>culture</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
