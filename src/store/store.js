import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static imagesInit = 'Images/Initialise'
  static imagesReset = 'Images/Reset'
  static imagesUpdate = 'Images/Update'
}

export const initialState = {
  images: [],
}

export const imagesReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.imagesInit: 
    case StoreActions.imagesReset:
      return [...initialState.images]
    case StoreActions.imagesUpdate:
      console.log('got here')
      return [...state, ...action.payload]
    default:
      return state
  }
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

const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {}
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action)
    }
    return newState
  }
}

export const rootReducer = combineReducers({
  images: imagesReducer
})
