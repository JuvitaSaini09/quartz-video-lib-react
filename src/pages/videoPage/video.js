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
import { Box, Stack, Typography, styled } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
  const { display, singleVideo } = useSingleVideo();
  const { toastState } = useToast();
  const MainPageVideo = styled("section")(({ theme }) => ({
    marginTop: "6rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  }));

  const VideoContainer = styled("div")(({ theme }) => ({
    marginTop: "1.5rem",
    // display: "flex",
    // justifyContent: "space-evenly",
    // flexWrap: "wrap",
  }));

  const CustomVideoHeading = styled(Typography)({
    color: "white",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
  });

  return (
    <>
      <StyledBox display={display}>
        <Navbar />
        <MainPageVideo sx={{ padding: "0 20px" }}>
          {/* <Sidebar /> */}
          <Stack direction="row" spacing={1} sx={{ marginLeft: "10px" }}>
            <CustomVideoHeading>
              Video{" "}
              <FiberManualRecordIcon sx={{ color: "white", fontSize: "8px" }} />
            </CustomVideoHeading>
            <CustomVideoHeading>
              TV{" "}
              <FiberManualRecordIcon sx={{ color: "white", fontSize: "8px" }} />
            </CustomVideoHeading>
            <CustomVideoHeading>
              Watching {singleVideo.title}
            </CustomVideoHeading>
          </Stack>
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
