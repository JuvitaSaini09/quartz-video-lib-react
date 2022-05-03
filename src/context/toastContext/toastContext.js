import React,{ useContext,createContext,useEffect,useState,useReducer } from 'react'

const toastContext=createContext(null);

const ToastProvider=({children})=> {

    const [toast,setToast]=useState(true);
 
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
        setTimeout(()=>setToast(false),3000)
      },[toast])

  return (
    <toastContext.Provider value={{toast,setToast,toastState,toastDispatch}}>
        {children}
    </toastContext.Provider>
  )
}

const useToast=()=>useContext(toastContext);

export  {ToastProvider , useToast}


//const {toast,setToast,toastState,toastDispatch}=useToast(); toastDispatch
