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

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: "var(--light-yellow)",
  fontSize: "18px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  lineHeight: 1.3,

  //600+
  [theme.breakpoints.up("sm")]: {
    fontSize: "22px",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "30px",
  gap: 5,
  //600+
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "0px",
    gap: 0,
  },
}));

function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "var(--background-color)",
          // padding: "100px 30px 0 30px",
          padding: {
            xs: "100px 10px 0 0px", // under 'sm' screen
            sm: "100px 30px 0 30px", // over 'sm' screen
          },
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
