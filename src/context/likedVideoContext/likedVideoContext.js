import React, { useContext, createContext, useReducer } from "react";

const likedVideoContext = createContext(null);

const LikedVideoProvider = ({ children }) => {
  //<--------reducer function------>
  const likedVideoReducer = (likedVideoState, action) => {
    switch (action.type) {
      case "like":
        return action.payload;
      // return likedVideoHandler(likedVideoState, action.payload);
      case "unLike":
        return action.payload;
      // return unLikedVideoHandler(likedVideoState, action.payload);

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
