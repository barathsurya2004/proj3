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
          height: "110vh",
          width: "50%",
        }}
      >
        <div>
          <div
            className="pandi-icon-container"
            style={{
              position: "absolute",
              top: "10%",
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
        <div
          className="flag-img-container"
          style={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={pandiFlag}
            alt=""
            style={{
              position: "absolute",
              right: 0,
              transform: "translateY(-50%)",
              height: 360 * (window.innerHeight / 1080),
            }}
          />
        </div>
      </div>
      <div
        className="pandi-flag-content-actual"
        style={{
          width: "60%",
          padding: "0 10%",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptate animi at eligendi quia iste laudantium, iusto placeat nisi
        quod quidem a quibusdam, ipsa fugiat! Amet veritatis totam perspiciatis
        similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        ratione voluptates aspernatur dignissimos nihil explicabo eveniet vitae
        sit architecto delectus inventore aut esse autem, earum perferendis,
        laboriosam, ipsa blanditiis. Dignissimos? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum facilis debitis dicta saepe, omnis
        iure voluptates provident sunt ducimus possimus delectus optio corporis
        vitae enim veniam. Eaque aspernatur possimus corrupti? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Magni obcaecati odio maiores
        voluptate eaque incidunt neque reiciendis officia, nesciunt illo
        corrupti sunt voluptatibus iste voluptates? Praesentium repudiandae
        aspernatur optio autem!console.log() Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nobis modi deleniti neque nisi, voluptates
        alias quidem reprehenderit eligendi quod autem eum porro eveniet totam
        illum dolor maiores natus minus dolorum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Soluta tenetur, sint dolore facilis
        recusandae ea amet eaque, exercitationem eos quo dolores voluptatem
        mollitia, distinctio blanditiis accusamus officia cumque quam sequi.;
      </div>
    </div>
  );
};

export default PandiFlag;
