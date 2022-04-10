import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Video } from "./pages/allPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
