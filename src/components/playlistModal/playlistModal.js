import React,{useState} from 'react'
import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext'
import "./playlistModal.css"

function PlaylistModal() {
  const [isCreatePlaylistClicked,setIsCreatePlaylistClicked]=useState(false);
  const {display,setdisplay }= useSingleVideo();
  const hideDialog = () => {
    setdisplay(false);
    setIsCreatePlaylistClicked(false)
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
 <p  onClick={()=>{ setIsCreatePlaylistClicked(true)}} className="create-playlist"><i class="fas fa-plus"></i> Create new playlist</p>

 </div>
 <div className={isCreatePlaylistClicked?"create-newPlaylist-wrapper dialog-box-true":"create-newPlaylist-wrapper dialog-box-false"}>
     <input className="create-newPlaylist" type="text" id="newPlaylist" name="newPlaylist" placeholder="Enter new playlist name"/><br/>
     <button>Create</button>
  </div>
</div>

 
  )
}

export  {PlaylistModal}