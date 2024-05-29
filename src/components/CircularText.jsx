import "./CircularText.css";
const CircularText = ({ texts, radius }) => {
  texts = [...texts, ...texts, ...texts];
  return (
    <div className="circle-container">
      <div className="circle">
        {texts.map((text, index) => {
          const angle = (index * 360) / texts.length;
          const style = {
            transform: ` rotate(${angle}deg) `,
          };
          return (
            <div className="circle-text" key={index}>
              <div
                style={{
                  transform: `translateX(${-radius}px) rotate(${-angle}deg)`,
                  transformOrigin: `${radius}px`,
                }}
              >
                {text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularText;
