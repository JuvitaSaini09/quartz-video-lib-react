import React from "react";
import { useApi } from "../../context/apiContext/api";
import { Link } from "react-router-dom";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";

function VideoListing() {
  const { apiVideos } = useApi();
  const { setSingleVideo } = useSingleVideo();

  return (
    <div className="videosListing">
      {apiVideos.map((item) => {
        return (
              <div className="video-card" key={item.id}>
              <Link onClick={() => setSingleVideo(item)} to="/video">
                <img
                  className="img-thumbnail"
                  src={item.thumbnailUrl}
                  alt={item.title}
                />
                <h1 className="play">
                  <i className="fas fa-play"></i>play
                </h1>
                  </Link>
                <div className="video-description">
                  <img className="video-logo" src={item.logoUrl} alt="logo" />
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
        );
      })}
    </div>
  );
}

export { VideoListing };
