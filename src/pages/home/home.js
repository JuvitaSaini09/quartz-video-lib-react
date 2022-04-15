import React from "react";
// import { videos } from '../../backend/db/products';
import {
  CategoryButtons,
  Navbar,
  Sidebar,
  VideoListing,
} from "../../components/allComponents";
import "./home.css";
import "../../css/videoCard.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="main-page home-page">
        <Sidebar />
        <div className="col2">
          <CategoryButtons />
          <VideoListing />
        </div>
      </section>
    </>
  );
}

export { Home };
