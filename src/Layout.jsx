import { useContext, useEffect, useState } from "react";
import App from "./App";
import { Context } from "./context";
import MobileLoader from "./pages/MobileLoader";

const Layout = () => {
  const [mobile, setMobile] = useState(
    window.innerWidth / window.innerHeight < 1.66 ||
      window.innerWidth / window.innerHeight > 2.2
  );
  const [prevMobile, setPrevMobile] = useState(mobile);

  const handleResize = () => {
    setMobile(
      window.innerWidth / window.innerHeight < 1.66 ||
        window.innerWidth / window.innerHeight > 2.2
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dep

  useEffect(() => {
    if (prevMobile !== mobile) {
      window.location.reload();
    }
    setPrevMobile(mobile);
  }, [mobile]);

  if (mobile) {
    return <MobileLoader />;
  }
  return <App />;
};

export default Layout;
