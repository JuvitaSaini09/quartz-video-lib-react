import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HistoryVideoPage, Home, LikedVideoPage, Video, VideosInPlaylistPage, WatchLater } from "./pages/allPages";
import { Playlist } from "./pages/playlist/playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/likedVideo" element={<LikedVideoPage />} />
        <Route path="/historyVideo" element={<HistoryVideoPage/>} />
        <Route path="/playlist" element={<Playlist/>} />
        <Route path="/videosInPlaylistPage" element={<VideosInPlaylistPage/>} />
        <Route path="/watchlater" element={<WatchLater/>} />
      </Routes>
    </div>
  );
}

export default App;
