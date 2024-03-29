import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

import { System, LocalRoutes, UIText, OpenAI } from '../config'

export const ImageObjects = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)
    const [hasNotDispatched, setHasNotDispatched] = useState(true)
    const [numPredictions, setNumPredictions] = useState(0)
    const [keyWords, setKeyWords] = useState([])
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    const needsAn = chr => (/[aeiou]/i).test(chr)

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleImageObjects
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    useEffect(() => {

        if ( Object.keys(store.state.imageObjects).length && needsPredictions) {

            getPredictions(store.dispatch, store.state.imageObjects)
            setNeedsPredictions(false)
        }

    }, [store, needsPredictions])

    useEffect(() => {

        let timeOut;
        const myKeys = Object.keys(store.state.imageObjects)
        if ( myKeys.length ){
        
            const allPredictions = myKeys
                .map((imageClass, index) => {
                    return store.state.imageObjects[`${imageClass}`].predictions?.map(prediction => prediction)
                })
                .filter(prediction => prediction)

            // console.log(allPredictions)

            const thisKeyWords = [...new Set(allPredictions.flat())]           
            setKeyWords(thisKeyWords)

            if ( allPredictions.length === System.numSelectedImages) {

                timeOut = setTimeout(() => {
                    setNumPredictions(allPredictions.length)
                }, 4000)
            }
        }

        return () => {
            clearTimeout(timeOut)
        }

    }, [store.state.imageObjects])

    useEffect(() => {

        if ( numPredictions === System.numSelectedImages && hasNotDispatched) {
            
            //console.log('got keywords', keyWords)
            setHasNotDispatched(false)
            
            // const keyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
            // console.log('got keyword', keyWord)

            const keyWordsWithPrep = keyWords.map(word => {
                return needsAn(word.charAt(0)) ? "An " + word : "A " + word
            }) 
            
            //console.log('got text input', keyWordsWithPrep)

            store.dispatch({
                type: StoreActions.textPromptSet,
                payload: OpenAI.imageSystemPrompt
            })

            store.dispatch({
                type: StoreActions.textInputCreate,
                payload: keyWordsWithPrep
            })
            
            navigate(LocalRoutes.text)
        }

    }, [store, keyWords, numPredictions, navigate, hasNotDispatched])

    return (
        <> 
            { keyWords.length > 0 ? (

                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextFoundObjects}</p>
                        {keyWords.map((keyWord, index) => {
                            return (
                                <div key={index} className="fadeIn">
                                    <p>{keyWord}</p>
                                </div>
                            )
                        })}           
                    </div>         
                </div>

            ) : (
                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextImageObjects}</p>
                        <div id="spinner">
                            <div className="spinner-2">&nbsp;</div>
                        </div>
                    </div>
                </div>                
            )}    
        </>
    )
}
