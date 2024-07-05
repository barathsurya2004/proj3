import { useRef } from "react";
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
  mode: null,
  setMode: () => {},
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
  const [mode, setMode] = useState(null);
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

  const debounceTimeoutRef = useRef();

  const setMeshSelected = (mesh) => {
    if (mesh === null || globeClicked) {
      // Clear any existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      // Set state to null immediately
      setActiveMeshSelected(null);
    } else {
      // Clear any existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      // Set a new timeout to update the state after 300ms (or any suitable delay)
      debounceTimeoutRef.current = setTimeout(() => {
        setActiveMeshSelected(mesh);
      }, 300); // Adjust the delay as needed
    }
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
    mode,
    setMode,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
