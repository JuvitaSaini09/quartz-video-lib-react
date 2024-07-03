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
import { NavLink } from "react-router-dom";
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
import { Box, Typography, Button, TextField } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import DeleteIcon from "@mui/icons-material/Delete";
import { playlistHero } from "../../images/allImages";

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
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",

  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
}));

function Playlist() {
  const { setToast, toastState, toastDispatch } = useToast();
  const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
  const { setVideosInPlaylist } = useVideoOfPlaylist();
  const { display } = useSingleVideo();
  const { setdisplay } = useSingleVideo();

  const {
    allPlaylistFromApi,
    playlistTitle,
    setPlaylistTitle,
    playlistVideoDispatch,
  } = usePlaylistVideoContext();

  const showDialog = () => {
    setdisplay(true);
  };

  const hideDialog = () => {
    setdisplay(false);
  };
  const playlistTitleHandler = (event) => {
    setPlaylistTitle(event.target.value);
    setPlaylistNameValue(event.target.value);
  };

  const createNewPlaylistHandler = (video, playlistTitle) => {
    if (playlistTitle) {
      const isPlaylistNameAlreadyUsed = allPlaylistFromApi.filter(
        (e) => playlistTitle === e.title
      );
      if (isPlaylistNameAlreadyUsed[0] === undefined)
        createPlaylistApi(
          video,
          playlistTitle,
          playlistVideoDispatch,
          setToast,
          toastDispatch
        );
      else {
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

  return (
    <>
      <Box
        // className={display ? "body-open-modal" : ""}
        sx={{
          minHeight: "100vh",
          backgroundColor: "var(--background-color)",
          outline: "5px solid orange",
        }}
      >
        <Navbar />
        {/* <Box className="main-page playlist-page"> */}
        <Box
          sx={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), 10%,rgba(255, 255, 255, 0))",
          }}
        >
          <Sidebar />
          <Box>
            {allPlaylistFromApi[0] === undefined ||
            allPlaylistFromApi === null ? (
              <Typography
                variant="h4"
                color="white"
                sx={{ paddingTop: "10rem", fontFamily: "Poppins, sans-serif" }}
              >
                You have not created any playlist
              </Typography>
            ) : (
              <Typography
                variant="h4"
                className="playlistHeading"
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
                All Playlists
              </Typography>
            )}

            <Box>
              <CreatePlaylistButton onClick={showDialog}>
                + Create Playlist
              </CreatePlaylistButton>
            </Box>
            {allPlaylistFromApi.map((item) => {
              return (
                <Box className="playlist" key={item._id}>
                  <NavLink
                    to="/videosInPlaylistPage"
                    onClick={() => {
                      setVideosInPlaylist(item.videos);
                    }}
                  >
                    <PlaylistContainer className="PlaylistContainer">
                      <Typography variant="h6">{item.title}</Typography>
                    </PlaylistContainer>
                    <Typography variant="h6" className="play">
                      <i className="fas fa-play"></i>play
                    </Typography>
                    <Box className="playlistIcon">
                      <PlaylistPlayIcon
                        style={{ fontSize: "4rem", color: "white" }}
                      />
                    </Box>
                  </NavLink>

                  <DeleteIcon
                    onClick={() => deletePlaylist(item)}
                    className="playlistDustbin"
                    style={{ fontSize: "2rem" }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box>
          <img
            style={{
              height: "20rem",
              position: "absolute",
              left: "0",
              bottom: "0",
            }}
            src={playlistHero}
            alt="playlistImg"
          />
        </Box>
      </Box>

      <Box
        className={display ? "modal dialog-box-true" : "modal dialog-box-false"}
        sx={{ border: "5px solid green" }}
      >
        <Box className="modal-navbar">
          <span onClick={hideDialog}>
            <i className="fas fa-times"></i>
          </span>
        </Box>
        <Box className="modal-footer flex-row"></Box>
        <Box className="create-newPlaylist-wrapper mt-2">
          <TextField
            onChange={(e) => playlistTitleHandler(e)}
            className="create-newPlaylist"
            type="text"
            id="newPlaylist"
            name="newPlaylist"
            placeholder="Enter new playlist name"
            value={playlistNameValue}
            fullWidth
          />
          <br />
          <Button
            onClick={() => createNewPlaylistHandler(undefined, playlistTitle)}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Toast text={toastState} />
    </>
  );
}

export { Playlist };
