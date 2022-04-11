import React, { useState } from "react";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { addToList } from "../../images/allImages";

function SingleVideo() {
  const { singleVideo, setdisplay } = useSingleVideo();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const splittedvideoUrl = singleVideo.videoUrl.split("=");
  const videoUrl = `https://www.youtube.com/embed/${splittedvideoUrl[1]}`;

  const likeHandler = () => {
    if(liked===false){
      setLiked((prev) => !prev);
      setDisliked(false)
    }
    else{
      setLiked((prev) => !prev);
    }
    
  };

  const dislikeHandler = () => {
    if(disliked===false){
      setDisliked((prev) => !prev);
      setLiked(false)
    }
    else{
      setDisliked((prev) => !prev);
    }
  };

  const showDialog = () => {
    setdisplay(true)
  }
  return (
    <div className="single-video">
      <div className="video-player-wrapper">
        <iframe src={videoUrl}></iframe>
      </div>
      <div>
        <div className="video-options">
          <span onClick={() => likeHandler()}>
            <i
              className={
                liked
                  ? "fas fa-thumbs-up selectedTrue"
                  : "fas fa-thumbs-up selectedFalse"
              }
            ></i>
          </span>
          <span onClick={() => dislikeHandler()}>
            <i
              className={
                disliked
                  ? "fas fa-thumbs-down selectedTrue"
                  : "fas fa-thumbs-down selectedFalse"
              }
            ></i>
          </span>
          <span>
            <img src={addToList} onClick={showDialog} />
          </span>
          <span>
            <i className="fas fa-ellipsis-v fa-x"></i>
          </span>
        </div>

        <div className="flex-row des-container">
          <img
            className="single-video-logo"
            src={singleVideo.logoUrl}
            alt="logo"
          />
          <h4 className="single-video-title">{singleVideo.title} </h4>
        </div>
      </div>
    </div>
  );
}

export { SingleVideo };
