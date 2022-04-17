import React, { useContext, createContext, useReducer } from "react";

const historyVideoContext = createContext(null);

const HistoryVideoProvider = ({ children }) => {
  //<--------reducer function------>
  const historyVideoReducer = (historyVideoState, action) => {
    switch (action.type) {
      case "addToHistory":
        return action.payload;
      case "removeSingeleVideoFromHistory":
        return action.payload;
      case "removeAllVideoFromHistory":
        return action.payload;

      default:
        return historyVideoState;
    }
  };

  const [historyVideoState, historyVideoDispatch] = useReducer(
    historyVideoReducer,
    []
  );
  return (
    <historyVideoContext.Provider
      value={{ historyVideoState, historyVideoDispatch }}
    >
      {children}
    </historyVideoContext.Provider>
  );
};

const useHistoryVideoContext = () => useContext(historyVideoContext);

export { useHistoryVideoContext, HistoryVideoProvider };
