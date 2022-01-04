import React, { useState, useEffect, useContext } from 'react'

import { fileSave } from 'browser-fs-access'

import { StoreContext, StoreActions } from '../store/store'

import { getText } from '../store/api/getText'

import { UIText } from '../config'

export const Text = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)
    const [findForText, setFindForText] = useState("")
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [needsMore, setNeedsMore] = useState({
        isFetching: false,
        lengthText: 0 
    })

    const needsAn = chr => (/[aeiou]/i).test(chr);

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

        if ( store.state.keyWords.length && needsStory) {
            const keyWord = store.state.keyWords[Math.floor(Math.random() * store.state.keyWords.length)];
            const text = needsAn(keyWord.charAt(0)) ? "An " + keyWord : "A " + keyWord
            getText(store.dispatch, text, true)
            setFindForText(text)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

        if ( store.state.text.length !== needsMore.textLength && needsMore.isFetching) {
            setNeedsMore({
                isFetching: false,
                textLength: store.state.keyWords.length
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
        const textLength = store.state.text.length
        const text = store.state.text[textLength - 1];
        getText(store.dispatch, text);
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
        <> 
            { (store.state.text.length > 0 && !needsMore.isFetching) ? (

                <>
                    {store.state.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    <button
                        id="text-button"
                        onClick={handleClickNew}
                    >
                        {UIText.appNewButtonText}
                    </button>
                    &nbsp;
                    <button
                        id="text-button"
                        onClick={handleClickGetMore}
                    >
                        {UIText.appMoreButtonText}
                    </button>
                    &nbsp;
                    <button
                        id="text-button"
                        onClick={handleClickLast}
                    >
                        {UIText.appRemoveLastButtonText}
                    </button>
                    &nbsp;
                    <button
                        id="text-button"
                        onClick={handleClickReset}
                    >
                        {UIText.appResetButtonText}
                    </button>
                    &nbsp;
                    <button
                        id="text-button"
                        onClick={handleClickSave}
                    >
                        {UIText.appSaveButtonText}
                    </button>
                </>

            ) : (
                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextText}"{findForText}..."</p>
                        <div id="spinner">
                            <div className="spinner-2">&nbsp;</div>
                        </div>
                    </div>
                </div>
            )}  
        </>
    )
}
