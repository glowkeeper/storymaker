import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO, flickrCroppedSquarePhotos, flickrLargePhotos, flickrQuery } from '../../utils/iO'

import { map } from '../../utils/utils'

export const getImages = (store) => {

    store.dispatch({ 
        type: StoreActions.imagesInit
    });

    const fetchOptions = {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${store.state.user.access_token}`
        }
    }   

    IO.getData( async flickrData => {

        const imageURLs = compose(map(imageData => {

            // console.log('imagedata', imageData)
            const { server, id, secret } = imageData

            const imageCroppedURL = flickrCroppedSquarePhotos(server, id, secret)
            const imageLargeURL = flickrLargePhotos(server, id, secret)
            const imageURLs = {
                cropped: imageCroppedURL,
                large: imageLargeURL
            }
            //uRLs.push(imageURLs)
            store.dispatch({ 
                type: StoreActions.imagesUpdate,
                payload: [imageURLs]
            });
        }), prop('photo'), prop('photos'));

        
        imageURLs(flickrData.data)
    
    }, fetchOptions, flickrQuery, store)
}