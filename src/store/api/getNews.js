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
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(content)
    }

    IO.getData(stories => {

        console.log('stories', stories)
        if (stories.data?.results?.length > 0) {

            store.dispatch({ 
                type: StoreActions.newsUpdate,
                payload: stories.data.results
            });
        }
        return stories
    
    }, fetchOptions, nytQuery)
}