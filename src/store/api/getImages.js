import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO, flickrCroppedSquarePhotos, flickrLargePhotos,flickrQuery } from '../../utils/iO'
import { map } from '../../utils/utils'

import { FlickrAPI } from '../../config'

export const getImages = (dispatch, tags) => {

    dispatch({ 
        type: StoreActions.imagesInit
    });

    const get = compose(IO.getData(flickrData => {

        //const uRLs = []            
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
            dispatch({ 
                type: StoreActions.imagesUpdate,
                payload: [imageURLs]
            });
        }), prop('photo'), prop('photos'));
        
        imageURLs(flickrData)
        /*dispatch({ 
            type: StoreActions.imagesCreate,
            payload: uRLs
        });*/
    
    }, null), flickrQuery);

    const page =[Math.floor(Math.random() * FlickrAPI.numPages)]
    get(tags, page)
}