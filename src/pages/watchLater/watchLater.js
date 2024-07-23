// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { EmptyPage,Navbar, Sidebar, Toast } from '../../components/allComponents';
// import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext';
// import { useToast } from '../../context/toastContext/toastContext';
// import { useWatchLaterCheckbox } from '../../context/watchLaterContext/watchLaterContext';
// import { removeFromWatchLater } from '../../util/watchLaterApi';
// import "./watchLater.css"

// function WatchLater() {
//     const {videosInPlaylist,setwatchLaterCheckbox,setWatchLaterCheckboxDisptach,}=useWatchLaterCheckbox();
//     const { setSingleVideo} = useSingleVideo();
//     const {setToast,toastState,toastDispatch}=useToast();

//      // delete video from watchlater
//      const deleteVideoFromWatchLaterHandler=(item)=>{
//         removeFromWatchLater(item,setWatchLaterCheckboxDisptach,toastDispatch,setToast)
//         setwatchLaterCheckbox(prev=>!prev)
//      }

//   return (
//     <>
//     <Navbar />
//     <section className="main-page watchlater-page">
//       <Sidebar />
//       <div className="col2">
//         {videosInPlaylist[0] !== undefined && <h1 className="playlistHeading">WATCH LATER VIDEOS</h1>}
//         {/* <---------History Videos-------------> */}
//         <div className="videosListing mt-3">
//           {videosInPlaylist === undefined || videosInPlaylist[0] === undefined ? <EmptyPage text="Empty Watch Later" /> :<>
//           {videosInPlaylist.map((item) => {
//             return (
//               <div className="video-card" key={item._id}>
//                 <NavLink onClick={() => setSingleVideo(item)} to="/video">
//                   <img
//                     className="img-thumbnail"
//                     src={item.thumbnailUrl}
//                     alt={item.title}
//                   />

//                   <h1 className="play">
//                     <i className="fas fa-play"></i>play
//                   </h1>
//                 </NavLink>
//                 <span onClick={()=>deleteVideoFromWatchLaterHandler(item)} className="historyDustbin"><i className="fas fa-trash-alt fa-2x"></i></span>
//                 <div className="video-description">
//                   <img className="video-logo" src={item.logoUrl} alt="logo" />
//                   <h4 className="video-title">
//                     {item.title}
//                     <br />
//                     <span style={{ fontWeight: "lighter" }}>
//                       {item.categoryName}
//                     </span>
//                   </h4>
//                   <div className="video-setting">
//                     <i className="fas fa-ellipsis-v"></i>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}</>}

//         </div>
//         {/* <---------watchLater Videos-------------> */}
//       </div>
//     </section>

//   {/*<------------- TOAST --------------> */}
//   <Toast text={toastState} />

//   </>
//   )
// }

// export {WatchLater}

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Sidebar, Toast } from "../../components/allComponents";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { useToast } from "../../context/toastContext/toastContext";
import { useWatchLaterCheckbox } from "../../context/watchLaterContext/watchLaterContext";
import { removeFromWatchLater } from "../../util/watchLaterApi";
import { Box, Typography, Grid, styled, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoCard = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    "& img": {
      filter: "blur(1.5px)",
    },
    "& > div": {
      opacity: 1,
    },
    "& .deleteButton": {
      opacity: 1,
    },
  },
}));

const ThumbnailContainer = styled("div")({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const Thumbnail = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const InfoContainer = styled("div")(({ theme }) => ({}));

const Title = styled(Typography)({
  fontWeight: "bold",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--background-color)",
  textAlign: "start",
});

const Category = styled(Typography)({
  color: "text.secondary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--background-color)",
  textAlign: "start",
});

const DeleteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.common.white,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.2s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

const PlayOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.2s",
}));

function WatchLater() {
  const {
    videosInPlaylist,
    setwatchLaterCheckbox,
    setWatchLaterCheckboxDisptach,
  } = useWatchLaterCheckbox();
  const { setSingleVideo } = useSingleVideo();
  const { setToast, toastState, toastDispatch } = useToast();

  const deleteVideoFromWatchLaterHandler = (item) => {
    removeFromWatchLater(
      item,
      setWatchLaterCheckboxDisptach,
      toastDispatch,
      setToast
    );
    setwatchLaterCheckbox((prev) => !prev);
  };

  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), 10%, rgba(255, 255, 255, 0))",
        }}
      >
        <Sidebar />
        <Box sx={{ flexGrow: 1, padding: "2rem", mt: 8 }}>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            {videosInPlaylist.length > 0
              ? "Watch Later Videos"
              : "Empty Watch Later"}
          </Typography>

          <Grid container spacing={2}>
            {videosInPlaylist.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                <VideoCard>
                  <Link
                    to="/video"
                    onClick={() => setSingleVideo(item)}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ThumbnailContainer>
                      <Thumbnail src={item.thumbnailUrl} alt={item.title} />
                      <PlayOverlay>
                        <PlayArrowIcon fontSize="large" />
                      </PlayOverlay>
                    </ThumbnailContainer>
                    <InfoContainer>
                      <Title variant="subtitle1">{item.title}</Title>
                      <Category variant="body2">{item.categoryName}</Category>
                    </InfoContainer>
                  </Link>
                  <DeleteButton
                    className="deleteButton"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteVideoFromWatchLaterHandler(item);
                    }}
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </VideoCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Toast text={toastState} />
    </Box>
  );
}

export { WatchLater };
