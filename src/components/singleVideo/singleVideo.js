// import React, { useState, useEffect } from "react";
// import { useDisLikedVideoContext } from "../../context/disLikedVideoContext/disLikedVideoContext";
// import { useHistoryVideoContext } from "../../context/historyVideoContext/historyVideoContext";
// import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
// import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
// import { addToList } from "../../images/allImages";
// import { useAuth } from "../../context/authContext/AuthContext";
// import {
//   postLikedVideoApi,
//   deleteLikedVideoApi,
//   addToHistoryApi,
// } from "../../util/apiCall";
// import { useToast } from "../../context/toastContext/toastContext";

// function SingleVideo() {
//   // const { token } = useAuth();
//   const token=true;
//   const { toastDispatch, setToast } = useToast();
//   const { historyVideoState, historyVideoDispatch } = useHistoryVideoContext();
//   const { likedVideoDispatch, likedVideoState } = useLikedVideoContext();
//   const { disLikedVideoState, setDisLikedVideoDispatch } =
//     useDisLikedVideoContext();
//   const { singleVideo, setdisplay } = useSingleVideo();
//   const [liked, setLiked] = useState(false);
//   const [disliked, setDisliked] = useState(false);
//   const [isItemInLIkedVideos, setIsItemInLIkedVideos] = useState(false);

//   const splittedvideoUrl = singleVideo.videoUrl.split("=");
//   const videoUrl = `https://www.youtube.com/embed/${splittedvideoUrl[1]}?autoplay=1&&mute=1`;

//   //checks whether the present video is in likesVideos
//   const isItemInLikedVideos = likedVideoState.find(
//     (stateItem) => singleVideo._id === stateItem._id
//   );

//   //checks whether the present video is in HistoryVideos
//   const isItemInHistoryVideos = historyVideoState.find(
//     (stateItem) => singleVideo._id === stateItem._id
//   );

//   const likeHandler = () => {
//     if (liked === false) {
//       setLiked(true);
//       postLikedVideoApi(singleVideo, likedVideoDispatch); //calling async function to get data form db
//       setDisliked(false);
//       setDisLikedVideoDispatch({
//         type: "notDisliked",
//         payload: singleVideo,
//       });
//     } else {
//       setLiked(false);
//       deleteLikedVideoApi(singleVideo, likedVideoDispatch);
//     }
//   };

//   const dislikeHandler = () => {
//     if (disliked === false) {
//       setDisliked((prev) => !prev);
//       setLiked(false);

//       if (isItemInLikedVideos) {
//         deleteLikedVideoApi(singleVideo, likedVideoDispatch);
//       }
//       setDisLikedVideoDispatch({
//         type: "disLiked",
//         payload: singleVideo,
//       });
//     } else {
//       setDisliked((prev) => !prev);
//       setDisLikedVideoDispatch({
//         type: "notDisliked",
//         payload: singleVideo,
//       });
//     }
//   };

//   const showDialog = () => {
//     setdisplay(true);
//   };

//   useEffect(() => {
//     if (isItemInLikedVideos) {
//       setLiked(true);
//       setIsItemInLIkedVideos(true);
//     } else {
//       setLiked(false);
//       setIsItemInLIkedVideos(false);
//       const isItemInDisLikedVideos = disLikedVideoState.find(
//         (stateItem) => singleVideo._id === stateItem._id
//       );
//       isItemInDisLikedVideos ? setDisliked(true) : setDisliked(false);
//     }
//     if (isItemInHistoryVideos === undefined) {
//       addToHistoryApi(singleVideo, historyVideoDispatch);
//     }
//   }, [
//     likedVideoState,
//     singleVideo._id,
//     disLikedVideoState,
//     isItemInLikedVideos,
//     isItemInHistoryVideos,

//     historyVideoDispatch,
//     singleVideo,
//   ]);

//   return (
//     <div className="single-video" style={{border:"2px solid red"}}>
//       <div className="video-player-wrapper">
//         <iframe src={videoUrl} title={singleVideo.videoId}>
//           {" "}
//         </iframe>{" "}
//       </div>{" "}
//       <div>
//         <div className="video-options">
//           <span onClick={token ? likeHandler : null}>
//             {" "}
//             {token ? (
//               isItemInLIkedVideos ? (
//                 <i className="fas fa-thumbs-up selectedTrue"> </i>
//               ) : (
//                 <i className="fas fa-thumbs-up selectedFalse"></i>
//               )
//             ) : (
//               <i
//                 className="fas fa-thumbs-up selectedFalse"
//                 onClick={() => {
//                   toastDispatch({ type: "Login for like" });
//                   setToast(true);
//                 }}
//               ></i>
//             )}{" "}
//           </span>
//           <span onClick={token ? dislikeHandler : null}>
//             {" "}
//             {token ? (
//               disliked ? (
//                 <i className="fas fa-thumbs-down selectedTrue"> </i>
//               ) : (
//                 <i className="fas fa-thumbs-down selectedFalse"></i>
//               )
//             ) : (
//               <i
//                 className="fas fa-thumbs-down selectedFalse"
//                 onClick={() => {
//                   toastDispatch({ type: "Login for dislike" });
//                   setToast(true);
//                 }}
//               ></i>
//             )}{" "}
//           </span>{" "}
//           <span>
//             <img
//               src={addToList}
//               onClick={token ? showDialog : null}
//               alt="addToList"
//             />
//           </span>{" "}
//           <span>
//             <i className="fas fa-ellipsis-v fa-x"> </i>{" "}
//           </span>{" "}
//         </div>
//         <div className="flex-row des-container">
//           <img
//             className="single-video-logo"
//             src={singleVideo.logoUrl}
//             alt="logo"
//           />
//           <h4 className="single-video-title"> {singleVideo.title} </h4>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// }

// export { SingleVideo };

import React, { useState, useEffect } from "react";
import { useDisLikedVideoContext } from "../../context/disLikedVideoContext/disLikedVideoContext";
import { useHistoryVideoContext } from "../../context/historyVideoContext/historyVideoContext";
import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { addToList } from "../../images/allImages";
import { useAuth } from "../../context/authContext/AuthContext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  postLikedVideoApi,
  deleteLikedVideoApi,
  addToHistoryApi,
} from "../../util/apiCall";
import { useToast } from "../../context/toastContext/toastContext";
import { styled, useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt"; //not  disliked
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"; // disliked
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SingleVideoContainer = styled("div")(({ theme }) => ({}));
const VideoOptions = styled("div")({
  backgroundColor: "#08090b", //one
  // backgroundColor: "red",

  padding: "20px 20px 10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
});

const StyledImg = styled("img")({
  height: "2rem",
  width: "2rem",
  cursor: "pointer",
});

const StyledIcon = styled("i")({
  fontWeight: "16px",
  fontSize: "1.7rem",
  cursor: "pointer",
  "&.fa-thumbs-up, &.fa-thumbs-down": {
    color: "white",
  },
  "&.selectedTrue": {
    color: "black",
  },
  "&.selectedFalse": {
    color: "white",
  },
});

const DescriptionContainer = styled("div")({
  backgroundColor: "#08090b", //two
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const SingleVideoLogo = styled("img")({
  height: "4rem",
  width: "4rem",
  borderRadius: "50%",
});

const SingleVideoTitle = styled("h4")(({ theme }) => ({
  textAlign: "left",
  maxWidth: "400px",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
  fontSize: "14px",
  [theme.breakpoints.up("xs")]: {
    border: "2px solid red",
    maxWidth: "300px",
    border: "2px solid red",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    maxWidth: "400px",
    border: "2px solid green",
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: "500px",
    fontSize: "18px",
    border: "2px solid yellow",
  },
}));

const VideoPlayerWrapper = styled("div")(({ theme }) => ({
  height: "90vh",
  [theme.breakpoints.down("lg")]: {
    height: "90vh",
  },
  [theme.breakpoints.down("md")]: {
    height: "70vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

const StyledIframe = styled("iframe")({
  width: "100%",
  height: "100%",
});

const commonFontSize = (theme) => ({
  color: "var(--light-yellow)",
  // [theme.breakpoints.up("xs")]: {
  //   fontSize: "28px",
  // },
  // [theme.breakpoints.up("sm")]: {
  //   fontSize: "36px",
  // },
});

const commonFontSize2 = {
  fontSize: "33px",
};
const CustomLikedIcon = styled(ThumbUpIcon)({
  color: "var(--light-yellow2)",
  ...commonFontSize2,
});

const CustomNeutralThumbIcon = styled(ThumbUpOffAltIcon)({
  color: "var(--light-yellow)",
  ...commonFontSize,
});

const CustomNotDislikedIcon = styled(ThumbDownOffAltIcon)({
  color: "var(--light-yellow)",
  ...commonFontSize,
});

const CustomDislikedIcon = styled(ThumbDownAltIcon)({
  color: "var(--light-yellow2)",
  ...commonFontSize2,
});

const CustomPlaylistAddIcon = styled(PlaylistAddIcon)({
  color: "var(--light-yellow)",
  fontSize: "44px",
});

const CustomMoreVertIcon = styled(MoreVertIcon)({
  color: "var(--light-yellow)",
  fontSize: "40px",
});

function SingleVideo() {
  const { token } = useAuth();
  // const token = true;
  const { toastDispatch, setToast } = useToast();
  const { historyVideoState, historyVideoDispatch } = useHistoryVideoContext();
  const { likedVideoDispatch, likedVideoState } = useLikedVideoContext();
  const { disLikedVideoState, setDisLikedVideoDispatch } =
    useDisLikedVideoContext();
  const { singleVideo, setdisplay } = useSingleVideo();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isItemInLIkedVideos, setIsItemInLIkedVideos] = useState(false);

  const splittedvideoUrl = singleVideo.videoUrl.split("=");
  const videoUrl = `https://www.youtube.com/embed/${splittedvideoUrl[1]}?autoplay=1&&mute=1`;

  //checks whether the present video is in likesVideos
  const isItemInLikedVideos = likedVideoState.find(
    (stateItem) => singleVideo._id === stateItem._id
  );

  //checks whether the present video is in HistoryVideos
  const isItemInHistoryVideos = historyVideoState.find(
    (stateItem) => singleVideo._id === stateItem._id
  );

  const likeHandler = () => {
    console.log("likeHandler");
    if (liked === false) {
      setLiked(true);
      postLikedVideoApi(singleVideo, likedVideoDispatch); //calling async function to get data form db
      setDisliked(false);
      setDisLikedVideoDispatch({
        type: "notDisliked",
        payload: singleVideo,
      });
    } else {
      setLiked(false);
      deleteLikedVideoApi(singleVideo, likedVideoDispatch);
    }
  };

  const dislikeHandler = () => {
    console.log("dilikeHandler");

    if (disliked === false) {
      setDisliked((prev) => !prev);
      setLiked(false);

      if (isItemInLikedVideos) {
        deleteLikedVideoApi(singleVideo, likedVideoDispatch);
      }
      setDisLikedVideoDispatch({
        type: "disLiked",
        payload: singleVideo,
      });
    } else {
      setDisliked((prev) => !prev);
      setDisLikedVideoDispatch({
        type: "notDisliked",
        payload: singleVideo,
      });
    }
  };

  const showDialog = () => {
    setdisplay(true);
  };

  useEffect(() => {
    if (isItemInLikedVideos) {
      setLiked(true);
      setIsItemInLIkedVideos(true);
    } else {
      setLiked(false);
      setIsItemInLIkedVideos(false);
      const isItemInDisLikedVideos = disLikedVideoState.find(
        (stateItem) => singleVideo._id === stateItem._id
      );
      isItemInDisLikedVideos ? setDisliked(true) : setDisliked(false);
    }
    if (isItemInHistoryVideos === undefined) {
      addToHistoryApi(singleVideo, historyVideoDispatch);
    }
  }, [
    likedVideoState,
    singleVideo._id,
    disLikedVideoState,
    isItemInLikedVideos,
    isItemInHistoryVideos,
    historyVideoDispatch,
    singleVideo,
  ]);

  return (
    <SingleVideoContainer>
      <VideoPlayerWrapper>
        <StyledIframe
          sx={{ border: "none" }}
          src={videoUrl}
          title={singleVideo.videoId}
        ></StyledIframe>
      </VideoPlayerWrapper>
      <div>
        <VideoOptions>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <DescriptionContainer>
              <PlayCircleIcon
                sx={{
                  color: "var(--light-yellow)",
                  fontSize: {
                    xs: "24px",
                    sm: "36px",
                  },
                }}
              />
              <SingleVideoTitle>{singleVideo.title}</SingleVideoTitle>{" "}
            </DescriptionContainer>
          </Box>
          <Box sx={{ border: "2px solid red" }}>
            <IconButton onClick={token ? likeHandler : null}>
              {token ? (
                isItemInLIkedVideos ? (
                  <CustomLikedIcon
                    onClick={() => {
                      toastDispatch({ type: "Login for like" });
                      setToast(true);
                    }}
                  />
                ) : (
                  <CustomNeutralThumbIcon />
                )
              ) : (
                <CustomNeutralThumbIcon />
              )}{" "}
            </IconButton>
            <IconButton onClick={token ? dislikeHandler : null}>
              {" "}
              {token ? (
                disliked ? (
                  <CustomDislikedIcon />
                ) : (
                  <CustomNotDislikedIcon />
                )
              ) : (
                <CustomNotDislikedIcon
                  onClick={() => {
                    toastDispatch({ type: "Login for dislike" });
                    setToast(true);
                  }}
                />
              )}{" "}
            </IconButton>{" "}
            <IconButton onClick={token ? showDialog : null}>
              <CustomPlaylistAddIcon />
            </IconButton>
            <span></span>{" "}
            <IconButton>
              <CustomMoreVertIcon />
            </IconButton>
          </Box>
        </VideoOptions>
      </div>{" "}
    </SingleVideoContainer>
  );
}

export { SingleVideo };
// #08090b
