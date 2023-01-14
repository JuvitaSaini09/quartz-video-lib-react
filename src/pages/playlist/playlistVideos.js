import React from "react";
import { EmptyPage, Navbar, Sidebar } from "../../components/allComponents";
import { NavLink } from "react-router-dom";
import "../../css/videoCard.css";
import { useVideoOfPlaylist } from "../../context/playlist/videosInPlaylistContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import "./playlist.css";

function VideosInPlaylistPage() {
  const { videosInPlaylist } = useVideoOfPlaylist();
  const { setSingleVideo } = useSingleVideo();
  return (
    <>
      <Navbar />

      <section className="main-page playlist-page">
        <Sidebar />
        {/*----------------------------------------- */}
        <div className="col2">
          {videosInPlaylist[0] === undefined || videosInPlaylist === null ? (
            <EmptyPage text="Empty Playlist" />
          ) : (
            <h1 className="playlistHeading">Videos</h1>
          )}

          {/* Create playlist icon ----------> */}

          <div className="videosListing">
            {videosInPlaylist.map((item) => {
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
        </div>
        {/*----------------------------------------- */}
      </section>
    </>
  );
}

export { VideosInPlaylistPage };
