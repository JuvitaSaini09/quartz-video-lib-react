import React, { useState } from "react";
import {
  Navbar,
  PlaylistModal,
  Sidebar,
  SingleVideo,
  VideoRec,
} from "../../components/allComponents";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import "./videoo.css";
import { Toast } from "../../components/allComponents";
import { useToast } from "../../context/toastContext/toastContext";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ display }) => ({
  height: display ? "100vh" : "auto",
  overflowY: display ? "hidden" : "auto",
  paddingRight: display ? "15px" : "0",
  position: display ? "fixed" : "static",
  opacity: display ? 0.5 : 1,
  pointerEvents: display ? "none" : "auto",
  backgroundColor: "#121212",
}));

function Video() {
  const { display } = useSingleVideo();
  const { toastState } = useToast();

  const MainPageVideo = styled("section")(({ theme }) => ({
    marginTop: "7rem",
    display: "grid",
    gridTemplateColumns: "5rem 1fr",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  }));

  const VideoContainer = styled("div")(({ theme }) => ({
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  }));

  return (
    <>
      <StyledBox display={display}>
        <Navbar />
        <MainPageVideo sx={{ border: "2px solid red" }}>
          <Sidebar />
          <VideoContainer>
            <SingleVideo />
            <VideoRec />
          </VideoContainer>
        </MainPageVideo>
      </StyledBox>
      <PlaylistModal />
      {/*<------------- TOAST --------------> */}
      <Toast text={toastState} />
    </>
  );
}

export { Video };
