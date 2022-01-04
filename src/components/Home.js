import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleHome
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    return (
        <div id="centered">
            <div id="centered-items">   
                <p>More coming soon. Meanwhile:</p>
                <button
                    id="app-button"
                    onClick={() => navigate(LocalRoutes.images)}
                >
                    {UIText.appImagesButtonText}
                </button>   
            </div>  
        </div>
    )
}
