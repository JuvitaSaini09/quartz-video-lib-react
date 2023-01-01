import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const apiContext = createContext(null);

const ApiProvider = ({ children }) => {
  const [apiVideos, setAllVideos] = useState([]);
  const [category, setCategory] = useState("All");

  const iceCreamVideos = apiVideos.filter(
    (object) => object.categoryName === "Ice Cream"
  );
  const cakeVideos = apiVideos.filter((video) => video.categoryName === "Cake");

  const sweetDishVideos = apiVideos.filter(
    (object) => object.categoryName === "Sweet Dish"
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
        cakeVideos,
        sweetDishVideos,
        iceCreamVideos,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

const useApi = () => useContext(apiContext);

export { ApiProvider, useApi };
