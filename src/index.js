import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext/api";
;

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>
    <App />
    </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
