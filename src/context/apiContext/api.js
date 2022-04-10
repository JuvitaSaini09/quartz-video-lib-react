import React,{ useContext,createContext,useEffect,useState } from 'react'
import axios from "axios"

const apiContext=createContext(null);


const ApiProvider=({children})=> {

    const [apiVideos
        ,setAllVideos]=useState([])

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
    <apiContext.Provider value={{apiVideos}}>
        {children}
    </apiContext.Provider>
  )
}

const useApi=()=>useContext(apiContext);

export  {ApiProvider,useApi}