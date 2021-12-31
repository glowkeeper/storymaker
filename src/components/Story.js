import React, { useState, useEffect, useContext } from 'react'

import { StoreContext } from '../store/store'

import { getStory } from '../store/api/getStory'

export const Story = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)

    useEffect(() => {

        if ( store.state.keyWords.length && needsStory) {
            //console.log('boom', store.state.keyWords)
            getStory(store.dispatch, store.state.keyWords)
            setNeedsStory(false)
        }

    }, [store, needsStory])

    useEffect(() => {

    }, [store])

    return (
        <>            
            {<p>Story goes here :)</p>}
        </>
    )
}
