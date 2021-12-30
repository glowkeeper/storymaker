import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO, flickrQuery, flickrPhotos } from '../../utils/iO'
import { map } from '../../utils/utils'

export const getImages = (dispatch, tag) => {

    const images = compose(IO.getData(tagData => {

        const uRLs = []            
        const imageURLs = compose(map(imageData => {
            const { server, id, secret } = imageData
            const imageURL = flickrPhotos(server, id, secret)
            uRLs.push(imageURL)
        }), prop('photo'), prop('photos'));
        
        imageURLs(tagData)
        //console.log('made it here', uRLs)
        dispatch({ 
            type: StoreActions.imagesUpdate,
            payload: uRLs
        });
    
    }, null), flickrQuery);

    images(tag)

}