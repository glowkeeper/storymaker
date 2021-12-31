import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

import { numSelectedImages, LocalRoutes } from '../config'
import { getStory } from '../store/api/getStory'

export const ImageObjects = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if ( Object.keys(store.state.imageObjects).length && needsPredictions) {
            getPredictions(store.dispatch, store.state.imageObjects)
            setNeedsPredictions(false)
        }

    }, [store, needsPredictions])


    useEffect(() => {

        const myKeys = Object.keys(store.state.imageObjects)
        if ( myKeys.length ){
        
            const numPredictions = myKeys.reduce((previous, current, index, array) => {
                if ( store.state.imageObjects[`${array[index]}`].hasOwnProperty('predictions')) {
                    return previous + 1
                } else {
                    return previous
                }
            }, 0)

            if ( numPredictions === numSelectedImages ) {
                const allPredictions = myKeys
                    .map((imageClass, index) => {
                        return store.state.imageObjects[`${imageClass}`].predictions.map(prediction => prediction)
                    })
                    .flat()

                const keyWords = [...new Set(allPredictions)]
                
                store.dispatch({
                    type: StoreActions.keyWordsCreate,
                    payload: keyWords
                })
                navigate(LocalRoutes.story)                  
            }

        }

    }, [store, navigate])

    return (
        <>            
            {Object.keys(store.state.imageObjects).map((imageClass, index) => {
                //console.log('my image class', store.state.imageObjects[`${imageClass}`])
                return (
                    <div key={index}>
                        <p>{store.state.imageObjects[`${imageClass}`].large}</p>
                        {store.state.imageObjects[`${imageClass}`].predictions?.map((prediction, thisIndex) => {
                            return (
                                <p key={thisIndex}>{prediction}</p>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}
