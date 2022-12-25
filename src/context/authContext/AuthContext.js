import {useState,createContext,useContext} from "react"

const authContext=createContext();
 const AuthProvider=({children})=>{

    
     // check is token in the local storage 
     const [token,setToken]=useState(localStorage.getItem("token") ?localStorage.getItem("token"):null)

    return (
        <authContext.Provider value={{token,setToken}}>
            {children}
        </authContext.Provider>
    )


 }

 const useAuth=()=>useContext(authContext);

 export {useAuth,AuthProvider}