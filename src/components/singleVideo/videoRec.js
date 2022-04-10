import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../context/apiContext/api";
import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext'

function VideoRec() {
  const { apiVideos } = useApi();
  const {singleVideo,setSingleVideo}=useSingleVideo();
  const recommededVideos=apiVideos.filter(item=>item.categoryName===singleVideo.categoryName)

  return (
    <div className="video-recommendation">
      {recommededVideos.map((item) => {
        return (
          <>
           <Link onClick={() => setSingleVideo(item)} to="/video">
             
            <div className="video-card">
              <img
                className="img-thumbnail"
                src={item.thumbnailUrl}
                alt={item.title}
              />
              <h1 className="play">
                <i className="fas fa-play"></i>play
              </h1>
              <div className="video-description">
                <img className="video-logo" src={item.logoUrl} alt="log" />
                <h4 className="video-title">
                  {item.title}
                  <br />
                  <span style={{ fontWeight: "lighter" }}>
                    {item.categoryName}
                  </span>
                </h4>
                <div className="video-setting">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>
            </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export { VideoRec };
