import React from "react";
import "./categoryButtons.css";
import { useApi } from "../../context/apiContext/api";

function CategoryButtons() {
  const { setCategory } = useApi();

  const allVideos = () => {
    setCategory("All");
  };
  const iceCreamVideos = () => {
    setCategory("Ice Cream");
  };
  const cakeVideos = () => {
    setCategory("Cake");
  };
  const sweetDishVideos = () => {
    setCategory("Sweet Dish");
  };

  return (
    <div className="btn-category">
      <button className="btn-all" onClick={allVideos}>
        All
      </button>
      <button className="btn-iceCream" onClick={iceCreamVideos}>
        Ice Cream
      </button>
      <button className="btn-cake" onClick={cakeVideos}>
        Cake
      </button>
      <button className="btn-chocolate" onClick={sweetDishVideos}>
        Sweet Dish
      </button>
    </div>
  );
}

export { CategoryButtons };
