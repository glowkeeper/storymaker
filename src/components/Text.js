import React, { useState, useEffect, useContext } from 'react'

import { StoreContext } from '../store/store'

import { getText } from '../store/api/getText'

export const Text = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)

    useEffect(() => {

        if ( store.state.keyWords.length && needsStory) {
            getText(store.dispatch, store.state.keyWords)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

    }, [store])

    return (
        <>  
            { store.state.text ? (

                <>
                    {<p>{store.state.text}</p>}
                </>

            ) : (

                <div id="spinner">
                    <div className="spinner-2">&nbsp;</div>
                </div>

            )}  
        </>
    )
}
