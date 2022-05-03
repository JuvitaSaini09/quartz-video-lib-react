import React, { useContext, createContext, useState } from "react";

const videoPlaylistContext = createContext(null);

const VideoPlaylistProvider = ({ children }) => {
  const [videosInPlaylist, setVideosInPlaylist] = useState([]);

  return (
    <videoPlaylistContext.Provider
      value={{ videosInPlaylist, setVideosInPlaylist }}
    >
      {children}
    </videoPlaylistContext.Provider>
  );
};

const useVideoOfPlaylist = () => useContext(videoPlaylistContext);

export { useVideoOfPlaylist, VideoPlaylistProvider };
