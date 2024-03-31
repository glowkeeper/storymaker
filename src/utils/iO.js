import { curry } from 'ramda'

import { StoreActions } from '../store/store'
import { Remote, RemoteErrors, UIText } from '../config'

const fetchData = async (props) => {
  const { url, cb, options, store } = props
  //console.log('my props', url, cb, options )
  try {

    const response = options ? await fetch(url, options) : await fetch(url)

    // Copes with empty response...
    const textData = await response.text() 
    const data = textData ? JSON.parse(textData) : {}
  
    // console.log('got response', response)  
    // console.log('got data', data) 

    if ( !response.ok ) {
      if (data.hasOwnProperty('errors')) {
        throw Error(data.errors[0].message)
      } else {
        throw Error(response.statusText)
      }
    }    
      
    if ( cb ) cb(data)

  } catch (error) {

    console.error('fetchData error', error.message)
    switch (error.message) {
      case RemoteErrors.userError.tokenExpired:
        store.dispatch({ 
          type: StoreActions.errorSet,
          payload: UIText.tokenError
        })
        break;
      default:
        store.dispatch({ 
          type: StoreActions.errorSet,
          payload: 'fetchData error'
        })
    }
    
  }
}
  
const fetchJSON = async (props) => {
  const { url, cb, options, store } = props
  //console.log('my json props', url, cb, options )
  try {

    const response = options ? await fetch(url, options) : await fetch(url)
    //console.log('got response', response)

    if ( !response.ok ) {
      throw Error(response.statusText)
    }    

    if ( cb ) cb(response)

  } catch (error) {
    
    console.error('fetchJSON', error.message)
    store.dispatch({ 
      type: StoreActions.errorSet,
      payload: 'fetchJSON error ' + error.message
    })
  }
}

export const IO = {
    getJSON: curry(async (callback, options, url, store) => fetchJSON({
        url: url, 
        cb: callback,
        options,
        store
    })),
    getData: curry(async (callback, options, url, store) => fetchData({
        url: url, 
        cb: callback,
        options,
        store
    })),
    trace: curry(async (tag, x) => { console.log(tag, x); return x; }),
};

export const openaiQuery = process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.openai
export const nytQuery = process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.nyt

export const flickrQuery = process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.flickr
export const flickrCroppedSquarePhotos = curry((serverId, id, secret) => `${Remote.flickrPhotoServer}/${serverId}/${id}_${secret}_q.jpg`)
export const flickrLargePhotos = curry((serverId, id, secret) => `${Remote.flickrPhotoServer}/${serverId}/${id}_${secret}_b.jpg`)