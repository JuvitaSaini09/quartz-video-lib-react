// import React, { useState } from "react";
// import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
// import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
// import { useToast } from "../../context/toastContext/toastContext";
// import { useWatchLaterCheckbox } from "../../context/watchLaterContext/watchLaterContext";
// import {
//   addVideoToPlaylistApi,
//   createPlaylistApi,
//   deleteVideoFromPlaylistApi,
// } from "../../util/playlistApiCall";
// import {
//   addToWatchLater,
//   removeFromWatchLater,
// } from "../../util/watchLaterApi";
// import { Toast } from "../allComponents";
// import "./playlistModal.css";
// function PlaylistModal() {
//   const {
//     videosInPlaylist,
//     setwatchLaterCheckbox,
//     setWatchLaterCheckboxDisptach,
//   } = useWatchLaterCheckbox();
//   const { setToast, toastState, toastDispatch } = useToast();
//   const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
//   const { setTrackVideoAddedRemoved } = usePlaylistVideoContext();
//   const [isCreatePlaylistClicked, setIsCreatePlaylistClicked] = useState(false);
//   const { display, setdisplay, singleVideo } = useSingleVideo();
//   const {
//     playlistTitle,
//     setPlaylistTitle,
//     playlistVideoDispatch,
//     allPlaylistFromApi,
//   } = usePlaylistVideoContext();
//   const hideDialog = () => {
//     setdisplay(false);
//     setIsCreatePlaylistClicked(false);
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

//   const playlistTitleHandler = (event) => {
//     setPlaylistTitle(event.target.value);
//     setPlaylistNameValue(event.target.value);
//   };

//   const addRemoveVideoFromPlaylist = (isVideoInPlaylist, currentPlaylist) => {
//     if (isVideoInPlaylist[0] === undefined) {
//       //call a function which will add singleVideo to the playlist
//       addVideoToPlaylistApi(
//         singleVideo,
//         currentPlaylist._id,
//         setToast,
//         toastDispatch
//       );
//     } else {
//       // call a fucntion to delete a video ="singleVideo" Object from the" playlist" array of objects
//       deleteVideoFromPlaylistApi(
//         singleVideo,
//         currentPlaylist._id,
//         singleVideo._id,
//         setToast,
//         toastDispatch
//       );
//     }
//     setTrackVideoAddedRemoved((prev) => !prev);
//   };

//   //check whether video is in watchLater
//   const isVideoInWatchLater = videosInPlaylist.filter(
//     (element) => element._id === singleVideo._id
//   );

//   const watchLaterHandler = () => {
//     if (isVideoInWatchLater[0] === undefined) {
//       addToWatchLater(
//         singleVideo,
//         setWatchLaterCheckboxDisptach,
//         toastDispatch,
//         setToast
//       );
//     } else {
//       removeFromWatchLater(
//         singleVideo,
//         setWatchLaterCheckboxDisptach,
//         toastDispatch,
//         setToast
//       );
//     }
//     setwatchLaterCheckbox((prev) => !prev);
//   };

//   return (
//     <>
//       <div
//         className={!display ? "modal dialog-box-true" : "modal dialog-box-false"}
//       >
//         <div className="modal-navbar" style={{border:"2px solid red"}}>
//           <p>Add To .. </p>
//           <span onClick={hideDialog}>
//             <i className="fas fa-times"></i>
//           </span>
//         </div>
//         <div className="list-of-playlist flex-column">
//           <ul style={{ textAlign: "left" }}>
//             <li onClick={() => watchLaterHandler(singleVideo)}>
//               <input
//                 type="checkbox"
//                 id="watchLater"
//                 name="watchLater"
//                 checked={isVideoInWatchLater[0] ? true : false}
//                 onChange={(e) =>e.target.value}
//                 value={isVideoInWatchLater[0] ? true : false}
//               />
//               <label htmlFor="watchLater">Watch Later</label>
//             </li>
//             {/*-----------List of playlist to be checked--------------  */}
//             {allPlaylistFromApi.map((item) => {
//               const isVideoInCurrentPlaylist = item.videos.filter(
//                 (element) => element._id === singleVideo._id
//               );
//               return (
//                 <li
//                   key={item._id}
//                   onClick={() =>
//                     addRemoveVideoFromPlaylist(isVideoInCurrentPlaylist, item)
//                   }
//                 >
//                   <input
//                     type="checkbox"
//                     id={item.title}
//                     name={item.title}
//                     checked={isVideoInCurrentPlaylist[0] ? true : false}
//                     onChange={(e) => e.target.value}
//                     value={isVideoInCurrentPlaylist[0] ? true : false}
//                   />
//                   <label htmlFor={item.title}>{item.title}</label>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="modal-footer flex-row">
//           <p
//             onClick={() => {
//               setIsCreatePlaylistClicked(true);
//             }}
//             className="create-playlist"
//           >
//             <i className="fas fa-plus"></i> Create new playlist
//           </p>
//         </div>
//         <div
//           className={
//             isCreatePlaylistClicked
//               ? "create-newPlaylist-wrapper dialog-box-true"
//               : "create-newPlaylist-wrapper dialog-box-false"
//           }
//         >
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
//             onClick={() => createNewPlaylistHandler(singleVideo, playlistTitle)}
//           >
//             Create
//           </button>
//         </div>
//       </div>

//       {/*<------------- TOAST --------------> */}
//       <Toast text={toastState} />
//     </>
//   );
// }

// export { PlaylistModal };

import React, { useState } from "react";
import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { useToast } from "../../context/toastContext/toastContext";
import { useWatchLaterCheckbox } from "../../context/watchLaterContext/watchLaterContext";
import {
  addVideoToPlaylistApi,
  createPlaylistApi,
  deleteVideoFromPlaylistApi,
} from "../../util/playlistApiCall";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../util/watchLaterApi";
import { Toast } from "../allComponents";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  IconButton,
  List,
  ListItem,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#121212",
    color: "white",
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const CreatePlaylistButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",
  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
}));

function PlaylistModal() {
  const {
    videosInPlaylist,
    setwatchLaterCheckbox,
    setWatchLaterCheckboxDisptach,
  } = useWatchLaterCheckbox();
  const { setToast, toastState, toastDispatch } = useToast();
  const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
  const { setTrackVideoAddedRemoved } = usePlaylistVideoContext();
  const [isCreatePlaylistClicked, setIsCreatePlaylistClicked] = useState(false);
  const { display, setdisplay, singleVideo } = useSingleVideo();
  const {
    playlistTitle,
    setPlaylistTitle,
    playlistVideoDispatch,
    allPlaylistFromApi,
  } = usePlaylistVideoContext();

  // const display=true
  const hideDialog = () => {
    setdisplay(false);
    setIsCreatePlaylistClicked(false);
  };

  //create new playlist handler
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
        //code to show toast here --->
        toastDispatch({ type: "PLAYLIST_ALREADY_EXIST" });
        setToast(true);
      }
    } else {
      //code to show toast here --->
      toastDispatch({ type: "ENTER_PLAYLIST_NAME" });
      setToast(true);
    }
    setPlaylistNameValue("");
    setPlaylistTitle("");
  };

  const playlistTitleHandler = (event) => {
    setPlaylistTitle(event.target.value);
    setPlaylistNameValue(event.target.value);
  };

  const addRemoveVideoFromPlaylist = (isVideoInPlaylist, currentPlaylist) => {
    if (isVideoInPlaylist[0] === undefined) {
      //call a function which will add singleVideo to the playlist
      addVideoToPlaylistApi(
        singleVideo,
        currentPlaylist._id,
        setToast,
        toastDispatch
      );
    } else {
      // call a fucntion to delete a video ="singleVideo" Object from the" playlist" array of objects
      deleteVideoFromPlaylistApi(
        singleVideo,
        currentPlaylist._id,
        singleVideo._id,
        setToast,
        toastDispatch
      );
    }
    setTrackVideoAddedRemoved((prev) => !prev);
  };

  //check whether video is in watchLater
  const isVideoInWatchLater = videosInPlaylist.filter(
    (element) => element._id === singleVideo._id
  );

  const watchLaterHandler = () => {
    if (isVideoInWatchLater[0] === undefined) {
      addToWatchLater(
        singleVideo,
        setWatchLaterCheckboxDisptach,
        toastDispatch,
        setToast
      );
    } else {
      removeFromWatchLater(
        singleVideo,
        setWatchLaterCheckboxDisptach,
        toastDispatch,
        setToast
      );
    }
    setwatchLaterCheckbox((prev) => !prev);
  };

  return (
    <>
      <StyledDialog open={display} onClose={hideDialog} fullWidth maxWidth="xs">
        <StyledDialogTitle>
          Add To...
          <IconButton onClick={hideDialog} size="small" sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
        <DialogContent>
          <List>
            <ListItem disablePadding>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isVideoInWatchLater[0] ? true : false}
                    onChange={() => watchLaterHandler(singleVideo)}
                  />
                }
                label="Watch Later"
              />
            </ListItem>
            {allPlaylistFromApi.map((item) => {
              const isVideoInCurrentPlaylist = item.videos.filter(
                (element) => element._id === singleVideo._id
              );
              return (
                <ListItem key={item._id} disablePadding>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isVideoInCurrentPlaylist[0] ? true : false}
                        onChange={() =>
                          addRemoveVideoFromPlaylist(
                            isVideoInCurrentPlaylist,
                            item
                          )
                        }
                      />
                    }
                    label={item.title}
                  />
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            startIcon={<AddIcon />}
            onClick={() => setIsCreatePlaylistClicked(true)}
            sx={{ color: "white" }}
          >
            Create new playlist
          </Button>
        </DialogActions>
        {isCreatePlaylistClicked && (
          <DialogContent>
            <StyledTextField
              autoFocus
              margin="dense"
              id="newPlaylist"
              label="Enter new playlist name"
              type="text"
              fullWidth
              variant="outlined"
              value={playlistNameValue}
              onChange={(e) => playlistTitleHandler(e)}
            />
            <CreatePlaylistButton
              onClick={() =>
                createNewPlaylistHandler(singleVideo, playlistTitle)
              }
              fullWidth
            >
              Create
            </CreatePlaylistButton>
          </DialogContent>
        )}
      </StyledDialog>

      <Toast text={toastState} />
    </>
  );
}

export { PlaylistModal };
