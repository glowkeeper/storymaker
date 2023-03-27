import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        if ( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleHome
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    useEffect(() => {

        // console.log('in here')

        let disabled = false;
        const aPIKeyValues = Object.values(store.state.aPIKeys)
        for(let i = 0; i < aPIKeyValues.length; i++) {
            const thisValue = aPIKeyValues[i]
            if (thisValue.length === 0) {
                disabled = true
                break;
            } else {
                disabled = false
            }
        }
        setDisabled(disabled)

    }, [store])

    return (
        <div id="centered">
            <div id="centered-items"> 
                <button
                    id={disabled ? "disabled-app-button" : "app-button"}
                    disabled={disabled}
                    onClick={() => navigate(LocalRoutes.images)}
                >
                    {UIText.appImagesButtonText}
                </button>                  
                <p>Or:</p>
                <button
                    id={disabled ? "disabled-app-button" : "app-button"}
                    disabled={disabled}
                    onClick={() => navigate(LocalRoutes.news)}
                >
                    {UIText.appNewsButtonText}
                </button>  
                {disabled && <p>(Before you can use <span id="title">{UIText.appTitle}</span>, you will need a <a href="https://www.flickr.com/services/api/misc.api_keys.html" target="_blank" rel="noreferrer">Flickr API Key</a>, a <a href="https://developer.nytimes.com/docs/top-stories-product/1/overview" target="_blank" rel="noreferrer">New York Times Top Stories API Key</a> and an <a href="https://beta.openai.com/signup" target="_blank" rel="noreferrer">OpenAI Key</a>, which you input via the <Link to={LocalRoutes.settings}>{UIText.linkSettings}</Link> page)</p>}  
            </div>  
        </div>
    )
}
