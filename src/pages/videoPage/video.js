import React from "react";
import {
  Navbar,
  PlaylistModal,
  Sidebar,
  SingleVideo,
  VideoRec,
} from "../../components/allComponents";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import "./videoo.css";

function Video() {
  const {display}=useSingleVideo();
  return (
    <>
     <div className={display ? "body-open-modal" : ""}>
     <Navbar />
      <section className="main-page-video">
        <Sidebar />
        <div className="col2 video-container">
          <SingleVideo />
          <VideoRec />
        </div>
      </section>
     </div>
      <PlaylistModal />
    </>
  );
}

export { Video };
