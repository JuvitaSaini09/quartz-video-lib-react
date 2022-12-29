import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";

const toastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(true);

  const toastReducer = (toastState, action) => {
    switch (action.type) {
      //"ENTER_PLAYLIST_NAME"
      case "PLAYLIST_CREATED":
        return "Playlist successully created";
      case "PLAYLIST_ALREADY_EXIST":
        return "Playlist with this name already exists !";
      case "PLAYLIST_DELETED":
        return "Playlist successfully deleted";
      case "ERROR":
        return "Error !";
      case "ENTER_PLAYLIST_NAME":
        return "Enter name of playlist !";
      case "VIDEO_ADDED":
        return "Video added succesfully";
      case "VIDEO_DELETED":
        return "Video removed successfully";
      case "ADDED_TO_WATCH_LATER":
        return "Video added to watch later";
      case "REMOVED_FROM_WATCH_LATER":
        return "Video removed watch later";
      case "LOGIN_ACC_NOT_Found":
        return "Account not found !!";
      case "INPUT_ALL_VALUES":
        return "Enter all values !!";
      default:
        return "";
    }
  };

  const [toastState, toastDispatch] = useReducer(toastReducer, "");

  //useEffect to fade taost after 3 second
  useEffect(() => {
    setTimeout(() => setToast(false), 3000);
  }, [toast]);

  return (
    <toastContext.Provider
      value={{ toast, setToast, toastState, toastDispatch }}
    >
      {children}
    </toastContext.Provider>
  );
};

const useToast = () => useContext(toastContext);

export { ToastProvider, useToast };

//const {toast,setToast,toastState,toastDispatch}=useToast(); toastDispatch
