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

const CustomTitle = styled(Typography)(({theme})=>({
  color: "var(--light-yellow)",
  fontSize: "18px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  lineHeight: 1.3,

  //600+
  [theme.breakpoints.up("sm")]: {
    fontSize: "22px",
  },
}))

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  // flexDirection: "column",
  // alignItems: "flex-start",

  //600+
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

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
        <CustomBox>
          <CustomTitle>All Movies</CustomTitle>
          <CategoryButtons />
        </CustomBox>

        <VideoListing />
      </Box>
    </>
  );
}

export { Home };
