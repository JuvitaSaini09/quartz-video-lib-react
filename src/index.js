import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext/api";
import { SingleVideoProvider } from "./context/singleVideoContext/singleVideoContext";
import { LikedVideoProvider } from "./context/likedVideoContext/likedVideoContext";
import { DisLikedVideoProvider } from "./context/disLikedVideoContext/disLikedVideoContext";
import { HistoryVideoProvider } from "./context/historyVideoContext/historyVideoContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>
      <SingleVideoProvider>
      <LikedVideoProvider >
        <DisLikedVideoProvider>
          <HistoryVideoProvider>
    <App />
    </HistoryVideoProvider>
    </DisLikedVideoProvider>
    </LikedVideoProvider>
    </SingleVideoProvider>
    </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
