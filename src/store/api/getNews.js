import { StoreActions } from '../store'

import { IO, nytQuery } from '../../utils/iO'

export const getNews = (store, topic) => {

    store.dispatch({ 
        type: StoreActions.newsInit
    });

    const content = {
        "topic": topic
    }

    const fetchOptions = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${store.state.user.access_token}`
        },
        body: JSON.stringify(content)
    }

    IO.getData(stories => {

        store.dispatch({ 
            type: StoreActions.newsUpdate,
            payload: stories.data.results
        })
    
    }, fetchOptions, nytQuery, store)
}