import axios from "axios";

export async function postLikedVideoApi(singleVideo, likedVideoDispatch) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/likes",
      headers: { authorization: localStorage.getItem("token") },
      data: {
        video: singleVideo,
      },
    });
    if (response.status === 201) {
      likedVideoDispatch({
        type: "like",
        payload: response.data.likes,
      });
    }
    // saving the encodedToken in the localStorage
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLikedVideoApi(singleVideo, likedVideoDispatch) {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/likes/${singleVideo._id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        video: singleVideo,
      },
    });
    if (response.status === 200) {
      likedVideoDispatch({
        type: "unLike",
        payload: response.data.likes,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// ADD TO HISTORY API
export async function addToHistoryApi(singleVideo, historyVideoDispatch) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/history",
      headers: { authorization: localStorage.getItem("token") },
      data: {
        video: singleVideo,
      },
    });
    if (response.status === 201) {
      historyVideoDispatch({
        type: "addToHistory",
        payload: response.data.history,
      });
    }
  } catch (error) {
    console.log(error);
  }
}



//REMOVE SINGLE VIDEO FROM HISTORY
export async function deleteHistorySingleVideoApi(
  singleVideo,
  historyVideoDispatch
) {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/history/${singleVideo._id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        video: singleVideo,
      },
    });
    if (response.status === 200) {
      historyVideoDispatch({
        type: "removeSingeleVideoFromHistory",
        payload: response.data.history,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

//REMOVE ALL VIDEO FROM HISTORY
export async function deleteHistoryAllVideoApi(historyVideoDispatch) {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/history/all`,
      headers: { authorization: localStorage.getItem("token") },
    });
    if (response.status === 200) {
      historyVideoDispatch({
        type: "removeAllVideoFromHistory",
        payload: response.data.history,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
