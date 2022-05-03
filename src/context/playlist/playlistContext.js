import React, { useContext, createContext, useReducer,useState,useEffect } from "react";
import axios from "axios";

const playlistVideoContext = createContext(null);

const PlaylistVideoProvider = ({ children }) => {
  const [trackVideoAddedRemoved,setTrackVideoAddedRemoved]=useState(false);
    const [playlistTitle,setPlaylistTitle]=useState('');
    const [allPlaylistFromApi,setAllPlaylistFromApi]=useState([])
    const [playlistNameValue,setPlaylistNameValue]=useState('');
   
  //<--------reducer function------>
  const playlistVideoReducer = (playlistVideoState, action) => {
   
    switch (action.type) {
       case "CREATE_PLAYLIST":
         return action.payload;
         case "DELETE_PLAYLIST":
          return action.payload;
      default:
        console.log("default case")
        return playlistVideoState;
    }
  };

  const [playlistVideoState, playlistVideoDispatch] = useReducer(
    playlistVideoReducer,
    []
  );

  //get playlist from api call
  useEffect(()=>{
    async function getPlaylistApi() {
      try {
        const response = await axios({
          method: "get",
          url: "/api/user/playlists",
          headers: { authorization: localStorage.getItem("token") },
        });

       setAllPlaylistFromApi(response.data.playlists)
      } catch (error) {
        console.log(error);
      }
    
    }
    getPlaylistApi(playlistVideoDispatch);
  }
  ,[playlistVideoState,trackVideoAddedRemoved])

  return (
    <playlistVideoContext.Provider value={{ playlistVideoState, playlistVideoDispatch,playlistTitle,setPlaylistTitle,allPlaylistFromApi,setTrackVideoAddedRemoved,playlistNameValue,setPlaylistNameValue}}>
      {children}
    </playlistVideoContext.Provider>
  );
};

const usePlaylistVideoContext = () => useContext(playlistVideoContext);

export { usePlaylistVideoContext, PlaylistVideoProvider };

