import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static init = 'Initialise'
  static reset = 'Reset'
  static update = 'Update'
}

export const rootReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.init: 
      const newState = {...initialState}
      return {...newState, hasInitialised: true, hasSolution: false}
    case StoreActions.reset: 
      return {...action.payload}
    case StoreActions.update:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const initialState = {
  hasInitialised: false,
  hasSolution: false,
  asciiArt: "   +--+\n  ++  |\n+-++--+\n|  |  |\n+--+--+",
  corner: "+",
  colour: "#ff0000",
  rectangles: [],
}

export const useReducerWithThunk = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const customDispatch = (action) => {
    if (typeof action === 'function') {
        action();
    } else {
        dispatch(action); 
    }
  };
  
  return [state, customDispatch];
}
