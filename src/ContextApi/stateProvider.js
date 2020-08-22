//First imports three things from React for base building****

import React, { createContext, useContext, useReducer } from "react";

//This is DataLayer to all the components ==>
const Store = createContext();

//This is a function to access root app to so all the data access all components
//This is just like a component we create a take the props we provide in StateProvider ==>>
export const StateProvider = ({ children, reducer, initialState }) => (
  <Store.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Store.Provider>
);

//This is use for access into store ==>>
export const useStateValue = () => useContext(Store);
