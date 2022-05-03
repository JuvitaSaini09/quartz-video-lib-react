import axios from "axios";

// create a playlist
export async function createPlaylistApi(singleVideo,title,playlistVideoDispatch,setToggle,toastDispatch) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/playlists",
      headers: { authorization: localStorage.getItem("token") },
      data:{ playlist: { title: title } },
    });
         playlistVideoDispatch({
         type: "CREATE_PLAYLIST",
         payload:response.data.playlists,
       });
      const lengthOfPlaylist=(response.data.playlists.length)
      const playlistID =response.data.playlists[lengthOfPlaylist-1]._id;
      if(singleVideo){
        addVideoToPlaylistApi(singleVideo,playlistID,playlistVideoDispatch)
      }
      //code to show toast here --->
      toastDispatch({type: "PLAYLIST_CREATED"})
      setToggle(true);
    // saving the encodedToken in the localStorage
  } catch (error) {
    //code to show toast here --->
    toastDispatch({type: "ERROR"})
    setToggle(true);
  }

}

// add video in a playlist
export async function addVideoToPlaylistApi(video,playlistId,playlistVideoDispatch,setToggle,toastDispatch) {
  try {
    await axios({
      method: "post",
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: localStorage.getItem("token") },
      data:{ video },
    });
     //code to show toast here --->
     toastDispatch({type: "VIDEO_ADDED"})
     setToggle(true);
       //response.data.playlist--->object
       //object.videos---->array
       //array contains all videos as object

  } catch (error) {
    //code to show toast here --->
    toastDispatch({type: "ERROR"})
    setToggle(true);
  }
}

// delete video in a playlist /api/user/playlists/:playlistId/:videoId
export async function deleteVideoFromPlaylistApi(video,playlistId,videoId,setToggle,toastDispatch) {
  try {
   await axios({
      method: "delete",
      url: `/api/user/playlists/${playlistId}/${videoId}`,
      headers: { authorization: localStorage.getItem("token") },
      data:{ video },
    });
     //code to show toast here --->
     toastDispatch({type: "VIDEO_DELETED"})
     setToggle(true);
  } catch (error) {
    //code to show toast here --->
    toastDispatch({type: "ERROR"})
    setToggle(true);
  }
}

// delete a playlist /api/user/playlists/:playlistId
export async function deletePlaylistApi(playlistId,playlistVideoDispatch,setToggle,toastDispatch) {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    playlistVideoDispatch({
      type: "DELETE_PLAYLIST",
      payload:response.data.playlists,
    });
      //code to show toast here --->
      toastDispatch({type: "PLAYLIST_DELETED"})
      setToggle(true);
        
  } catch (error) {
   //code to show toast here --->
   toastDispatch({type: "ERROR"})
   setToggle(true);
  }
  
}
