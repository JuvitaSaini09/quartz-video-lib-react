import React, { useState, useEffect } from "react";
import { useDisLikedVideoContext } from "../../context/disLikedVideoContext/disLikedVideoContext";
import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { addToList } from "../../images/allImages";
import axios from "axios";

function SingleVideo() {
  const { likedVideoDispatch, likedVideoState } = useLikedVideoContext();
  const { disLikedVideoState, setDisLikedVideoDispatch } =
    useDisLikedVideoContext();
  const { singleVideo, setdisplay } = useSingleVideo();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isItemInLIkedVideos, setIsItemInLIkedVideos] = useState(false);

  const splittedvideoUrl = singleVideo.videoUrl.split("=");
  const videoUrl = `https://www.youtube.com/embed/${splittedvideoUrl[1]}`;

  async function fetchData() {
    const encodedToken = localStorage.getItem("token");
    axios.defaults.headers.common["authorization"] = encodedToken;
    try {
      // const response = await axios.get(`/api/products/${singleVideo._id}`);
      const response = await axios({
        method: "get",
        url: `/api/products/${singleVideo._id}`,
        data: { singleVideo },
      });
      if (response.status === 200) {
        likedVideoDispatch({
          type: "like",
          payload: response.data.product,
        });
      }
      // saving the encodedToken in the localStorage
    } catch (error) {
      console.log(error);
    }
  }

  const likeHandler = () => {
    if (liked === false) {
      setLiked((prev) => !prev);
      fetchData(); //calling async function to get data form db
      setDisliked(false);
      setDisLikedVideoDispatch({
        type: "notDisliked",
        payload: singleVideo,
      });
    } else {
      setLiked((prev) => !prev);
      likedVideoDispatch({
        type: "unLike",
        payload: singleVideo,
      });
    }
  };

  const dislikeHandler = () => {
    if (disliked === false) {
      setDisliked((prev) => !prev);
      setLiked(false);
      likedVideoDispatch({
        type: "unLike",
        payload: singleVideo,
      });
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
    const isItemInLikedVideos = likedVideoState.find(
      (stateItem) => singleVideo._id === stateItem._id
    );
    if (isItemInLikedVideos) {
      setIsItemInLIkedVideos(true);
    } else {
      setIsItemInLIkedVideos(false);
      const isItemInDisLikedVideos = disLikedVideoState.find(
        (stateItem) => singleVideo._id === stateItem._id
      );
      isItemInDisLikedVideos ? setDisliked(true) : setDisliked(false);
    }
  }, [likedVideoState, singleVideo._id, disLikedVideoState]);

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
