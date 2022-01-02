import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

import { numSelectedImages, LocalRoutes, UIText } from '../config'

export const ImageObjects = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)
    const [hasNotDispatched, setHasNotDispatched] = useState(true)
    const [numPredictions, setNumPredictions] = useState(0)
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

            // console.log(allPredictions)

            const thisKeyWords = [...new Set(allPredictions.flat())]

            setNumPredictions(allPredictions.length)
            setKeyWords(thisKeyWords)
        }

    }, [store.state.imageObjects])

    useEffect(() => {

        let timeOut;
        if ( numPredictions === numSelectedImages && hasNotDispatched) {
            
            setHasNotDispatched(false)
            store.dispatch({
                type: StoreActions.keyWordsCreate,
                payload: keyWords
            })

            timeOut = setTimeout(navigate(LocalRoutes.text), 2000)
        }

        return () => {
            clearTimeout(timeOut)
        }

    }, [store, keyWords, numPredictions, navigate, hasNotDispatched])

    return (
        <> 
            <h3>{UIText.appTitleImageObjects}</h3> 
            { keyWords.length > 0 ? (

                <>
                    <div>
                        <p>{UIText.appTextFoundObjects}</p>
                        {keyWords.map((keyWord, index) => {
                            return (
                                <div key={index} className="fadeIn">
                                    <p>{keyWord}</p>
                                </div>
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
