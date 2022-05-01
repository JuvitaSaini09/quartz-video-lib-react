import React, { useContext, createContext,useState,useEffect } from "react";

const videoPlaylistContext=createContext(null);

const VideoPlaylistProvider=({children})=>{
    
   // console.log("title of selected vidoe is :-->",playlistDetail.title);
    const [videosInPlaylist,setVideosInPlaylist]=useState([]);
     
   return(
    <videoPlaylistContext.Provider value={{videosInPlaylist,setVideosInPlaylist}}>
    {children}
</videoPlaylistContext.Provider>
   )
}

const useVideoOfPlaylist=()=>useContext(videoPlaylistContext);

export {useVideoOfPlaylist,VideoPlaylistProvider}





