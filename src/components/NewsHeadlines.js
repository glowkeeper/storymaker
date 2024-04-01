import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { LocalRoutes, UIText, OpenAI } from '../config'

export const NewsHeadlines = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    useEffect(() => {       
        
        setError(store.state.error)

    }, [store.state.error])

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
            type: StoreActions.errorInit
        })

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

    useEffect(() => {

        if( !store.state.user.access_token )
        {
            setError(UIText.appTextNoAccount)
            setTimeout(() => {        
                          
                navigate(LocalRoutes.home) 
            
            }, 2000)     
        }

    }, [store, navigate])

    return (
        <div class="inner-content">
            { store.state.news.length > 0 ? (

                <>
                    <p>{UIText.appTextFoundHeadlines}:</p>
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
                </>

            ) : (
                <>

                    { error ? (

                        <p>{error}</p>

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
            )}    
        </div>
    )
}
