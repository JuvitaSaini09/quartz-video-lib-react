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
    "Sci-Fi": false,
    Adventure: false,
    Drama: false,
  });

  const handleCategoryChange = (category) => {
    setCategory(category);
    setIsActiveCategory({
      All: category === "All",
      "Sci-Fi": category === "Sci-Fi",
      Adventure: category === "Adventure",
      Drama: category === "Drama",
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
        isActive={isActiveCategory["Sci-Fi"]}
        onClick={() => handleCategoryChange("Sci-Fi")}
      >
        Sci-Fi
      </StyledButton>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory.Adventure}
        onClick={() => handleCategoryChange("Adventure")}
      >
        Adventure
      </StyledButton>
      <StyledButton
        variant="outlined"
        isActive={isActiveCategory["Drama"]}
        onClick={() => handleCategoryChange("Drama")}
        borderRadius="0 5px 5px 0"
      >
        Drama
      </StyledButton>
    </Box>
  );
}

export { CategoryButtons };
