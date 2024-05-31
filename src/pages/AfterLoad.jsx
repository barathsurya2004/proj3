import Hero from "./Hero";

const AfterLoad = () => {
  return (
    <>
      <div
        className="afterload-container"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Hero />
      </div>
    </>
  );
};

export default AfterLoad;
