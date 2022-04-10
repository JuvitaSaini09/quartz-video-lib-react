import React, { useState } from "react";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { addToList } from "../../images/allImages";
import { PlaylistModal } from "../allComponents";

function SingleVideo() {
  const { singleVideo } = useSingleVideo();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const splittedvideoUrl = singleVideo.videoUrl.split("=");
  const videoUrl = `https://www.youtube.com/embed/${splittedvideoUrl[1]}`;

  const likeHandler = (event) => {
    if(liked===false){
      setLiked((prev) => !prev);
      setDisliked(false)
    }
    else{
      setLiked((prev) => !prev);
    }
    
  };

  const dislikeHandler = (event) => {
    if(disliked===false){
      setDisliked((prev) => !prev);
      setLiked(false)
    }
    else{
      setDisliked((prev) => !prev);
    }
  };
  return (
    <div className="single-video">
      <div className="video-player-wrapper">
        <iframe src={videoUrl}></iframe>
      </div>
      <div>
        <div className="video-options">
          <span onClick={(e) => likeHandler(e)}>
            <i
              className={
                liked
                  ? "fas fa-thumbs-up selectedTrue"
                  : "fas fa-thumbs-up selectedFalse"
              }
            ></i>
          </span>
          <span onClick={(e) => dislikeHandler(e)}>
            <i
              className={
                disliked
                  ? "fas fa-thumbs-down selectedTrue"
                  : "fas fa-thumbs-down selectedFalse"
              }
            ></i>
          </span>
          <span>
            <img src={addToList} />
          </span>
          <span>
            <i className="fas fa-ellipsis-v fa-x"></i>
          </span>
          <PlaylistModal />
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
