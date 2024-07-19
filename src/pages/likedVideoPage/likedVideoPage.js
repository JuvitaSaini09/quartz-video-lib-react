// import React from "react";
// import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
// import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
// import { NavLink } from "react-router-dom";
// import { EmptyPage, Navbar, Sidebar } from "../../components/allComponents";
// import "./likedVideoPage.css";

// function LikedVideoPage() {
//   const { likedVideoState } = useLikedVideoContext();
//   const { setSingleVideo } = useSingleVideo();

//   return (
//     <>
//       <Navbar />
//       <section className="main-page like-page">
//         <Sidebar />
//         <div className="col2">
//           {/* <---------Liked Videos-------------> */}
//           <div className="videosListing mt-3">
//             {likedVideoState[0] === undefined ? (
//               <EmptyPage text="No Liked Video" />
//             ) : (
//               ""
//             )}
//             {likedVideoState.map((item) => {
//               return (
//                 <div className="video-card" key={item._id}>
//                   <NavLink onClick={() => setSingleVideo(item)} to="/video">
//                     <img
//                       className="img-thumbnail"
//                       src={item.thumbnailUrl}
//                       alt={item.title}
//                     />
//                     <h1 className="play">
//                       <i className="fas fa-play"></i>play
//                     </h1>
//                   </NavLink>
//                   <div className="video-description">
//                     <img className="video-logo" src={item.logoUrl} alt="logo" />
//                     <h4 className="video-title">
//                       {item.title}
//                       <br />
//                       <span style={{ fontWeight: "lighter" }}>
//                         {item.categoryName}
//                       </span>
//                     </h4>
//                     <div className="video-setting">
//                       <i className="fas fa-ellipsis-v"></i>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           {/* <---------Liked Videos-------------> */}
//         </div>
//       </section>
//     </>
//   );
// }

// export { LikedVideoPage };

import React from "react";
import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { NavLink } from "react-router-dom";
import { Navbar, Sidebar } from "../../components/allComponents";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Stack,
  styled,
  Box,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const CardTitle = styled(Typography)({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardSubTitle = styled(Typography)({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
});

const HoverCard = styled(Card)({
  position: "relative",
  backgroundColor: "var(--background-black)",
  borderRadius: "0px",
  border: "none",
  boxShadow: "none", // Ensure no shadow
  "&:hover": {
    "& img": {
      filter: "blur(1.5px)",
    },
    "& > div": {
      opacity: 1,
    },
  },
});

const PlayButtonOverlay = styled(Box)({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
});

const PageContainer = styled("section")({
  display: "flex",
  backgroundColor: "rgb(36, 36, 40)",
  minHeight: "100vh",
  paddingTop: "4rem",
});

const Col2 = styled("div")({
  flex: 1,
  padding: "20px",
  overflowY: "auto",
});

const PageHeading = styled("h1")({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
});

function LikedVideoPage() {
  const { likedVideoState } = useLikedVideoContext();
  const { setSingleVideo } = useSingleVideo();

  return (
    <>
      <Navbar />
      <PageContainer>
        <Sidebar />
        <Col2>
          {likedVideoState.length === 0 ? (
            <Typography
              variant="h4"
              color="white"
              sx={{
                fontFamily: "Poppins, sans-serif",
                margin: "auto",
                marginTop: "10rem",
                textAlign: "center",
              }}
            >
              No Liked Videos
            </Typography>
          ) : (
            <PageHeading>Liked Videos</PageHeading>
          )}
          <Grid
            container
            spacing={3}
            sx={{ marginTop: "20px", width: "100%" }}
            justifyContent="center"
          >
            {likedVideoState.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                <HoverCard>
                  <NavLink onClick={() => setSingleVideo(item)} to="/video">
                    <CardMedia
                      component="img"
                      height="80%"
                      image={item.thumbnailUrl}
                      alt={item.title}
                    />
                  </NavLink>
                  <PlayButtonOverlay
                    onClick={() => {
                      setSingleVideo(item);
                    }}
                  >
                    <IconButton
                      style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <PlayArrowRoundedIcon />
                    </IconButton>
                  </PlayButtonOverlay>
                  <CardContent sx={{ padding: "0" }}>
                    <Stack sx={{ textAlign: "left", width: "80%" }}>
                      <CardTitle variant="subtitle1">{item.title}</CardTitle>
                      <CardSubTitle variant="subtitle2">
                        {item.categoryName}
                      </CardSubTitle>
                    </Stack>
                  </CardContent>
                </HoverCard>
              </Grid>
            ))}
          </Grid>
        </Col2>
      </PageContainer>
    </>
  );
}

export { LikedVideoPage };
