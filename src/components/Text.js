import React, { useState, useEffect, useContext } from 'react'
import { fileSave } from 'browser-fs-access'

import { StoreContext, StoreActions } from '../store/store'

import { getText } from '../store/api/getText'

import { UIText, Prompts } from '../config'

export const Text = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [needsMore, setNeedsMore] = useState({
        isFetching: false,
        lengthText: 0 
    })
    const [error, setError] = useState(true)

    useEffect(() => {       
        
        setError(store.state.error)

    }, [store.state.error])

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleText
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    useEffect(() => {        

        if ( store.state.textInput.length && needsStory) {

            store.dispatch({
                type: StoreActions.errorInit
            })
            let prompt = store.state.textPrompt
            prompt += store.state.textInput.join(' ')
            //const userPrompt = store.state.textInput
            //console.log('prompt', prompt)
            getText(store, prompt, true)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

        if ( store.state.text.length !== needsMore.textLength && needsMore.isFetching) {
            setNeedsMore({
                isFetching: false,
                textLength: store.state.text.length
            })
        }

    }, [store, needsMore])

    const handleClickNew = async () => {
        store.dispatch({
            type: StoreActions.textInit
        })
        setNeedsStory(true)
    }
    
    const handleClickGetMore = () => {

        //try and find the last sentence and generate new text from that
        const textLength = store.state.text.length
        let userPrompt = store.state.text[textLength - 1]

        //console.log('userprompt', userPrompt) 
        // const stopIndex = userPrompt.lastIndexOf('.')
        // const tempText = userPrompt.slice(0, stopIndex -2)
        // const startIndex = tempText.lastIndexOf('.')
        // if (stopIndex !== -1 && startIndex !== -1 ) {
        //     userPrompt = userPrompt.slice(startIndex +1, stopIndex + 1)
        //     //console.log('found next text', userPrompt)
        // }

        const prompt = Prompts.moreSystemPrompt + userPrompt
        //console.log('more prompt', prompt)
        getText(store, prompt)
        setNeedsMore({
            isFetching: true,
            textLength: textLength
        })
    }

    const handleClickReset = () => {
        store.dispatch({
            type: StoreActions.textReset
        })
    }

    const handleClickLast = () => {
        store.dispatch({
            type: StoreActions.textCreate,
            payload: [...store.state.text.splice(0, store.state.text.length - 1)]
        })
    }

    const handleClickSave = async () => {
        const textBlob = new Blob(store.state.text);
        await fileSave(textBlob, {
            fileName: 'untitled.txt',
            extensions: ['.txt'],
        });
    }

    return (
        <div className="inner-content">
            { (store.state.text.length > 0 && !needsMore.isFetching) ? (

                <>
                    {store.state.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    <button
                        id="text-button"
                        onClick={handleClickNew}
                    >
                        {UIText.appNewButtonText}
                    </button>
                    <button
                        id="text-button"
                        onClick={handleClickGetMore}
                    >
                        {UIText.appMoreButtonText}
                    </button>
                    <button
                        id="text-button"
                        onClick={handleClickLast}
                    >
                        {UIText.appRemoveLastButtonText}
                    </button>
                    <button
                        id="text-button"
                        onClick={handleClickReset}
                    >
                        {UIText.appResetButtonText}
                    </button>
                    <button
                        id="text-button"
                        onClick={handleClickSave}
                    >
                        {UIText.appSaveButtonText}
                    </button>
                </>

            ) : (
                <>

                    { store.state.error ? (

                        <p>{error}</p>

                    ) : (

                    <div id="centered">
                        <p>{UIText.appTextText}</p>
                        <div id="spinner">
                            <div className="spinner-2">&nbsp;</div>
                        </div>
                    </div>

                    )}
                </>    
            )}  
        </div>
    )
}
