import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainContext from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
