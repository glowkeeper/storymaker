import React, { useState, useEffect, useContext } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

export const ImageObjects = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)

    useEffect(() => {

        if ( Object.keys(store.state.imageObjects).length && needsPredictions) {
            getPredictions(store.dispatch, store.state.imageObjects)
            setNeedsPredictions(false)
        }

    }, [store, needsPredictions])

    return (
        <>            
            {Object.keys(store.state.imageObjects).map(imageClass => {
                //console.log('my image class', store.state.imageObjects[`${imageClass}`])
                return (
                    <div>
                        <p>{store.state.imageObjects[`${imageClass}`].large}</p>
                        {store.state.imageObjects[`${imageClass}`].predictions?.map(prediction => {
                            return (
                                <p>{prediction}</p>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}
