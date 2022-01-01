import React, { useState, useEffect, useContext } from 'react'

import { StoreContext } from '../store/store'

import { getText } from '../store/api/getText'

import { UIText } from '../config'

export const Text = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)
    const [findForText, setFindForText] = useState("")

    useEffect(() => {

        if ( store.state.keyWords.length && needsStory) {
            const text = "A " + store.state.keyWords[Math.floor(Math.random() * store.state.keyWords.length)];
            getText(store.dispatch, text)
            setFindForText(text)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

    }, [store])

    return (
        <> 
            <h3>{UIText.appTitleText}</h3> 
            { store.state.text.length > 0 ? (

                <>
                    {<p>{store.state.text}</p>}
                </>

            ) : (
                <>
                    <p>{UIText.appTextText}"{findForText}..."</p>
                    <div id="spinner">
                        <div className="spinner-2">&nbsp;</div>
                    </div>
                </>

            )}  
        </>
    )
}
