import { useContext, createContext, useState } from "react";

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
});

export const ContextProvider = ({ children }) => {
  const [q_mark, setQMark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [meshSelected, setMeshSelected] = useState(null);
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
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
