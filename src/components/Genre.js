import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { LocalRoutes, UIText, Genres } from '../config'

export const Genre = () => {

    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if (hasNoTitle) {
    
            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleGenre
            })
            setHasNoTitle(false)
        }
    
    }, [store, hasNoTitle])
    

    const handleClick = async (genre) => {

        const prompt = store.state.textPrompt + " The genre of the story is " + genre + "."

        store.dispatch({
            type: StoreActions.textPromptSet,
            payload: prompt
        })
        navigate(LocalRoutes.text)  
    }

    return (
        <div className="inner-content">
            <p>{UIText.appTopicText}:</p>
            {Genres.genres.map((genre, index) =>              
                <button
                    key={index}
                    id={"app-button"}
                    onClick={() => handleClick(genre)}
                >
                    {genre}
                </button>
            )}
        </div>
    )
}
