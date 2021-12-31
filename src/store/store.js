import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static navUpdate = 'Nav/Update'
  static imagesInit = 'Images/Initialise'
  static imagesReset = 'Images/Reset'
  static imagesCreate = 'Images/Create'
  static imagesUpdate = 'Images/Update'
  static imageObjectsInit = 'ImageObjects/Initialise'
  static imageObjectsReset = 'ImageObjects/Reset'
  static imageObjectsCreate = 'ImageObjects/Create'
  static imageObjectsUpdate = 'ImageObjects/Update'
  static predictionsInit = 'Predictions/Initialise'
  static predictionsReset = 'Predictions/Reset'
  static predictionsCreate = 'Predictions/Create'
  static predictionsUpdate = 'Predictions/Update'
}

export const initialState = {
  images: [],
  imageObjects: {}, 
  predictions: []
}

export const imagesReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.imagesInit: 
    case StoreActions.imagesReset:
      return [...initialState.images]
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
      return {...initialState.imageObjects}
    case StoreActions.imageObjectsCreate:
      return {...action.payload}
    case StoreActions.imageObjectsUpdate:
      const newState = {
        ...state, 
        [`${action.payload.id}`]: {
          cropped: action.payload.cropped,
          large: action.payload.large,
          predictions: action.payload.predictions
        }
      }
      return newState
    default:
      return state
  }
}

export const predictionsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.predictionsInit: 
    case StoreActions.predictionsReset:
      return [...initialState.predictions]
    case StoreActions.predictionsCreate:
      console.log('got here', action.payload)
      return [...action.payload]
    case StoreActions.predictionsUpdate:
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
  imageObjects: imageObjectsReducer,
  predictions: predictionsReducer
})
