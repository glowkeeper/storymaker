import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const StoryMaker = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [disabled, setDisabled] = useState(false)

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

    useEffect(() => {

        //console.log('token', store.state, store.state.user.user_token)

        let disabled = true;
        if( store.state.user.access_token )
        {
            disabled = false            
        }
        setDisabled(disabled)

    }, [store])

    return (
        <div class="inner-content">
            {disabled ? (
                <p dangerouslySetInnerHTML={{__html: UIText.appTextNoAccount}}></p>
            ) : (
                
                <>
                    <p>{`${UIText.appGenerateText}:`}</p>            
                    <button
                        id={disabled ? "disabled-app-button" : "app-button"}
                        disabled={disabled}
                        onClick={() => navigate(LocalRoutes.images)}
                    >
                        {UIText.appImagesButtonText}
                    </button> 
                    <button
                        id={disabled ? "disabled-app-button" : "app-button"}
                        disabled={disabled}
                        onClick={() => navigate(LocalRoutes.news)}
                    >
                        {UIText.appNewsButtonText}
                    </button>  
                </>

            )}  
        </div>
    )
}
