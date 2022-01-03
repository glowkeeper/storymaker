import React, { useState, useEffect, useContext } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { getText } from '../store/api/getText'

import { UIText } from '../config'

export const Text = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)
    const [findForText, setFindForText] = useState("")
    const [hasNoTitle, setHasNoTitle] = useState(true)

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
            getText(store.dispatch, text)
            setFindForText(text)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

    }, [store])

    return (
        <> 
            { store.state.text.length > 0 ? (

                <>
                    {<p>{store.state.text}</p>}
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
