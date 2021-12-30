import React, { useEffect, useContext } from 'react'

import { StoreContext } from '../store/store'

import { getImages } from '../store/api/getImages'

export const Images = () => {
    const store = useContext(StoreContext)

    useEffect(() => {

        getImages(store.dispatch, 'all');

    }, [])
    

    const handleSubmit = (event) => {
        event.preventDefault();
        /*store.dispatch({
            type: StoreActions.init,
            payload: {}
        })*/
    }

    const handleChangeInput = (event) => {
        const name = event.target.name
        const value = event.target.value
    }

    const handleClickClear = (event) => {
        event.preventDefault();

    }

    const handleClickInit = (event) => {        
        event.preventDefault();  
    }

    return (
        <>
            { store.state.images.length > 0 ? (

                <>
                    <div id="image-grid">
                        {store.state.images.map((url, index) => {
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
