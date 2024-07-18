// import React from "react";
// import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
// import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
// import { NavLink } from "react-router-dom";
// import {
//   EmptyPage,
//   Navbar,
//   Sidebar,
//   Toast,
// } from "../../components/allComponents";
// import "./playlist.css";
// import {
//   createPlaylistApi,
//   deletePlaylistApi,
// } from "../../util/playlistApiCall";
// import { useVideoOfPlaylist } from "../../context/playlist/videosInPlaylistContext";
// import { useToast } from "../../context/toastContext/toastContext";

// function Playlist() {
//   const { setToast, toastState, toastDispatch } = useToast();
//   const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
//   const { setVideosInPlaylist } = useVideoOfPlaylist();
//   const { display } = useSingleVideo();
//   const { setdisplay } = useSingleVideo();

//   const {
//     allPlaylistFromApi,
//     playlistTitle,
//     setPlaylistTitle,
//     playlistVideoDispatch,
//   } = usePlaylistVideoContext();

//   const showDialog = () => {
//     setdisplay(true);
//   };

//   const hideDialog = () => {
//     setdisplay(false);
//   };
//   const playlistTitleHandler = (event) => {
//     setPlaylistTitle(event.target.value);
//     setPlaylistNameValue(event.target.value);
//   };

//   //create new playlist handler
//   const createNewPlaylistHandler = (video, playlistTitle) => {
//     if (playlistTitle) {
//       const isPlaylistNameAlreadyUsed = allPlaylistFromApi.filter(
//         (e) => playlistTitle === e.title
//       );
//       if (isPlaylistNameAlreadyUsed[0] === undefined)
//         createPlaylistApi(
//           video,
//           playlistTitle,
//           playlistVideoDispatch,
//           setToast,
//           toastDispatch
//         );
//       else {
//         //code to show toast here --->
//         toastDispatch({ type: "PLAYLIST_ALREADY_EXIST" });
//         setToast(true);
//       }
//     } else {
//       //code to show toast here --->
//       toastDispatch({ type: "ENTER_PLAYLIST_NAME" });
//       setToast(true);
//     }
//     setPlaylistNameValue("");
//     setPlaylistTitle("");
//   };

//   //delete playlist
//   const deletePlaylist = (item) => {
//     deletePlaylistApi(
//       item._id,
//       playlistVideoDispatch,
//       setToast,
//       toastDispatch
//     );
//   };

//   return (
//     <>
//       <div className={display ? "body-open-modal" : ""} style={{border:"5px solid green"}}>
//         <Navbar />
//         <section className="main-page playlist-page">
//           <Sidebar />
//           <div className="col2">
//             {/* <---------playlist Videos-------------> */}
//             {allPlaylistFromApi[0] === undefined ||
//             allPlaylistFromApi === null ? (
//               <EmptyPage text="You have not created any playlist" />
//             ) : (
//               <h1 className="playlistHeading">All Playlists</h1>
//             )}

//             {/* Create playlist icon ----------> */}
//             <div className="createPlaylist">
//               <button onClick={showDialog}> + Create Playlist</button>
//             </div>
//             {allPlaylistFromApi.map((item) => {
//               return (
//                 <div className="playlist" key={item._id}>
//                   <NavLink
//                     to="/videosInPlaylistPage"
//                     onClick={() => {
//                       setVideosInPlaylist(item.videos);
//                     }}
//                   >
//                     <div className="PlaylistContainer">
//                       <h1>{item.title}</h1>
//                     </div>
//                     <h1 className="play">
//                       <i className="fas fa-play"></i>play
//                     </h1>
//                     <div className="playlistIcon">
//                       <span
//                         className="iconify"
//                         data-icon="carbon:playlist"
//                       ></span>
//                     </div>
//                   </NavLink>

//                   <span
//                     onClick={() => deletePlaylist(item)}
//                     className="playlistDustbin"
//                   >
//                     <i className="fas fa-trash-alt fa-2x"></i>
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//       {/*------------ Playlist Modal -----------------> */}
//       <div
//         className={display ? "modal dialog-box-true" : "modal dialog-box-false"}
//       >
//         <div className="modal-navbar">
//           <span onClick={hideDialog}>
//             <i className="fas fa-times"></i>
//           </span>
//         </div>
//         <div className="modal-footer flex-row"></div>
//         <div className="create-newPlaylist-wrapper mt-2">
//           <input
//             onChange={(e) => playlistTitleHandler(e)}
//             className="create-newPlaylist"
//             type="text"
//             id="newPlaylist"
//             name="newPlaylist"
//             placeholder="Enter new playlist name"
//             value={playlistNameValue}
//           />
//           <br />
//           <button
//             onClick={() => createNewPlaylistHandler(undefined, playlistTitle)}
//           >
//             Create
//           </button>
//         </div>
//       </div>
//       {/*------------ Playlist Modal -----------------> */}

//       {/*<------------- TOAST --------------> */}
//       <Toast text={toastState} />
//     </>
//   );
// }

// export { Playlist };
import React from "react";
import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import {
  EmptyPage,
  Navbar,
  Sidebar,
  Toast,
} from "../../components/allComponents";
import "./playlist.css";
import {
  createPlaylistApi,
  deletePlaylistApi,
} from "../../util/playlistApiCall";
import { useVideoOfPlaylist } from "../../context/playlist/videosInPlaylistContext";
import { useToast } from "../../context/toastContext/toastContext";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import DeleteIcon from "@mui/icons-material/Delete";
import { playlistHero } from "../../images/allImages";
import ClearIcon from "@mui/icons-material/Clear";
import { videos } from "../../backend/db/videos";

const PlaylistContainer = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  marginLeft: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  color: "var(--pink-primary2)",
  border: "3px solid white",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  width: "70%",
  cursor: "pointer",
  textAlign: "center",
  transition: "0.3s",
  "&:hover": {
    boxShadow:
      "rgba(218, 9, 9, 0.16) 0px 1px 4px, rgb(194, 15, 15) 0px 0px 0px 3px",
  },
}));

const CreatePlaylistButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  marginTop: "1rem",
  height: "3rem",
  width: "12rem",
  border: "none",
  borderRadius: "2px",
  marginBottom: "1rem",
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",
  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
}));

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

const testData = [
  {
    title: "Title of Playlist",
    videos: [
      {
        categoryName: "Adventure",
        creator: "Kinema Citrus",
        description:
          "Although cheerful and delicate, Sakura Sakurakouji is a skilled martial artist with a sense of fairness that never falters—no matter the situation. Upon witnessing people burning in blue flames while on a bus ride home, she calls the police to bring their murderer to justice only to find that no evidence remains. However, all her doubts about what she saw vanish when the next day, the new transfer student Rei Oogami joins her class; he is the very boy she watched commit murder in cold blood. Rei is kind, sweet, and quickly becomes popular, contradicting Sakura's accusations. Soon enough, she learns his true nature: a Code Breaker, or one who does not exist. To Sakura's shock, Rei—armed with mysterious powers—seeks to exact justice according to the principle of an eye for an eye. Determined to bring Rei to the right path, Sakura keeps close to him in the hopes of redeeming him from his ways before others are hurt.",
        id: "5",
        logoUrl: "",
        thumbnailUrl:
          "https://m.media-amazon.com/images/M/MV5BODRjYThmZWItZTk3MC00ZWE5LThjMjktMDljMGEzZGM5MDhiXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_.jpg",
        title: "Code:Breaker",
        videoId: "xYXx-rR2s-w",
        videoUrl: "https://www.youtube.com/watch?v=xYXx-rR2s-w",
        _id: "8012dc35-e719-4fd6-bdb3-9d6cc69545a0",
      },
    ],
  },
  {
    title: "new",
    videos: [
      {
        categoryName: "Adventure",
        creator: "Kinema Citrus",
        description:
          "Although cheerful and delicate, Sakura Sakurakouji is a skilled martial artist with a sense of fairness that never falters—no matter the situation. Upon witnessing people burning in blue flames while on a bus ride home, she calls the police to bring their murderer to justice only to find that no evidence remains. However, all her doubts about what she saw vanish when the next day, the new transfer student Rei Oogami joins her class; he is the very boy she watched commit murder in cold blood. Rei is kind, sweet, and quickly becomes popular, contradicting Sakura's accusations. Soon enough, she learns his true nature: a Code Breaker, or one who does not exist. To Sakura's shock, Rei—armed with mysterious powers—seeks to exact justice according to the principle of an eye for an eye. Determined to bring Rei to the right path, Sakura keeps close to him in the hopes of redeeming him from his ways before others are hurt.",
        id: "5",
        logoUrl: "",
        thumbnailUrl:
          "https://m.media-amazon.com/images/M/MV5BODRjYThmZWItZTk3MC00ZWE5LThjMjktMDljMGEzZGM5MDhiXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_.jpg",
        title: "Code:Breaker",
        videoId: "xYXx-rR2s-w",
        videoUrl: "https://www.youtube.com/watch?v=xYXx-rR2s-w",
        _id: "8012dc35-e719-4fd6-bdb3-9d6cc69545a0",
      },
    ],
  },
  {
    title: "new",
    videos: [
      {
        categoryName: "Adventure",
        creator: "Kinema Citrus",
        description:
          "Although cheerful and delicate, Sakura Sakurakouji is a skilled martial artist with a sense of fairness that never falters—no matter the situation. Upon witnessing people burning in blue flames while on a bus ride home, she calls the police to bring their murderer to justice only to find that no evidence remains. However, all her doubts about what she saw vanish when the next day, the new transfer student Rei Oogami joins her class; he is the very boy she watched commit murder in cold blood. Rei is kind, sweet, and quickly becomes popular, contradicting Sakura's accusations. Soon enough, she learns his true nature: a Code Breaker, or one who does not exist. To Sakura's shock, Rei—armed with mysterious powers—seeks to exact justice according to the principle of an eye for an eye. Determined to bring Rei to the right path, Sakura keeps close to him in the hopes of redeeming him from his ways before others are hurt.",
        id: "5",
        logoUrl: "",
        thumbnailUrl:
          "https://m.media-amazon.com/images/M/MV5BODRjYThmZWItZTk3MC00ZWE5LThjMjktMDljMGEzZGM5MDhiXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_.jpg",
        title: "Code:Breaker",
        videoId: "xYXx-rR2s-w",
        videoUrl: "https://www.youtube.com/watch?v=xYXx-rR2s-w",
        _id: "8012dc35-e719-4fd6-bdb3-9d6cc69545a0",
      },
    ],
  },
  {
    title: "new",
    videos: [
      {
        categoryName: "Adventure",
        creator: "Kinema Citrus",
        description:
          "Although cheerful and delicate, Sakura Sakurakouji is a skilled martial artist with a sense of fairness that never falters—no matter the situation. Upon witnessing people burning in blue flames while on a bus ride home, she calls the police to bring their murderer to justice only to find that no evidence remains. However, all her doubts about what she saw vanish when the next day, the new transfer student Rei Oogami joins her class; he is the very boy she watched commit murder in cold blood. Rei is kind, sweet, and quickly becomes popular, contradicting Sakura's accusations. Soon enough, she learns his true nature: a Code Breaker, or one who does not exist. To Sakura's shock, Rei—armed with mysterious powers—seeks to exact justice according to the principle of an eye for an eye. Determined to bring Rei to the right path, Sakura keeps close to him in the hopes of redeeming him from his ways before others are hurt.",
        id: "5",
        logoUrl: "",
        thumbnailUrl:
          "https://m.media-amazon.com/images/M/MV5BODRjYThmZWItZTk3MC00ZWE5LThjMjktMDljMGEzZGM5MDhiXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_.jpg",
        title: "Code:Breaker",
        videoId: "xYXx-rR2s-w",
        videoUrl: "https://www.youtube.com/watch?v=xYXx-rR2s-w",
        _id: "8012dc35-e719-4fd6-bdb3-9d6cc69545a0",
      },
    ],
  },
];

function Playlist() {
  const { setToast, toastState, toastDispatch } = useToast();
  const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
  const { setVideosInPlaylist } = useVideoOfPlaylist();
  const { display, setdisplay } = useSingleVideo();

  const {
    allPlaylistFromApi,
    playlistTitle,
    setPlaylistTitle,
    playlistVideoDispatch,
  } = usePlaylistVideoContext();

  const showDialog = () => setdisplay(true);
  const hideDialog = () => setdisplay(false);

  const playlistTitleHandler = (event) => {
    setPlaylistTitle(event.target.value);
    setPlaylistNameValue(event.target.value);
  };

  const createNewPlaylistHandler = (video, playlistTitle) => {
    if (playlistTitle) {
      const isPlaylistNameAlreadyUsed = allPlaylistFromApi.find(
        (e) => playlistTitle === e.title
      );
      if (!isPlaylistNameAlreadyUsed) {
        createPlaylistApi(
          video,
          playlistTitle,
          playlistVideoDispatch,
          setToast,
          toastDispatch
        );
      } else {
        toastDispatch({ type: "PLAYLIST_ALREADY_EXIST" });
        setToast(true);
      }
    } else {
      toastDispatch({ type: "ENTER_PLAYLIST_NAME" });
      setToast(true);
    }
    setPlaylistNameValue("");
    setPlaylistTitle("");
  };
  const deletePlaylist = (item) => {
    deletePlaylistApi(item._id, playlistVideoDispatch, setToast, toastDispatch);
  };

  const PlaylistCard = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
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

  const VideoCount = styled(Typography)(({ theme }) => ({
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
  }));

  const InfoContainer = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const Title = styled(Typography)({
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });

  const Creator = styled(Typography)({
    color: "text.secondary",
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

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "var(--background-color)",
        }}
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
              {allPlaylistFromApi.length > 0
                ? "All Playlists"
                : "You have not created any playlist"}
            </Typography>

            <Box sx={{ textAlign: "center" }}>
              <CreatePlaylistButton onClick={showDialog}>
                + Create Playlist
              </CreatePlaylistButton>
            </Box>

            {/* {allPlaylistFromApi.map((item) => (
              <Box
                key={item._id}
                sx={{ position: "relative", marginBottom: "1rem" }}
              >
                <NavLink
                  to="/videosInPlaylistPage"
                  onClick={() => setVideosInPlaylist(item.videos)}
                  style={{ textDecoration: "none" }}
                >
                  <PlaylistContainer>
                    <Typography variant="h6">{item.title}</Typography>
                  </PlaylistContainer>
                </NavLink>
                <IconButton
                  onClick={() => deletePlaylist(item)}
                  sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "white",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))} */}

            <Grid container spacing={2}>
              {/* allPlaylistFromApi */}
              {allPlaylistFromApi.map((playlist, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <PlaylistCard>
                    <Link
                      to="/videosInPlaylistPage"
                      onClick={() => setVideosInPlaylist(playlist.videos)}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ThumbnailContainer>
                        <Thumbnail
                          src={playlist.videos[0].thumbnailUrl}
                          alt={playlist.title}
                        />
                        <VideoCount variant="caption">
                          {playlist.videos.length} videos
                        </VideoCount>
                      </ThumbnailContainer>
                      <InfoContainer>
                        <Title variant="subtitle1">{playlist.title}</Title>
                        <Creator variant="body2">
                          {playlist.videos[0].creator}
                        </Creator>
                      </InfoContainer>
                    </Link>
                    <DeleteButton
                      className="deleteButton"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deletePlaylist(playlist);
                      }}
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </PlaylistCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Hero Section of page */}
        {/* <Box
          component="img"
          src={playlistHero}
          alt="playlistImg"
          sx={{
            height: "20rem",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        /> */}
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#121212",
          width: "400px",
          padding: "2rem",
          borderRadius: "10px",
          display: display ? "block" : "none",
        }}
      >
        <IconButton
          onClick={hideDialog}
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "white",
          }}
        >
          <ClearIcon />
        </IconButton>

        <Typography variant="h6" color="white" sx={{ marginBottom: "1rem" }}>
          Create New Playlist
        </Typography>

        <TextField
          onChange={playlistTitleHandler}
          type="text"
          placeholder="Enter new playlist name"
          value={playlistNameValue}
          fullWidth
          sx={{
            marginBottom: "1rem",
            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "rgba(255, 255, 255, 0.7)",
              opacity: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        />

        <CreatePlaylistButton
          onClick={() => createNewPlaylistHandler(undefined, playlistTitle)}
          fullWidth
        >
          Create
        </CreatePlaylistButton>
      </Box>

      <Toast text={toastState} />
    </>
  );
}

export { Playlist };
