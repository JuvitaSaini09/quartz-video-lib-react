import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const apiContext = createContext(null);

const ApiProvider = ({ children }) => {
  const [apiVideos, setAllVideos] = useState([]);
  const [category, setCategory] = useState("All");

  const sciFiVideos = apiVideos.filter(
    (object) => object.categoryName === "Sci-Fi"
  );
  const adventureVideos = apiVideos.filter(
    (video) => video.categoryName === "Adventure"
  );

  const dramaVideos = apiVideos.filter(
    (object) => object.categoryName === "Drama"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/videos");
        setAllVideos(response.data.videos);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <apiContext.Provider
      value={{
        apiVideos,
        setAllVideos,
        category,
        setCategory,
        adventureVideos,
        sciFiVideos,
        dramaVideos,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

const useApi = () => useContext(apiContext);

export { ApiProvider, useApi };
