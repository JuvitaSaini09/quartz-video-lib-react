import axios from "axios";

export async function addToWatchLater(singleVideo,setWatchLaterCheckboxDisptach, toastDispatch,setToast) {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: localStorage.getItem("token") },
       data: {
         video: singleVideo,
        },
      });
      
      setWatchLaterCheckboxDisptach({payload:response.data.watchlater})
      toastDispatch({type: "ADDED_TO_WATCH_LATER"})
      setToast(true);
      // saving the encodedToken in the localStorage
    } catch (error) {
      console.log("error in adding into watchlater",error);
      toastDispatch({type: "ERROR"})
      setToast(true);
    }
  }


  //fetch watch later videos
export async function removeFromWatchLater(singleVideo,setWatchLaterCheckboxDisptach,toastDispatch,setToast) {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/watchlater/${singleVideo._id}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setWatchLaterCheckboxDisptach({payload:response.data.watchlater})
      toastDispatch({type: "REMOVED_FROM_WATCH_LATER"})
      setToast(true);
    // saving the encodedToken in the localStorage   
    } catch (error) {
      console.log("Error in removing video from watchlater",error);
      toastDispatch({type: "ERROR"})
      setToast(true);
    }
  }


