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
import {
  postLikedVideoApi,
  deleteLikedVideoApi,
  addToHistoryApi,
} from "../../util/apiCall";
import { useToast } from "../../context/toastContext/toastContext";
import { styled, useTheme } from "@mui/material/styles";

const SingleVideoContainer = styled("div")(({ theme }) => ({
  border: "2px solid red",
}));

const VideoPlayerWrapper = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  [theme.breakpoints.down("lg")]: {
    width: "100vw",
    height: "70vh",
  },
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    height: "40vh",
  },
  // [theme.breakpoints.down("sm")]: {
  //   width: "400px",
  //   height: "225px",
  // },

  border: "2px solid orange",
}));

const VideoOptions = styled("div")({
  backgroundColor: "var(--pink-dark)",
  paddingTop: "10px",
  paddingRight: "10px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "3rem",
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
  backgroundColor: "var(--pink-dark)",
  display: "flex",
  flexDirection: "row",
  paddingRight: "2rem",
});

const SingleVideoLogo = styled("img")({
  height: "4rem",
  width: "4rem",
  borderRadius: "50%",
});

const SingleVideoTitle = styled("h4")({
  textAlign: "left",
  marginLeft: "1rem",
  marginTop: "8px",
});

const StyledIframe = styled("iframe")({
  width: "100%",
  height: "100%",
});

function SingleVideo() {
  // const { token } = useAuth();
  const token = true;
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
        <StyledIframe src={videoUrl} title={singleVideo.videoId}></StyledIframe>

        {/* <VideoPlayer videoUrl={videoUrl} videoId={singleVideo.videoId} /> */}
      </VideoPlayerWrapper>{" "}
      <div>
        <VideoOptions>
          <span onClick={token ? likeHandler : null}>
            {" "}
            {token ? (
              isItemInLIkedVideos ? (
                <StyledIcon className="fas fa-thumbs-up selectedTrue">
                  {" "}
                </StyledIcon>
              ) : (
                <StyledIcon className="fas fa-thumbs-up selectedFalse"></StyledIcon>
              )
            ) : (
              <StyledIcon
                className="fas fa-thumbs-up selectedFalse"
                onClick={() => {
                  toastDispatch({ type: "Login for like" });
                  setToast(true);
                }}
              ></StyledIcon>
            )}{" "}
          </span>
          <span onClick={token ? dislikeHandler : null}>
            {" "}
            {token ? (
              disliked ? (
                <StyledIcon className="fas fa-thumbs-down selectedTrue">
                  {" "}
                </StyledIcon>
              ) : (
                <StyledIcon className="fas fa-thumbs-down selectedFalse"></StyledIcon>
              )
            ) : (
              <StyledIcon
                className="fas fa-thumbs-down selectedFalse"
                onClick={() => {
                  toastDispatch({ type: "Login for dislike" });
                  setToast(true);
                }}
              ></StyledIcon>
            )}{" "}
          </span>{" "}
          <span>
            <StyledImg
              src={addToList}
              onClick={token ? showDialog : null}
              alt="addToList"
            />
          </span>{" "}
          <span>
            <StyledIcon className="fas fa-ellipsis-v fa-x"> </StyledIcon>{" "}
          </span>{" "}
        </VideoOptions>
        <DescriptionContainer>
          <SingleVideoLogo src={singleVideo.logoUrl} alt="logo" />
          <SingleVideoTitle> {singleVideo.title} </SingleVideoTitle>{" "}
        </DescriptionContainer>{" "}
      </div>{" "}
    </SingleVideoContainer>
  );
}

export { SingleVideo };
