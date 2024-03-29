import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { LocalRoutes, UIText, OpenAI } from '../config'

export const NewsHeadlines = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleNewsHeadlines
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    const handleClick = async (headline) => {
        //console.log('topic title', headline)    

        store.dispatch({
            type: StoreActions.textPromptSet,
            payload: OpenAI.newsSystemPrompt
        })

        store.dispatch({
            type: StoreActions.textInputCreate,
            payload: [headline]
        })

        navigate(LocalRoutes.text)
    }

    return (
        <> 
            { store.state.news.length > 0 ? (

                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextFoundHeadlines}</p>
                        {store.state.news.map((item, index) => {
                            if ( item.title ) {                                
                                return (
                                    <button
                                        key={index}
                                        id={"app-button"}
                                        onClick={() => handleClick(item.title)}
                                    >
                                        {item.title}
                                    </button>
                                ) 
                            } else {
                                return null
                            }
                        })}           
                    </div>         
                </div>

            ) : (
                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextHeadlines}</p>
                        <div id="spinner">
                            <div className="spinner-2">&nbsp;</div>
                        </div>
                    </div>
                </div>                
            )}    
        </>
    )
}
