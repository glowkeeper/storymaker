import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext, StoreActions, initAPIKeys } from '../store/store'


import { LocalRoutes, UIText } from '../config'

export const Settings = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)
    const [hasNoKeys, setHasNoKeys] = useState(true)
    const [keys, setKeys] = useState(initAPIKeys)

    const navigate = useNavigate()
    const settingsStore = window.localStorage;

    useEffect(() => {
        
        if (hasNoKeys) {

            setKeys(store.state.aPIKeys)
            setHasNoKeys(false)
        }

    }, [store, hasNoKeys])
    
    useEffect(() => {
    
        if( hasNoTitle ) {
            
            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleSettings
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    const handleChangeKey = (event) => {
            
        const name = event.target.name
        const value = event.target.value
        setKeys({...keys, [name]: value})

    }

    const handleClickClear = () => {
        setKeys(initAPIKeys)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        for (const [key, value] of Object.entries(keys)) {
            settingsStore.setItem(key, value);
            store.dispatch({
                type: StoreActions.aPIKeysUpdate,
                payload: {
                    key: key,
                    value: value
                }
            })
        }
        navigate(LocalRoutes.home)
    }

    return (
        <>
            <p>To use <span id="title">{UIText.appTitle}</span>, you will need a <a href="https://www.flickr.com/services/api/misc.api_keys.html" target="_blank" rel="noreferrer">Flickr API Key</a>, a <a href="https://developer.nytimes.com/docs/top-stories-product/1/overview" target="_blank" rel="noreferrer">New York Times Top Stories API Key</a> and an <a href="https://beta.openai.com/signup" target="_blank" rel="noreferrer">OpenAI Developer Key</a>. Once you have those, paste them into the form below.</p> 
            <p>(Please note - <a href="https://openai.com/" target="_blank" rel="noreferrer" >OpenAI</a> is not free)</p>
            <form onSubmit={handleSubmit}>
                <div id="settings-grid">
                    <div id="settings-input">
                        <label className="settings-label" htmlFor="flickr">{UIText.inputFlickrKey}:</label>
                        <input
                            className="settings-input"
                            type="text"
                            id="flickr"
                            name="flickr"
                            required
                            onChange={handleChangeKey}
                            value={keys.flickr}
                        />                    
                    </div>
                    <div id="settings-input">
                        <label className="settings-label" htmlFor="nYT">{UIText.inputNYTKey}:</label>
                        <input
                            className="settings-input"
                            type="text"
                            id="nYT"
                            name="nYT"
                            required
                            onChange={handleChangeKey}
                            value={keys.nYT}
                        />
                    </div>
                    <div id="settings-input">
                        <label className="settings-label" htmlFor="openAI">{UIText.inputOpenAIKey}:</label>
                        <input
                            className="settings-input"
                            type="text"
                            id="openAI"
                            name="openAI"
                            required
                            onChange={handleChangeKey}
                            value={keys.openAI}
                        />
                    </div>
                    <div>
                        <button id="app-button" type="submit">{UIText.buttonSubmit}</button>
                        &nbsp;
                        <button id="app-button" onClick={handleClickClear}>{UIText.buttonClear}</button> 
                    </div>
                </div>
                <div id="seperator">&nbsp;</div>
            </form>
        </>        
    )
}
