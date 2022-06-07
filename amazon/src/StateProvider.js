//setup data layer
//we need this ti track the basket

import React, { createContext, useContext, useReducer } from "react";

// this is a data layer
export const StateContext = createContext();

// Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

