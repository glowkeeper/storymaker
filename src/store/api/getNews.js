import { StoreActions } from '../store'

import { IO } from '../../utils/iO'

import { Remote } from '../../config'

export const getNews = (store, topic) => {

    store.dispatch({ 
        type: StoreActions.newsInit
    });

    const nytQuery = `${Remote.nYTTopStoriesAPI}/${topic}.json?api-key=${process.env.REACT_APP_NYT}`

    const fetchOptions = {}

    // const fetchOptions = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": 'application/json',
    //         "Authorization": `Bearer ${store.state.user.access_token}`
    //     },
    //     body: JSON.stringify(content)
    // }

    IO.getData(stories => {

        //console.log('stories', stories)

        store.dispatch({ 
            type: StoreActions.newsUpdate,
            payload: stories.results
        })
    
    }, fetchOptions, nytQuery, store)
}