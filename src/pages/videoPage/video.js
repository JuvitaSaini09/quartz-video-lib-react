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
import {Toast} from "../../components/allComponents";
import { useToast } from "../../context/toastContext/toastContext"

function Video() {
  const {display}=useSingleVideo();
  const { toastState } = useToast();
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
      {/*<------------- TOAST --------------> */}
      <Toast text={toastState} />
    </>
  );
}

export { Video };
