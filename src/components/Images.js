import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getImages } from '../store/api/getImages'

import { numSelectedImages, LocalRoutes } from '../config'

export const Images = () => {
    const store = useContext(StoreContext)
    const [needsImages, setNeedsImages] = useState(true)
    const [clickedImages, setClickedImages] = useState({})

    const navigate = useNavigate()

    useEffect(() => {        

        if ( needsImages ) {
            getImages(store.dispatch, 'all');
            setNeedsImages(false)
        }

    }, [needsImages, store])

    const doesExist = (imageURLs) => {
        return clickedImages.hasOwnProperty(imageURLs.cropped);
    }

    const setImages = (imageURLs) => {

        const exists = doesExist(imageURLs)
        let images = { ...clickedImages};
        if (exists) {
            //console.log('found')
            delete images[imageURLs.cropped]; 
        } else {
            images[imageURLs.cropped] = imageURLs
        }
        return images;
    }

    const handleClick = (event, imageURLs) => {
        event.preventDefault();
        //console.log('url', imageURLs.cropped)
        const images = setImages(imageURLs)
        const length = Object.keys(clickedImages).length;
        if (length === numSelectedImages) {
            store.dispatch({
                type: StoreActions.imageObjectsCreate,
                payload: images
            })
            navigate(LocalRoutes.imageObjects)            
        }
        setClickedImages(images)
        //console.log('my clicked', clickedImages)
    }

    // console.log('my state', store.state)

    return (
        <>
            { store.state.images.length > 0 ? (

                <>
                    <div id="image-grid">
                        {store.state.images.map((url, index) => {
                            return (
                                <button
                                    key={index}
                                    className={doesExist(url) ? "image-button-active" : "image-button"}
                                    onClick={event => handleClick(event, url)}
                                >
                                    <img src={url.cropped} alt='flickr' />
                                </button>
                            )
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
