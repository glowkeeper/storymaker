import React, { useState, useMemo, useEffect } from 'react'

import { compose, props, prop } from 'ramda'

import { 
    StoreContext,
    rootReducer,
    initialState, 
    useReducerWithThunk 
} from '../store/store'

import { Impure, map } from '../utils/utils'
import { RemoteAPI, UIText } from '../config'

export const Images = () => {
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)
    const [imageURLs, setImageURLs] = useState([])
    
    const [hasImages, setHasImages] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

    useEffect(() => {

        // const getImages = compose(Impure.getJSON(Impure.trace('response'), null), RemoteAPI.flickrQuery);
        const getImages = compose(Impure.getData(data => {

            const uRLs = []
            
            const mediaURLs = compose(map(mediaData => {
                const { server, id, secret } = mediaData
                const imageURL = RemoteAPI.flickrPhotos(server, id, secret)
                uRLs.push(imageURL)
            }), prop('photo'), prop('photos'));
            
            mediaURLs(data)
            setHasImages(true)
            setImageURLs(uRLs);

        }, null), RemoteAPI.flickrQuery);
        getImages('all');

    }, [])
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true)
        /*store.dispatch({
            type: StoreActions.init,
            payload: {}
        })*/
    }

    const handleChangeInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (hasSubmitted) setHasSubmitted(false)
        //setArt({...art, [name]: value})
    }

    const handleClickClear = (event) => {
        event.preventDefault();
                   
        setImageURLs([])
        
        /*store.dispatch({
            type: StoreActions.reset,
            payload: reset
        })*/
        if (hasSubmitted) setHasSubmitted(false)

    }

    const handleClickInit = (event) => {        
        event.preventDefault();       
        setImageURLs([])
        
        if (hasSubmitted) setHasSubmitted(false)   
    }

    return (
        <>
            { hasImages ? (

                <>
                    <div id="image-grid">
                        {imageURLs.map((url, index) => {
                            return <img key={index} src={url} alt='flickr' />
                        })}           
                    </div>
                </>

            ) : (

                <div id="spinner">
                    <div className="spinner-2">&nbsp;</div>
                </div>
                
            )}
        </>
    )
}
