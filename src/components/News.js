import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { getNews } from '../store/api/getNews'

import { LocalRoutes, UIText, NYT } from '../config'

export const News = () => {

    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleNews
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    const handleClick = async (topic) => {

        store.dispatch({
            type: StoreActions.textInputInit
        })

        store.dispatch({
            type: StoreActions.textInit
        })

        getNews(store, topic)
        navigate(LocalRoutes.newsHeadlines)  
    }

    return (
        <div className="inner-content">
            <p>{UIText.appTopicText}:</p>
            {NYT.newsTopics.map((topic, index) =>              
                <button
                    key={index}
                    id={"app-button"}
                    onClick={() => handleClick(topic)}
                >
                    {topic}
                </button>
            )}
        </div>
    )
}
