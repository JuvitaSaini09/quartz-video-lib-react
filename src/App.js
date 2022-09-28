import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { HistoryVideoPage, Home, LikedVideoPage, LoginPage, LogoutPage, SingupPage, Video, VideosInPlaylistPage, WatchLater } from "./pages/allPages";
import { Playlist } from "./pages/playlist/playlist";

function App() {

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM"
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
       
        <Route path="/historyVideo" element={<RequiresAuth>
          <HistoryVideoPage />
        </RequiresAuth>} />

        <Route path="/likedVideo" element={<RequiresAuth>
          <LikedVideoPage/>
        </RequiresAuth>} />
        
        <Route path="/playlist" element={<RequiresAuth>
          <Playlist/>
        </RequiresAuth>} />

        <Route path="/videosInPlaylistPage" element={<RequiresAuth>
          <VideosInPlaylistPage/>
        </RequiresAuth>} />

        <Route path="/watchlater" element={<RequiresAuth>
          <WatchLater/>
        </RequiresAuth>} />

        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/signupPage" element={<SingupPage />} />
        <Route path="/logoutPage" element={<LogoutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
