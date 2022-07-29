import {createContext,useContext,useState} from "react"

const authContext=createContext(null);

const AuthProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const [signupInfo,setSignupInfo]=useState({Email:'',FirstName:'',LastName:'',Password:''})
    const [loginInfo,setLoginInfo]=useState({Email:'',Password:''})
    const login=()=>setIsLoggedIn(true)
    const logout=()=>{
        localStorage.clear();
        setIsLoggedIn(false)
    }

    //Email Validator
    
    
    return(
        <authContext.Provider value={{isLoggedIn,login,logout,loginInfo,setLoginInfo,signupInfo,setSignupInfo}}>
            {children}
        </authContext.Provider>
    )
}

const useAuth=()=>useContext(authContext);

export {useAuth,AuthProvider}

