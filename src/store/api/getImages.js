import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO, flickrQuery, flickrCroppedSquarePhotos, flickrLargePhotos } from '../../utils/iO'
import { map } from '../../utils/utils'

export const getImages = (dispatch, tag) => {

    const images = compose(IO.getData(tagData => {

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
        
        imageURLs(tagData)
        //console.log('made it here', uRLs)
        dispatch({ 
            type: StoreActions.imagesCreate,
            payload: uRLs
        });
    
    }, null), flickrQuery);

    images(tag)

}