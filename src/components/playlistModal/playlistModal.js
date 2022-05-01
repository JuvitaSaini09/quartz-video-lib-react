import React, { useState } from "react";
import { usePlaylistVideoContext } from "../../context/playlist/playlistContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { useToast } from "../../context/toastContext/toastContext";
import {
  addVideoToPlaylistApi,
  createPlaylistApi,
  deleteVideoFromPlaylistApi,
} from "../../util/playlistApiCall";
import { Toast } from "../allComponents";
import "./playlistModal.css";

function PlaylistModal() {
  const {setToggle,toastState,toastDispatch}=useToast();
  const {playlistNameValue,setPlaylistNameValue}=usePlaylistVideoContext();
  const { setTrackVideoAddedRemoved } = usePlaylistVideoContext();
  const [isCreatePlaylistClicked, setIsCreatePlaylistClicked] = useState(false);
  const { display, setdisplay, singleVideo } = useSingleVideo();
  const {
    playlistTitle,
    setPlaylistTitle,
    playlistVideoDispatch,
    allPlaylistFromApi,
  } = usePlaylistVideoContext();
  const hideDialog = () => {
    setdisplay(false);
    setIsCreatePlaylistClicked(false);
  };

  //create new playlist handler
  const createNewPlaylistHandler = (video, playlistTitle) => {
    if (playlistTitle){
      const isPlaylistNameAlreadyUsed=allPlaylistFromApi.filter(e=>playlistTitle===e.title)
      if(isPlaylistNameAlreadyUsed[0]===undefined)
      createPlaylistApi(video, playlistTitle, playlistVideoDispatch,setToggle,toastDispatch);
      else{
        //code to show toast here --->
      toastDispatch({type: "PLAYLIST_ALREADY_EXIST"})
      setToggle(true);
      }
    }
    else {
      //code to show toast here --->
      toastDispatch({type: "ENTER_PLAYLIST_NAME"})
      setToggle(true);
    }
    setPlaylistNameValue('')
    setPlaylistTitle('')
  };

  const playlistTitleHandler = (event) => {
    setPlaylistTitle(event.target.value);
    setPlaylistNameValue(event.target.value)
  };

  const addRemoveVideoFromPlaylist = (isVideoInPlaylist, currentPlaylist) => {
    if (isVideoInPlaylist[0] === undefined) {
      //call a function which will add singleVideo to the playlist
      addVideoToPlaylistApi(
        singleVideo,
        currentPlaylist._id,
        playlistVideoDispatch,setToggle,toastDispatch
      );
      
    } else {
      // call a fucntion to delete a video ="singleVideo" Object from the" playlist" array of objects
      deleteVideoFromPlaylistApi(singleVideo,currentPlaylist._id,singleVideo._id,setToggle,toastDispatch)
    }
    setTrackVideoAddedRemoved((prev) => !prev);
  };

  return (
    <>
    <div
      className={display ? "modal dialog-box-true" : "modal dialog-box-false"}
    >
      <div className="modal-navbar">
        <p>Add To .. </p>
        <span onClick={hideDialog}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div className="list-of-playlist flex-column">
        <ul style={{ textAlign: "left" }}>
          <li>
            <input type="checkbox" id="watchLater" name="watchLater" />
            <label htmlFor="watchLater">Watch Later</label>
          </li>
          {/*-----------List of playlist to be checked--------------  */}
          {allPlaylistFromApi.map((item) => {
            {
              /*<------------ CHECK IS VIDEO IN CURRENT PLAYLIST(item) ------------------>*/
            }
            const isVideoInCurrentPlaylist = item.videos.filter(
              (element) => element._id === singleVideo._id
            );
            {
              /*<------------------------------------------------------------------------->*/
            }

            return (
              <li
                key={item._id}
                onClick={() =>
                  addRemoveVideoFromPlaylist(isVideoInCurrentPlaylist, item)
                }
              >
                <input
                  type="checkbox"
                  id={item.title}
                  name={item.title}
                  checked={isVideoInCurrentPlaylist[0] ? true : false}
                />
                <label htmlFor={item.title}>{item.title}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="modal-footer flex-row">
        <p
          onClick={() => {
            setIsCreatePlaylistClicked(true);
          }}
          className="create-playlist"
        >
          <i class="fas fa-plus"></i> Create new playlist
        </p>
      </div>
      <div
        className={
          isCreatePlaylistClicked
            ? "create-newPlaylist-wrapper dialog-box-true"
            : "create-newPlaylist-wrapper dialog-box-false"
        }
      >
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
          onClick={() => createNewPlaylistHandler(singleVideo, playlistTitle)}
        >
          Create
        </button>
      </div>
    </div>

    {/*<------------- TOAST --------------> */}
    <Toast text={toastState} />
    </>
  );
}

export { PlaylistModal };
