import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO, flickrCroppedSquarePhotos, flickrLargePhotos } from '../../utils/iO'
import { map } from '../../utils/utils'

import { RemoteAPI } from '../../config'

export const getImages = (dispatch, tag) => {

    IO.getData(flickrData => {

        const uRLs = []            
        const imageURLs = compose(map(imageData => {
            const { server, id, secret } = imageData

            const imageCroppedURL = flickrCroppedSquarePhotos(server, id, secret)
            const imageLargeURL = flickrLargePhotos(server, id, secret)
            const imageURLs = {
                cropped: imageCroppedURL,
                large: imageLargeURL
            }
            uRLs.push(imageURLs)
        }), prop('photo'), prop('photos'));
        
        imageURLs(flickrData)
        //console.log('made it here', uRLs)
        dispatch({ 
            type: StoreActions.imagesCreate,
            payload: uRLs
        });
    
    }, null, RemoteAPI.flickrQuery);
}