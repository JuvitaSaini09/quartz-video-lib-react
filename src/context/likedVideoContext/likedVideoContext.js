import React, { useContext, createContext, useReducer } from "react";

const likedVideoContext = createContext(null);

//function to handle liked videos
const likedVideoHandler = (state, video) => {
  const isItemInLikedVideos = state.find(
    (stateItem) => video._id === stateItem._id
  );
  if (isItemInLikedVideos) {
    return state;
  } else {
    return [...state, { ...video }];
  }
};
//function to handle unliked videos
const unLikedVideoHandler = (state, video) => {
  return state.filter((item) => item._id !== video._id);
};
const LikedVideoProvider = ({ children }) => {
  //<--------reducer function------>
  const likedVideoReducer = (likedVideoState, action) => {
    switch (action.type) {
      case "like":
        return likedVideoHandler(likedVideoState, action.payload);
      case "unLike":
        return unLikedVideoHandler(likedVideoState, action.payload);

      default:
        return likedVideoState;
    }
  };

  const [likedVideoState, likedVideoDispatch] = useReducer(
    likedVideoReducer,
    []
  );
  return (
    <likedVideoContext.Provider value={{ likedVideoState, likedVideoDispatch }}>
      {children}
    </likedVideoContext.Provider>
  );
};

const useLikedVideoContext = () => useContext(likedVideoContext);

export { useLikedVideoContext, LikedVideoProvider };
