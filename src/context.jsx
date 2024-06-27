import { useContext, createContext, useState, useEffect } from "react";

export const Context = createContext({
  q_mark: true,
  setQMark: () => {},
  loading: true,
  setLoading: () => {},
  hovered: false,
  setHovered: () => {},
  mobile: false,
  setMobile: () => {},
  meshSelected: null,
  setMeshSelected: () => {},
  canSelect: false,
  setCanSelect: () => {},
  pointer: [0, 0],
  down: false,
  globeClicked: false,
  setGlobeClicked: () => {},
});

export const ContextProvider = ({ children }) => {
  const [q_mark, setQMark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [meshSelected, setActiveMeshSelected] = useState(null);
  const [canSelect, setCanSelect] = useState(false);
  const [pointer, setPointer] = useState([0, 0]);
  const [down, setDown] = useState(false);
  const [globeClicked, setGlobeClicked] = useState(false);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPointer([clientX, clientY]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const setMeshSelected = (mesh) => {
    setTimeout(() => setActiveMeshSelected(mesh), 500);
  };
  const values = {
    q_mark,
    setQMark,
    loading,
    setLoading,
    hovered,
    setHovered,
    mobile,
    setMobile,
    meshSelected,
    setMeshSelected,
    canSelect,
    setCanSelect,
    pointer,
    down,
    setDown,
    globeClicked,
    setGlobeClicked,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
