import React,{ createContext,useState,useContext} from 'react'



const singleVideoContext=createContext(null)

function SingleVideoProvider({children}) {
    const [singleVideo,setSingleVideo]=useState([])
    const [display, setdisplay] = useState(false);
  return (
    <singleVideoContext.Provider value={{singleVideo,setSingleVideo,display, setdisplay}} >
        {children}
    </singleVideoContext.Provider>
  )
}

const useSingleVideo=()=>useContext(singleVideoContext);

export {SingleVideoProvider,useSingleVideo}