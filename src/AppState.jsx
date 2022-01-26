import React, { useContext, useReducer } from "react";

//////////////////////////
// INITIAL STATE
//////////////////////////

const initialState = {
  url: "http://laurie-rails-notes-jwt.herokuapp.com",
  token: null,
  username: null,
};

//////////////////////////
// REDUCER
//////////////////////////

// action = {type: **, payload: **}
const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "auth":
      newState = { ...state, ...action.payload };
      return newState;
      break;

    default:
      return state;
      break;
  }
};

//////////////////////////
// AppContext
//////////////////////////

const AppContext = React.createContext(null);

//////////////////////////
// AppState Component
//////////////////////////

export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

//////////////////////////
// useAppState hook
//////////////////////////

export const useAppState = () => {
  return useContext(AppContext);
};
