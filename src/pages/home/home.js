import React from "react";
// import { videos } from '../../backend/db/products';
import {
  CategoryButtons,
  Navbar,
  Sidebar,
  VideoListing,
} from "../../components/allComponents";
import "./home.css";
import "../../css/videoCard.css";
import { Box, Typography, styled } from "@mui/material";

const CustomTitle = styled(Typography)({
  color: "var(--light-yellow)",
  fontSize: "22px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  lineHeight: 1.3,
});

function Home() {
  return (
    <>
      <Navbar />

      {/* <section className="main-page home-page">
        <Sidebar />
        <div className="col2">
          <CategoryButtons />
          <VideoListing />
        </div>
      </section> */}

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "var(--background-color)",
          padding: "100px 30px 0 30px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomTitle>All Movies</CustomTitle>
          <CategoryButtons />
        </Box>

        <VideoListing />
      </Box>
    </>
  );
}

export { Home };
