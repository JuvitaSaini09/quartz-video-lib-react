import React from "react";
import { useHistoryVideoContext } from "../../context/historyVideoContext/historyVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { Link } from "react-router-dom";
import {
  EmptyPage,
  Navbar,
  Sidebar,
} from "../../components/allComponents";
import "./historyVideoPage.css";
import {
  deleteHistoryAllVideoApi,
  deleteHistorySingleVideoApi,
} from "../../util/apiCall";
function HistoryVideoPage() {
  const { setSingleVideo } = useSingleVideo();
  const { historyVideoState, historyVideoDispatch } = useHistoryVideoContext();

  //function for deleting single video
  const deleteVideoFromHistoryHandler = (video) => {
    deleteHistorySingleVideoApi(video, historyVideoDispatch);
  };

  //function for deleting All video
  const clearHistoryHandler = (video) => {
    deleteHistoryAllVideoApi(historyVideoDispatch);
  };
  return (
    <>
      <Navbar />
      <section className="main-page history-page">
        <Sidebar />
        <div className="col2">
          {historyVideoState[0] !== undefined && (
            <button
              className="clearHistoryBtn"
              onClick={() => clearHistoryHandler()}
            >
              CLEAR ALL HISTORY
            </button>
          )}
          {/* <---------History Videos-------------> */}
          <div className="videosListing mt-3">
            {historyVideoState === undefined ||
            historyVideoState[0] === undefined ? (
              <EmptyPage text="Empty History" />
            ) : (
              <>
                {historyVideoState.map((item) => {
                  return (
                    <div className="video-card" key={item._id}>
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
                      <span
                        onClick={() => deleteVideoFromHistoryHandler(item)}
                        className="historyDustbin"
                      >
                        <i className="fas fa-trash-alt fa-2x"></i>
                      </span>
                      <div className="video-description">
                        <img
                          className="video-logo"
                          src={item.logoUrl}
                          alt="logo"
                        />
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
              </>
            )}
          </div>
          {/* <---------History Videos-------------> */}
        </div>
      </section>
    </>
  );
}

export { HistoryVideoPage };
