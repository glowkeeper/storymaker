import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const StoryMaker = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if ( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitle
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    return (
        <div className="inner-content">
            <p>{`${UIText.appGenerateStory}:`}</p>            
            <button
                id="app-button"
                onClick={() => navigate(LocalRoutes.images)}
            >
                {UIText.appImagesButtonText}
            </button> 
            <button
                id="app-button"
                onClick={() => navigate(LocalRoutes.news)}
            >
                {UIText.appNewsButtonText}
            </button>  
            <button
                id="app-button"
                onClick={() => navigate(LocalRoutes.freestyle)}
            >
                {UIText.appFreestyleButtonText}
            </button>  
        </div>
    )
}
