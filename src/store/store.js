import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static imagesInit = 'Images/Initialise'
  static imagesReset = 'Images/Reset'
  static imagesCreate = 'Images/Create'
  static imagesUpdate = 'Images/Update'
  static imageObjectsInit = 'ImageObjects/Initialise'
  static imageObjectsReset = 'ImageObjects/Reset'
  static imageObjectsCreate = 'ImageObjects/Create'
  static imageObjectsUpdate = 'ImageObjects/Update'
}

export const initialState = {
  images: [],
  imageObjects: []
}

export const imagesReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.imagesInit: 
    case StoreActions.imagesReset:
      return [...state, ...initialState.images]
    case StoreActions.imagesCreate:
      return [...action.payload]
    case StoreActions.imagesUpdate:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export const imageObjectsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.imageObjectsInit: 
    case StoreActions.imageObjectsReset:
      return [...state, ...initialState.imageObjects]
    case StoreActions.imageObjectsCreate:
      console.log('made it here', action.payload)
      return [...action.payload]
    case StoreActions.imageObjectsUpdate:
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
  images: imagesReducer,
  imageObjects: imageObjectsReducer
})
