import React,{ useContext,createContext,useEffect,useState,useReducer } from 'react'

const toastContext=createContext(null);

const ToastProvider=({children})=> {

    const [toggle,setToggle]=useState(false);
 
     const toastReducer=(toastState,action)=>{
       switch(action.type){
         //"ENTER_PLAYLIST_NAME"
         case "PLAYLIST_CREATED": return "Playlist successully created";         
         case "PLAYLIST_ALREADY_EXIST" :return "Playlist with this name already exists !";
         case "PLAYLIST_DELETED" : return "Playlist successfully deleted";
         case "ERROR" : return "Error !";
         case "ENTER_PLAYLIST_NAME" : return "Enter name of playlist !";
         case "VIDEO_ADDED" : return "Video added succesfully";
         case "VIDEO_DELETED" : return "video removed successfully";
         default : return '';
       }
     }

     const [toastState,toastDispatch]=useReducer(toastReducer,'');

      //useEffect to fade taost after 3 second
      useEffect(()=>{
        setTimeout(()=>setToggle(false),3000)
      },[toggle])

  return (
    <toastContext.Provider value={{toggle,setToggle,toastState,toastDispatch}}>
        {children}
    </toastContext.Provider>
  )
}

const useToast=()=>useContext(toastContext);

export  {ToastProvider , useToast}


//const {toggle,setToggle,toastState,toastDispatch}=useToast();
