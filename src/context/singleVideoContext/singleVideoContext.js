import React,{ createContext,useState,useContext} from 'react'



const singleVideoContext=createContext(null)

function SingleVideoProvider({children}) {
    const [singleVideo,setSingleVideo]=useState([])
  return (
    <singleVideoContext.Provider value={{singleVideo,setSingleVideo}} >
        {children}
    </singleVideoContext.Provider>
  )
}

const useSingleVideo=()=>useContext(singleVideoContext);

export {SingleVideoProvider,useSingleVideo}