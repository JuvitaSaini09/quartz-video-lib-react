import React from "react";
import { useLikedVideoContext } from "../../context/likedVideoContext/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { NavLink } from "react-router-dom";
import { EmptyPage, Navbar, Sidebar } from "../../components/allComponents";
import "./likedVideoPage.css"

function LikedVideoPage() {
  const { likedVideoState } = useLikedVideoContext();
  const { setSingleVideo } = useSingleVideo();
 
  return (
    <>
      <Navbar />
      <section className="main-page like-page">
        <Sidebar />
        <div className="col2">
          {/* <---------Liked Videos-------------> */}
          <div className="videosListing mt-3">
            {likedVideoState[0] === undefined ? <EmptyPage text="No Liked Video" /> :""}
            {likedVideoState.map((item) => {
              return (
                <div className="video-card" key={item._id}>
                  <NavLink onClick={() => setSingleVideo(item)} to="/video">
                    <img
                      className="img-thumbnail"
                      src={item.thumbnailUrl}
                      alt={item.title}
                    />
                    <h1 className="play">
                      <i className="fas fa-play"></i>play
                    </h1>
                  </NavLink>
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
          {/* <---------Liked Videos-------------> */}
        </div>
      </section>
    </>
  );
}

export { LikedVideoPage };
