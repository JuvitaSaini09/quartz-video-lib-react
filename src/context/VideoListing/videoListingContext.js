import React from 'react'
import { createContext,useContext,useEffect,useState } from 'react'
import axios from 'axios';
import { useReducer } from 'react';

const videoContext=createContext(null);

const VideoListingProvider=({children})=> {

  const productListingReducer=(state,action)=>{
  return state;
  }
    const [allVideos,setAllVideos]=useState([])
    const [state,dispatch]=useReducer(productListingReducer,allVideos)

    useEffect(() => {
      async function fetchData() {
        try{
          const response = await axios.get("/api/products");
          setAllVideos(response.data.products)
        }
        catch(e){
          console.error(e);
        }  
      }
      fetchData();
    }, []);

  return (
    <videoContext.Provider value={{state}}>
        {children}
    </videoContext.Provider>
  )
}

const useVideo = () =>  useContext(videoContext);

export { VideoListingProvider,useVideo};
