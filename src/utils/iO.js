import { curry } from 'ramda'

import { RemoteAPI } from '../config'

const fetchData = async (props) => {
  const { url, cb, options } = props
  //console.log('my props', url, cb, options )
  try {

      const response = options ? await fetch(url, options) : await fetch(url)
      //console.log('got response', response)   

      // Copes with empty response...
      const textData = await response.text() 
      const data = textData ? JSON.parse(textData) : {}
      
      if ( cb ) cb(data)

  } catch (error) {
    console.error('fetchData', error)
  }
}
  
const fetchJSON = async (props) => {
  const { url, cb, options } = props
  //console.log('my json props', url, cb, options )
  try {

      const response = options ? await fetch(url, options) : await fetch(url)
      // console.log('got response', response)
      if ( cb ) cb(response)

  } catch (error) {
    console.error('fetchData', error)
  }
}

export const IO = {
    getJSON: curry(async (callback, options, url) => fetchJSON({
        url: url, 
        cb: callback,
        options
    })),
    getData: curry(async (callback, options, url) => fetchData({
        url: url, 
        cb: callback,
        options
    })),
    trace: curry(async (tag, x) => { console.log(tag, x); return x; }),
};

export const flickrQuery = curry((k, t, p) => `${RemoteAPI.flickrSearchAPI}&api_key=${k}&tags="${t}"&page=${p}&format=json&nojsoncallback=1&safe_search=1&content_type=1`)
export const flickrCroppedSquarePhotos = curry((serverId, id, secret) => `${RemoteAPI.flickrPhotoServer}/${serverId}/${id}_${secret}_q.jpg`)
export const flickrLargePhotos = curry((serverId, id, secret) => `${RemoteAPI.flickrPhotoServer}/${serverId}/${id}_${secret}_b.jpg`)

export const nYTQuery = curry((k, t) => `${RemoteAPI.nYTTopStoriesAPI}/${t}.json?api-key=${k}`)