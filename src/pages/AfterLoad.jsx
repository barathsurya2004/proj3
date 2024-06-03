import Hero from "./Hero";

const AfterLoad = () => {
  return (
    <>
      <div
        className="afterload-container"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Hero />
      </div>
    </>
  );
};

export default AfterLoad;
