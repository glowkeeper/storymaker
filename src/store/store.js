import React, { useReducer } from 'react'

export const StoreContext = React.createContext()

export class StoreActions { 
  static login = 'user/login'
  static logout = 'user/logout'
  static errorInit = 'Error/Initialise'
  static errorSet = 'Error/Set'
  static pageTitleSet = 'PageTitle/Set'
  static imagesInit = 'Images/Initialise'
  static imagesReset = 'Images/Reset'
  static imagesCreate = 'Images/Create'
  static imagesUpdate = 'Images/Update'
  static imageObjectsInit = 'ImageObjects/Initialise'
  static imageObjectsReset = 'ImageObjects/Reset'
  static imageObjectsCreate = 'ImageObjects/Create'
  static imageObjectsUpdate = 'ImageObjects/Update'
  static newsInit = 'news/Initialise'
  static newsReset = 'news/Reset'
  static newsCreate = 'news/Create'
  static newsUpdate = 'news/Update'
  static textPromptSet = 'textPrompt/Set'
  static textInputInit = 'textInput/Initialise'
  static textInputReset = 'textInput/Reset'
  static textInputCreate = 'textInput/Create'
  static textInputUpdate = 'textInput/Update'
  static textInit = 'Text/Initialise'
  static textReset = 'Text/Reset'
  static textCreate = 'Text/Create'
  static textUpdate = 'Text/Update'
}

export const initialState = {
  user: {},
  error: "",
  pageTitle: "",
  images: [],
  imageObjects: {},
  news: [],
  textPrompt: "",
  textInput: [],
  text: []
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.login:      
      const user = action.payload  
      //console.log('got login', user)
      return user
    case StoreActions.logout:
      return {}
    default:
      return state
  }
}

export const errorReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.errorInit: 
    case StoreActions.imagesReset:
      return ""
    case StoreActions.errorSet: 
      return action.payload
    default:
      return state
  }
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

export const newsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.newsInit: 
    case StoreActions.newsReset:
      return [...initialState.news]
    case StoreActions.newsCreate:
      return [...action.payload]
    case StoreActions.newsUpdate:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export const textPromptReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.textPromptSet: 
      return action.payload
    default:
      return state
  }
}

export const textInputReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.textInputInit: 
    case StoreActions.textInputReset:
      return [...initialState.textInput]
    case StoreActions.textInputCreate:
      //console.log('action', action.payload)
      return [...action.payload]
    case StoreActions.textInputUpdate:
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
  user: userReducer,
  error: errorReducer,
  pageTitle: pageTitleReducer,
  images: imagesReducer,
  imageObjects: imageObjectsReducer,
  news: newsReducer,
  textPrompt: textPromptReducer,
  textInput: textInputReducer,
  text: textReducer
})
