import React, { useState } from "react";
import "./categoryButtons.css";
import { useApi } from "../../context/apiContext/api";

function CategoryButtons() {
  const { setCategory } = useApi();
  const [isActiveCategory, setIsActiveCategory] = useState({
    "All": true,
    "Ice Cream": false,
    "Cake": false,
    "Sweet Dish": false,
  });

  const allVideos = (e) => {
    setCategory("All");
    setIsActiveCategory({
      "All": true,
      "Ice Cream": false,
      "Cake": false,
      "Sweet Dish": false,
    });
  };
  const iceCreamVideos = (e) => {
    setCategory("Ice Cream");
    setIsActiveCategory({
      "All": false,
      "Ice Cream": true,
      "Cake": false,
      "Sweet Dish": false,
    });
  };

  const cakeVideos = (e) => {
    setCategory("Cake");
    setIsActiveCategory({
      "All": false,
      "Ice Cream": false,
      "Cake": true,
      "Sweet Dish": false,
    });
  };
  const sweetDishVideos = (e) => {
    setCategory("Sweet Dish");
    setIsActiveCategory({
      "All": false,
      "Ice Cream": false,
      "Cake": false,
      "Sweet Dish": true,
    });
  };

  const activeCategoryButtonStyle = {
    color: "white",
    backgroundColor: "#EC0023",
  };

  const inActiveCategoryButtonStyle = {
    color: "#EC0023",
    backgroundColor: "white",
  };

  return (
    <div className="btn-category">
      <button
        className="btn-all"
        onClick={(e) => allVideos(e)}
        style={
          isActiveCategory.All
            ? activeCategoryButtonStyle
            : inActiveCategoryButtonStyle
        }
      >
        All
      </button>
      <button
        className="btn-iceCream"
        onClick={(e) => iceCreamVideos(e)}
        style={
          isActiveCategory["Ice Cream"]
            ? activeCategoryButtonStyle
            : inActiveCategoryButtonStyle
        }
      >
        Ice Cream
      </button>
      <button
        className="btn-cake"
        onClick={(e) => cakeVideos(e)}
        style={
          isActiveCategory.Cake
            ? activeCategoryButtonStyle
            : inActiveCategoryButtonStyle
        }
      >
        Cake
      </button>
      <button
        className="btn-chocolate"
        onClick={(e) => sweetDishVideos(e)}
        style={
          isActiveCategory["Sweet Dish"]
            ? activeCategoryButtonStyle
            : inActiveCategoryButtonStyle
        }
      >
        Sweet Dish
      </button>
    </div>
  );
}

export { CategoryButtons };
