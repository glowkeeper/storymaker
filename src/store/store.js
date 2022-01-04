import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static pageTitleSet = 'PageTitle/Set'
  static imagesInit = 'Images/Initialise'
  static imagesReset = 'Images/Reset'
  static imagesCreate = 'Images/Create'
  static imagesUpdate = 'Images/Update'
  static imageObjectsInit = 'ImageObjects/Initialise'
  static imageObjectsReset = 'ImageObjects/Reset'
  static imageObjectsCreate = 'ImageObjects/Create'
  static imageObjectsUpdate = 'ImageObjects/Update'
  static keyWordsInit = 'KeyWords/Initialise'
  static keyWordsReset = 'KeyWords/Reset'
  static keyWordsCreate = 'KeyWords/Create'
  static keyWordsUpdate = 'KeyWords/Update'
  static textInit = 'Text/Initialise'
  static textReset = 'Text/Reset'
  static textCreate = 'Text/Create'
  static textUpdate = 'Text/Update'
}

export const initialState = {
  pageTitle: "",
  images: [],
  imageObjects: {}, 
  keyWords: [],
  text: []
}

export const pageTitleReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.pageTitleSet: 
      return action.payload
    default:
      return state
  }
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

export const keyWordsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.keyWordsInit: 
    case StoreActions.keyWordsReset:
      return [...initialState.keyWords]
    case StoreActions.keyWordsCreate:
      return [...action.payload]
    case StoreActions.keyWordsUpdate:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export const textReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.textInit: 
      return [...initialState.text]
    case StoreActions.textReset:
      const newState = state.length > 1 ? [state.shift()] : [...state]
      return newState
    case StoreActions.textCreate:
      return [...action.payload]
    case StoreActions.textUpdate:
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
  pageTitle: pageTitleReducer,
  images: imagesReducer,
  imageObjects: imageObjectsReducer,
  keyWords: keyWordsReducer,
  text: textReducer
})
