import React,{ useContext,createContext,useEffect,useState,useReducer } from 'react'
import axios from "axios";

const watchLaterCheckboxContext=createContext(null);

const WatchLaterProvider=({children})=> {

    const [watchLaterCheckbox,setwatchLaterCheckbox]=useState(false);
 
     const watchLaterCheckboxReducer=(watchLaterCheckboxState,action)=>{
        return action.playload;
     }

     const [watchLaterCheckboxState,setWatchLaterCheckboxDisptach]=useReducer(watchLaterCheckboxReducer,[])

     const [videosInPlaylist,setVideoInPlaylist]=useState([])
     
     useEffect(() => {
        async function fetchWatchLaterData() {
            try {
                const response = await axios({
                  method: "get",
                  url: "/api/user/watchlater",
                  headers: { authorization: localStorage.getItem("token") },
                });
               setVideoInPlaylist(response.data.watchlater);
              // saving the encodedToken in the localStorage
              } catch (error) {
                console.log("Error in getting watchlater",error);
              }  
        }
        fetchWatchLaterData();
      }, [watchLaterCheckboxState,watchLaterCheckbox]);

  return (
    <watchLaterCheckboxContext.Provider value={{watchLaterCheckbox,setwatchLaterCheckbox,watchLaterCheckboxState,setWatchLaterCheckboxDisptach,videosInPlaylist}}>
        {children}
    </watchLaterCheckboxContext.Provider>
  )
}

const useWatchLaterCheckbox=()=>useContext(watchLaterCheckboxContext);

export  {WatchLaterProvider , useWatchLaterCheckbox}

/* ---------------------------------------------------------
   ---------------------------------------------------------
//const {watchLaterCheckbox,setwatchLaterCheckbox,setWatchLaterCheckboxDisptach,videosInPlaylist}=useWatchLaterCheckbox(); 
// checked={isVideoInWatchLater[0] ? true : false} 

------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------

 const isVideoInWatchLater = 
   ArayOfVideos.filter(
     (element) => element._id === singleVideo._id
   );

*/