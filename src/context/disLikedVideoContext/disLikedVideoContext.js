import React, { useContext, createContext, useReducer } from "react";

const disLikedVideoContext = createContext(null);

//function to handle Disliked videos 
const disLikedVideoHandler=(state,video)=>{ 
  const isItemInDislikedVideos = state.find(
    (stateItem) => video._id === stateItem._id
  );
  if (isItemInDislikedVideos) {
    return state;
  } else {
    return [...state, { ...video }];
  }
}
//function to handle unDisliked videos 
const undisLikedVideoHandler=(state,video)=>{
  return state.filter((item) => item._id !== video._id);
}
const DisLikedVideoProvider = ({ children }) => {
  //<--------reducer function------>
  const disLikedVideoReducer = (disLikedVideoState, action) => {
    switch (action.type) {
      case "disLiked": return disLikedVideoHandler(disLikedVideoState,action.payload);
      case "notDisliked": 
      return undisLikedVideoHandler(disLikedVideoState,action.payload);
    
      default: return disLikedVideoState;
    }
   
  };

  const [disLikedVideoState, setDisLikedVideoDispatch] = useReducer(
    disLikedVideoReducer,
    []
  );
  return (
    <disLikedVideoContext.Provider value={{ disLikedVideoState, setDisLikedVideoDispatch }}>
      {children}
    </disLikedVideoContext.Provider>
  );
};

const useDisLikedVideoContext = () => useContext(disLikedVideoContext);

export { useDisLikedVideoContext, DisLikedVideoProvider };
