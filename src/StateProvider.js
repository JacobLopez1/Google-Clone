import React, { createContext, useContext, useReducer } from "react";

//Preparing Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Hook that pulls information from Data Layer
export const useStateValue = () => useContext(StateContext);
