// import React, { createContext, useContext, useReducer } from "react";

// //Prepare the data Layer
// export const StateContext = createContext();

// //wrap the app and provide the data layer
// export const StateProvider = ({ reducer, initialState, children }) => {
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>;
// };
// //pull the information from the data layer
// export const useStateValue = () => useContext(StateContext);
