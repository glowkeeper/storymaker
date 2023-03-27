import { compose } from 'ramda'

import { StoreActions } from '../store'

import { IO, nYTQuery } from '../../utils/iO'

export const getNews = (store, topic) => {

    store.dispatch({ 
        type: StoreActions.newsInit
    });

    const get = compose(IO.getData(stories => {

        console.log('stories', stories)
        if (stories.results?.length > 0) {

            store.dispatch({ 
                type: StoreActions.newsUpdate,
                payload: stories.results
            });
        }
        return stories
    
    }, null), nYTQuery);


    const nYTAPIKey = store.state.aPIKeys.nYT
    if ( nYTAPIKey ) {
        get(nYTAPIKey, topic)
    }
}