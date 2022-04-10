import React from 'react'
import "./playlistModal.css"

function PlaylistModal() {
  return (
   <div className="modal">
  <div className="modal-navbar">
    <h2>Add To .. </h2><span><i className="fas fa-times"></i></span>
  </div>
  <div className="list-of-playlist flex-column">
  
        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>

        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>

        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>

        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>

        <div>
        <input type="checkbox" id="watchLater" name="watchLater" />
        <label htmlFor="watchLater">Watch Later</label>
        </div>
  </div>
 <div className="modal-footer flex-row">
 <h2 className="create-playlist"><i class="fas fa-plus fa-1x"></i> Create new playlist</h2>
  <button>Done</button>
 </div>
</div>

 
  )
}

export  {PlaylistModal}