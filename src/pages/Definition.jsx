import "./Definition.css";
import image from "../assets/speaker.svg";
const Definition = () => {
  return (
    <>
      <div className="definition-container">
        <h1>
          <img src={image} alt="" />
          food
        </h1>
        <p>/fu:d/</p>
        <p>noun</p>
        <p>
          any nutritious substance that people or animals eat or drink or that
          plants absorb in order to maintain life and growth.
        </p>
        <p>
          From basic sustenance to a canvas of creativity, food fuels our bodies
          and sparks our imaginations. Simple meals nourish us after a long day,
          while elaborate feasts bring communities together. Across cultures and
          centuries, food has been a source of joy, a centerpiece of
          celebrations, and a way to connect with loved ones. Whether savoring a
          juicy peach or sharing a plate of steaming dumplings, food is a
          universal language of experience. Food can be a journey, a comfort, a
          celebration. Food is a lot of things.
        </p>
      </div>
    </>
  );
};

export default Definition;
