import React from "react";
import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { Link } from "react-router-dom";
import {
  EmptyPage,
  Navbar,
  Sidebar,
  Toast,
} from "../../components/allComponents";
import "./playlist.css";
import {
  createPlaylistApi,
  deletePlaylistApi,
} from "../../util/playlistApiCall";
import { useVideoOfPlaylist } from "../../context/playlist/videosInPlaylistContext";
import { useToast } from "../../context/toastContext/toastContext";

function Playlist() {
  const { setToast, toastState, toastDispatch } = useToast();
  const { playlistNameValue, setPlaylistNameValue } = usePlaylistVideoContext();
  const { setVideosInPlaylist } = useVideoOfPlaylist();
  const { display } = useSingleVideo();
  const { setdisplay } = useSingleVideo();

  const {
    allPlaylistFromApi,
    playlistTitle,
    setPlaylistTitle,
    playlistVideoDispatch,
  } = usePlaylistVideoContext();

  const showDialog = () => {
    setdisplay(true);
  };

  const hideDialog = () => {
    setdisplay(false);
  };
  const playlistTitleHandler = (event) => {
    setPlaylistTitle(event.target.value);
    setPlaylistNameValue(event.target.value);
  };

  //create new playlist handler
  const createNewPlaylistHandler = (video, playlistTitle) => {
    if (playlistTitle) {
      const isPlaylistNameAlreadyUsed = allPlaylistFromApi.filter(
        (e) => playlistTitle === e.title
      );
      if (isPlaylistNameAlreadyUsed[0] === undefined)
        createPlaylistApi(
          video,
          playlistTitle,
          playlistVideoDispatch,
          setToast,
          toastDispatch
        );
      else {
        //code to show toast here --->
        toastDispatch({ type: "PLAYLIST_ALREADY_EXIST" });
        setToast(true);
      }
    } else {
      //code to show toast here --->
      toastDispatch({ type: "ENTER_PLAYLIST_NAME" });
      setToast(true);
    }
    setPlaylistNameValue("");
    setPlaylistTitle("");
  };

  //delete playlist
  const deletePlaylist = (item) => {
    deletePlaylistApi(
      item._id,
      playlistVideoDispatch,
      setToast,
      toastDispatch
    );
  };

  return (
    <>
      <div className={display ? "body-open-modal" : ""}>
        <Navbar />
        <section className="main-page playlist-page">
          <Sidebar />
          <div className="col2">
            {/* <---------playlist Videos-------------> */}
            {allPlaylistFromApi[0] === undefined ||
            allPlaylistFromApi === null ? (
              <EmptyPage text="You have not created any playlist" />
            ) : (
              <h1 className="playlistHeading">All Playlists</h1>
            )}

            {/* Create playlist icon ----------> */}
            <div className="createPlaylist">
              <button onClick={showDialog}> + Create Playlist</button>
            </div>
            {allPlaylistFromApi.map((item) => {
              return (
                <div className="playlist">
                  <Link
                    to="/videosInPlaylistPage"
                    onClick={() => {
                      setVideosInPlaylist(item.videos);
                    }}
                  >
                    <div className="PlaylistContainer">
                      <h1>{item.title}</h1>
                    </div>
                    <h1 className="play">
                      <i className="fas fa-play"></i>play
                    </h1>
                    <div className="playlistIcon">
                      <span
                        className="iconify"
                        data-icon="carbon:playlist"
                      ></span>
                    </div>
                  </Link>

                  <span
                    onClick={() => deletePlaylist(item)}
                    className="playlistDustbin"
                  >
                    <i className="fas fa-trash-alt fa-2x"></i>
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      {/*------------ Playlist Modal -----------------> */}
      <div
        className={display ? "modal dialog-box-true" : "modal dialog-box-false"}
      >
        <div className="modal-navbar">
          <span onClick={hideDialog}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="modal-footer flex-row"></div>
        <div className="create-newPlaylist-wrapper mt-2">
          <input
            onChange={(e) => playlistTitleHandler(e)}
            className="create-newPlaylist"
            type="text"
            id="newPlaylist"
            name="newPlaylist"
            placeholder="Enter new playlist name"
            value={playlistNameValue}
          />
          <br />
          <button
            onClick={() => createNewPlaylistHandler(undefined, playlistTitle)}
          >
            Create
          </button>
        </div>
      </div>
      {/*------------ Playlist Modal -----------------> */}

      {/*<------------- TOAST --------------> */}
      <Toast text={toastState} />
    </>
  );
}

export { Playlist };
