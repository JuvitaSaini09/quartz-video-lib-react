import axios from "axios";

// create a playlist                    
export async function createPlaylistApi(singleVideo,title,playlistVideoDispatch,setToast,toastDispatch) {
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
        addVideoToPlaylistApi(singleVideo,playlistID,playlistVideoDispatch,setToast,toastDispatch)
      }
      //code to show toast here --->
      toastDispatch({type: "PLAYLIST_CREATED"})
      setToast(true);
    // saving the encodedToken in the localStorage
  } catch (error) {
    console.log("Error in creating a new playlist",error);
  }
}

// add video in a playlist                  
export async function addVideoToPlaylistApi(video,playlistId,playlistVideoDispatch,setToast,toastDispatch) {
  console.log("testing",playlistId,localStorage.getItem("token"))
  try {
    await axios({
      method: "post",
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: localStorage.getItem("token") },
      data:{ video },
    });
     //code to show toast here --->
     toastDispatch({type: "VIDEO_ADDED"})
     setToast(true);

  } catch (error) {
    console.log(error);
  }
}

// delete video in a playlist /api/user/playlists/:playlistId/:videoId
export async function deleteVideoFromPlaylistApi(video,playlistId,videoId,setToast,toastDispatch) {
  try {
   await axios({
      method: "delete",
      url: `/api/user/playlists/${playlistId}/${videoId}`,
      headers: { authorization: localStorage.getItem("token") },
      data:{ video },
    });
     //code to show toast here --->
     toastDispatch({type: "VIDEO_DELETED"})
     setToast(true);
  } catch (error) {
    console.log("Error while deleting video",error);
  }
}

// delete a playlist /api/user/playlists/:playlistId
export async function deletePlaylistApi(playlistId,playlistVideoDispatch,setToast,toastDispatch) {
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
      setToast(true);
        
  } catch (error) {
    console.log("Error while deleting playlist",error);
  }
  
}
