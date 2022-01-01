import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

import { numSelectedImages, LocalRoutes, UIText } from '../config'

export const ImageObjects = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)
    const [keyWords, setKeyWords] = useState([])

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
        
            const allPredictions = myKeys
                .map((imageClass, index) => {
                    return store.state.imageObjects[`${imageClass}`].predictions?.map(prediction => prediction)
                })
                .filter(prediction => prediction)
                .flat()

            const thisKeyWords = [...new Set(allPredictions)]

            const numPredictions = myKeys.reduce((previous, current, index, array) => {
                if ( store.state.imageObjects[`${array[index]}`].hasOwnProperty('predictions')) {
                    return previous + 1
                } else {
                    return previous
                }
            }, 0)

            if ( numPredictions === numSelectedImages ) {
                                           
                store.dispatch({
                    type: StoreActions.keyWordsCreate,
                    payload: thisKeyWords
                })

                navigate(LocalRoutes.text)
            }

            setKeyWords(thisKeyWords)
        }

    }, [store, navigate])

    return (
        <> 
            <h3>{UIText.appTitleImageObjects}</h3> 
            { keyWords.length > 0 ? (

                <>
                    <div>
                        <p>{UIText.appTextFoundObjects}</p>
                        {keyWords.map((prediction, index) => {
                            return (
                                <p key={index}>{prediction}</p>
                            )
                        })}           
                    </div>
                </>

            ) : (
                <>
                    <p>{UIText.appTextImageObjects}</p>
                    <div id="spinner">
                        <div className="spinner-2">&nbsp;</div>
                    </div>
                </>
                
            )}    
        </>
    )
}
