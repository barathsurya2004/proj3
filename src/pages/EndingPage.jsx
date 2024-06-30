import Footer from "../components/Footer";
import image from "../assets/backToTop.svg";
const EndingPage = () => {
  const styles = {
    h1: {
      fontSize: (55 * window.innerWidth) / 1920,
      fontFamily: "TTtravels Next Bold",
    },
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="navbar-ending-page"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: (160 * window.innerHeight) / 1080,
          width: "100%",
        }}
      >
        <h1 style={styles.h1}>Places to go</h1>
        <h1 style={styles.h1}>Journal</h1>
        <h1 style={styles.h1}>Gallery</h1>
        <h1 style={styles.h1}>Contact</h1>
      </div>
      <div
        style={{
          width: (700 * window.innerWidth) / 1920,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          margin: "0 0 0 50%",
        }}
      >
        <h2
          style={{
            fontSize: (50 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next Bold",
            margin: "0 auto 0 0",
          }}
        >
          About this website
        </h2>
        <p
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            marginBottom: (15 * window.innerWidth) / 1920,
          }}
        >
          This website was created by Sudhesh Venkatachalam for Project_3 in
          Semester 6 as part of the Bachelor's of Design program at IIT
          Hyderabad, under the guidance of Dr. Saurav Khuttiya Deori.
        </p>
        <p
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            margin: 0,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          doloribus commodi sint, nulla, pariatur nihil incidunt itaque quidem
          dicta obcaecati quae veritatis dolore vitae, temporibus eaque tempora
          minus illo natus. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis, eligendi dolor? At quia nesciunt voluptate
          reiciendis eos rerum autem, dolore quibusdam corrupti vitae, magnam
          deserunt minima pariatur mollitia saepe incidunt.
        </p>
      </div>
      <div>
        <Footer />
      </div>
      <div
        className="back-to-top"
        style={{
          position: "absolute",
          bottom: (120 * window.innerHeight) / 1080,
          right: (150 * window.innerWidth) / 1920,
          width: (57 * window.innerWidth) / 1920,
          height: (57 * window.innerWidth) / 1920,
        }}
      >
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default EndingPage;
