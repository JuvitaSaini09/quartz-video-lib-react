import React, { useState, useEffect } from "react";
import { useDisLikedVideoContext } from "../../context/allContext";
import { useHistoryVideoContext } from "../../context/historyVideoContext/historyVideoContext";
import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { addToList } from "../../images/allImages";
import {
  postLikedVideoApi,
  deleteLikedVideoApi,
  addToHistoryApi,
} from "../../util/apiCall";

function SingleVideo() {
  // set-token in local storage
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM"
  );
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
    singleVideo
  ]);

  return (
    <div className="single-video">
      <div className="video-player-wrapper">
        <iframe src={videoUrl} title={singleVideo.videoId}>
          {" "}
        </iframe>{" "}
      </div>{" "}
      <div>
        <div className="video-options">
          <span onClick={likeHandler}>
            {" "}
            {isItemInLIkedVideos ? (
              <i className="fas fa-thumbs-up selectedTrue"> </i>
            ) : (
              <i className="fas fa-thumbs-up selectedFalse"></i>
            )}{" "}
          </span>
          <span onClick={dislikeHandler}>
            {" "}
            {disliked ? (
              <i className="fas fa-thumbs-down selectedTrue"> </i>
            ) : (
              <i className="fas fa-thumbs-down selectedFalse"></i>
            )}{" "}
          </span>{" "}
          <span>
            <img src={addToList} onClick={showDialog} alt="addToList" />
          </span>{" "}
          <span>
            <i className="fas fa-ellipsis-v fa-x"> </i>{" "}
          </span>{" "}
        </div>
        <div className="flex-row des-container">
          <img
            className="single-video-logo"
            src={singleVideo.logoUrl}
            alt="logo"
          />
          <h4 className="single-video-title"> {singleVideo.title} </h4>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export { SingleVideo };
