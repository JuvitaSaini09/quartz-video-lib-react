import React, { useState } from "react";
import "./categoryButtons.css";
import { useApi } from "../../context/apiContext/api";
import { Box, Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme, isActive, borderRadius }) => ({
  fontSize: "13px",
  color: isActive ? "var(--background-color)" : "white",
  backgroundColor: isActive ? "var(--light-yellow)" : "#343a40",
  borderColor: isActive ? "var(--light-yellow)" : "#343a40",
  borderRadius: borderRadius || 0,
  "&:hover": {
    color: isActive ? "var(--background-color)" : "white",
    backgroundColor: isActive ? "var(--light-yellow)" : "#343a40",
    borderColor: isActive ? "var(--light-yellow)" : "#343a40",
  },
}));

function CategoryButtons() {
  const { setCategory } = useApi();

  const [isActiveCategory, setIsActiveCategory] = useState({
    All: true,
    "Ice Cream": false,
    Cake: false,
    "Sweet Dish": false,
  });

  const handleCategoryChange = (category) => {
    setCategory(category);
    setIsActiveCategory({
      All: category === "All",
      "Ice Cream": category === "Ice Cream",
      Cake: category === "Cake",
      "Sweet Dish": category === "Sweet Dish",
    });
  };

  return (
    <Box>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory.All}
        onClick={() => handleCategoryChange("All")}
        borderRadius="5px 0 0 5px"
      >
        All
      </StyledButton>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory["Ice Cream"]}
        onClick={() => handleCategoryChange("Ice Cream")}
      >
        Ice Cream
      </StyledButton>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory.Cake}
        onClick={() => handleCategoryChange("Cake")}
      >
        Cake
      </StyledButton>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory["Sweet Dish"]}
        onClick={() => handleCategoryChange("Sweet Dish")}
        borderRadius="0 5px 5px 0"
      >
        Sweet Dish
      </StyledButton>
    </Box>
  );
}

export { CategoryButtons };
