import { useEffect, useContext, useState } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { UIText } from '../config'

export const About = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    useEffect(() => {

        if( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleAbout
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    return (
        <>
            <p><span id="title">{UIText.appTitle}</span> {UIText.appTextAbout}</p>

            <p>To use <span id="title">{UIText.appTitle}</span>, you will need a <a href="https://www.flickr.com/services/api/misc.api_keys.html" target="_blank" rel="noreferrer">Flickr API Key</a>, which will you'll use to get images to classify. You will also need an <a href="https://beta.openai.com/signup" target="_blank" rel="noreferrer">Open AI Key</a> - <a href="https://openai.com/" target="_blank" rel="noreferrer" >Open AI</a> does the text generation.</p>

            <p>The <a href="https://github.com/glowkeeper/storymaker" target="_blank" rel="noreferrer">source code</a> for <span id="title">{UIText.appTitle}</span> is available under a Creative Commons <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer">Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND)</a> license.</p>
            <p><img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" alt="CC BY-NC-ND"/></p>
        </>
    )
}