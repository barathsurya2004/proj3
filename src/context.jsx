import { useContext, createContext, useState } from "react";

export const Context = createContext({
  q_mark: true,
  setQMark: () => {},
  loading: true,
  setLoading: () => {},
});

export const ContextProvider = ({ children }) => {
  const [q_mark, setQMark] = useState(true);
  const [loading, setLoading] = useState(true);
  const values = {
    q_mark,
    setQMark,
    loading,
    setLoading,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
