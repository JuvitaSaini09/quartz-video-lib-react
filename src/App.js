import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HistoryVideoPage, Home, LikedVideoPage, Video } from "./pages/allPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/likedVideo" element={<LikedVideoPage />} />
        <Route path="/historyVideo" element={<HistoryVideoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
