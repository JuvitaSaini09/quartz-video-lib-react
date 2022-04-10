import React from "react";
import {
  Navbar,
  Sidebar,
  SingleVideo,
  VideoRec,
} from "../../components/allComponents";
import "./videoo.css";

function Video() {
  return (
    <>
      <Navbar />
      <section className="main-page-video">
        <Sidebar />
        <div className="col2 video-container">
          <SingleVideo />
          <VideoRec />
        </div>
      </section>
    </>
  );
}

export { Video };
