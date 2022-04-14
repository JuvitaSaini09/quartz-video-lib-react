import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext/api";
import { SingleVideoProvider } from "./context/singleVideoContext/singleVideoContext";
;

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>
      <SingleVideoProvider>
    <App />
    </SingleVideoProvider>
    </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
