import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getImages } from '../store/api/getImages'

import { System, LocalRoutes, FlickrAPI, UIText } from '../config'

export const Images = () => {
    const store = useContext(StoreContext)
    const [needsImages, setNeedsImages] = useState(true)
    const [clickedImages, setClickedImages] = useState({})
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleImages
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    useEffect(() => {        

        if ( needsImages ) {

            store.dispatch({
                type: StoreActions.textInputInit
            })

            store.dispatch({
                type: StoreActions.textInit
            })

            store.dispatch({
                type: StoreActions.imagesInit
            })

            getImages(store, FlickrAPI.tags);
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
            delete images[imageURLs.cropped]; 
        } else {
            images[imageURLs.cropped] = imageURLs
        }
        return images;
    }

    const handleClick = (event, imageURLs) => {
        event.preventDefault();
        const images = setImages(imageURLs)
        const length = Object.keys(images).length;
        if (length === System.numSelectedImages) {            

            store.dispatch({
                type: StoreActions.imageObjectsCreate,
                payload: images
            })

            navigate(LocalRoutes.imageObjects)            
        }
        setClickedImages(images)
    }

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
                                    <img 
                                        className="image-button-image"
                                        src={url.cropped} 
                                        alt='flickr' 
                                    />
                                </button>
                            )
                        })}           
                    </div>
                </>

            ) : (
                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextImages}</p>
                        <div id="spinner">
                            <div className="spinner-2">&nbsp;</div>
                        </div>
                    </div>
                </div>
                
            )}
        </>
    )
}
