import { curry } from 'ramda'

import { RemoteAPI } from '../config'

const fetchData = async (props) => {
    const { url, cb, options } = props
    console.log('my props', url, cb, options )
    try {
  
        const response = options ? await fetch(url, options) : await fetch(url)
        const data = await response.json()
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
    getJSON: curry((callback, options, url) => fetchJSON({
        url: url, 
        cb: callback,
        options
    })),
    getData: curry((callback, options, url) => fetchData({
        url: url, 
        cb: callback,
        options
    })),
    trace: curry((tag, x) => { console.log(tag, x); return x; }),
};

export const flickrCroppedSquarePhotos = (serverId, id, secret) => `${RemoteAPI.flickrPhotoServer}/${serverId}/${id}_${secret}_q.jpg`
export const flickrLargePhotos = (serverId, id, secret) => `${RemoteAPI.flickrPhotoServer}/${serverId}/${id}_${secret}_b.jpg`