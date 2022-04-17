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
