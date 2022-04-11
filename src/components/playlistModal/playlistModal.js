import React from 'react'
import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext'
import "./playlistModal.css"

function PlaylistModal() {

  const {display,setdisplay }= useSingleVideo();
  const hideDialog = () => {
    setdisplay(false);
  };


  return (
   <div className={display ? "modal dialog-box-true" : "modal dialog-box-false"}>
  <div className="modal-navbar">
    <p>Add To .. </p><span onClick={hideDialog}><i className="fas fa-times"></i></span>
  </div>
  <div className="list-of-playlist flex-column">
  
        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>

        {/* later code will be added here to map created playlist by user :user playlist display code  */}
  </div>
 <div className="modal-footer flex-row">
 <p className="create-playlist"><i class="fas fa-plus"></i> Create new playlist</p>
  <button onClick={hideDialog}>Done</button>
 </div>
</div>

 
  )
}

export  {PlaylistModal}