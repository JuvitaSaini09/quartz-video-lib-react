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
import { PlaylistVideoProvider } from "./context/playlist/playlistContext";
import { VideoPlaylistProvider } from "./context/playlist/videosInPlaylistContext";
import { ToastProvider } from "./context/toastContext/toastContext";
import { WatchLaterProvider } from "./context/watchLaterContext/watchLaterContext";
import {AuthProivder, AuthProvider} from "./context/authContext/AuthContext"
import {createRoot} from 'react-dom/client' 

const container=document.getElementById('root');
const root=createRoot(container);
// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ApiProvider>
        <SingleVideoProvider>
          <LikedVideoProvider>
            <DisLikedVideoProvider>
              <HistoryVideoProvider>
                <PlaylistVideoProvider>
                  <VideoPlaylistProvider>
                    <ToastProvider>
                      <WatchLaterProvider >
                  <App />
                  </WatchLaterProvider>
                  </ToastProvider>
                  </VideoPlaylistProvider>
                </PlaylistVideoProvider>
              </HistoryVideoProvider>
            </DisLikedVideoProvider>
          </LikedVideoProvider>
        </SingleVideoProvider>
      </ApiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

