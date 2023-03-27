import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getPredictions } from '../store/api/getPredictions'

import { System, LocalRoutes, UIText } from '../config'

export const NewsHeadlines = () => {
    const store = useContext(StoreContext)
    const [needsPredictions, setNeedsPredictions] = useState(true)
    const [hasNotDispatched, setHasNotDispatched] = useState(true)
    const [numPredictions, setNumPredictions] = useState(0)
    const [keyWords, setKeyWords] = useState([])
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

    const handleClick = async (title) => {
        //console.log('topic title', title)
    }

    return (
        <> 
            { store.state.news.length > 0 ? (

                <div id="centered">
                    <div id="centered-items">
                        <p>{UIText.appTextFoundHeadlines}</p>
                        {store.state.news.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    id={"app-button"}
                                    onClick={() => handleClick(item.title)}
                                >
                                    {item.title}
                                </button>
                            )
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
