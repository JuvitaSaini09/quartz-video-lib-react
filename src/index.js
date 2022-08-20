import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext/api";
import { SingleVideoProvider } from "./context/singleVideoContext/singleVideoContext";
import { LikedVideoProvider } from "./context/likedVideoContext/likedVideoContext";
import { DisLikedVideoProvider } from "./context/disLikedVideoContext/disLikedVideoContext";
import { HistoryVideoProvider } from "./context/historyVideoContext/historyVideoContext";
import { PlaylistVideoProvider } from "./context/playlist/playlistContext";
import { VideoPlaylistProvider } from "./context/playlist/videosInPlaylistContext";
import { ToastProvider } from "./context/toastContext/toastContext";
import { WatchLaterProvider } from "./context/watchLaterContext/watchLaterContext";
import { AuthProvider } from "./context/authContext/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <SingleVideoProvider>
          <LikedVideoProvider>
            <DisLikedVideoProvider>
              <HistoryVideoProvider>
                <PlaylistVideoProvider>
                  <VideoPlaylistProvider>
                    <ToastProvider>
                      <WatchLaterProvider >
                        < AuthProvider >  
                  <App />
                  </AuthProvider>
                  </WatchLaterProvider>
                  </ToastProvider>
                  </VideoPlaylistProvider>
                </PlaylistVideoProvider>
              </HistoryVideoProvider>
            </DisLikedVideoProvider>
          </LikedVideoProvider>
        </SingleVideoProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
  // ,
  // document.getElementById("root")
);
