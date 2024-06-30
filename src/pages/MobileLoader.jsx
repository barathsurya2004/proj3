import { Canvas } from "@react-three/fiber";
import image from "../assets/thunder.svg";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Face2 } from "../../public/models/Face2";

const MobileLoader = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className="face-canvas"
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={15} />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.4} /> */}
          <Suspense fallback={null}>
            {/* <FaceModel /> */}
            <Face2 />
          </Suspense>
        </Canvas>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "50vh",
          padding: "0 20%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: (42 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next Bold",
            textAlign: "center",
          }}
        >
          Thank you for visiting!
        </h1>
        <p
          style={{
            fontSize: (16 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
            margin: "0 10%",
          }}
        >
          This website is designed for Leisure Viewing on Larger Screens. If you
          have a laptop, desktop, or external monitor nearby, grab them to
          completely experience and interact with this website.
        </p>
        <p
          style={{
            fontSize: (16 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
            margin: "0 10%",
          }}
        >
          If you don't have these devices nearby and want to visit later, thank
          you again!
        </p>
        <p
          style={{
            fontSize: (16 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
            margin: "0 10%",
          }}
        >
          Click here to copy the link to this website and save it for later.
        </p>
      </div>
      <div
        className="footer"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: (14.16 * window.innerWidth) / 1920,
              fontFamily: "Filson Pro Regular",
            }}
          >
            Designed by Sudhesh Venkatachalam{" "}
          </p>
          <img
            src={image}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (25 * window.innerWidth) / 1920,
              margin: "0 10px",
            }}
            alt=""
          />
          <p
            style={{
              fontSize: (14.16 * window.innerWidth) / 1920,
              fontFamily: "Filson Pro Regular",
            }}
          >
            Developed by Barath Surya
          </p>
        </div>
        <hr
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            fontSize: (14.16 * window.innerWidth) / 1920,
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
          }}
        >
          © 2024 Sudhesh Venkatachalam | Disclaimer
        </p>
      </div>
    </div>
  );
};

export default MobileLoader;
