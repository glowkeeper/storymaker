import React, { useState, useEffect, useContext } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { getStory } from '../store/api/getStory'

export const Story = () => {
    const store = useContext(StoreContext)
    const [needsStory, setNeedsStory] = useState(true)

    useEffect(() => {

        if ( store.state.predictions.length && needsStory) {
            console.log('boom', store.state.predictions)
            // getStory(store.dispatch, store.state.predictions)
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
