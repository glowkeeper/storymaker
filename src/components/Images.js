import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getImages } from '../store/api/getImages'

import { numSelectedImages, LocalRoutes } from '../config'

export const Images = () => {
    const store = useContext(StoreContext)
    const [needsImages, setNeedsImages] = useState(true)
    const [clickedImages, setClickedImages] = useState([])

    const navigate = useNavigate()

    useEffect(() => {        

        if ( needsImages ) {
            getImages(store.dispatch, 'all');
            setNeedsImages(false)
        }

    }, [needsImages, store])

    const doesExist = (imageURLs) => {
        const exists = clickedImages.some(element => {
            return element.id === imageURLs.cropped;
        });
        return exists
    }

    const setImages = (imageURLs) => {

        const exists = doesExist(imageURLs)
        let images;
        if (exists) {
            //console.log('found')
            images = clickedImages.filter(element => element.id !== imageURLs.cropped)
            //console.log('found images', images)
        } else {
            //console.log('not found')
            images = clickedImages.slice()
            const imageData = {
                id: imageURLs.cropped,
                urls: imageURLs
            }
            images.push(imageData)
            //console.log('not found images', images)
        }
        return images;
    }

    const handleClick = (event, imageURLs) => {
        event.preventDefault();
        //console.log('url', imageURLs.cropped)
        const images = setImages(imageURLs);
        if (images.length === numSelectedImages) {
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
