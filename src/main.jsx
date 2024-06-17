import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./context.jsx";
import Layout from "./Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Layout />
    </ContextProvider>
  </React.StrictMode>
);
