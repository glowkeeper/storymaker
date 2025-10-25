import { useEffect, useContext, useState } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { UIText } from '../config'

export const About = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    useEffect(() => {

        if ( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleAbout
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    return (

        <div className="inner-content">
            <p>Created by <a href="https://huckle.studio/" target="_blank" rel="noreferrer">Dr Steve Huckle</a>. <span id="title">{UIText.appTitle}</span> {UIText.appTextAbout}</p>

            <p>This build of <span id="title">{UIText.appTitle}</span> is using a free large language model from <a href="https://openrouter.ai/" target="_blank" rel="noreferrer">OpenRouter</a>, which is rate limited. Hence, the text can take a while to generate. If you'd like <span id="title">{UIText.appTitle}</span> to use a paid model, and are willing to fund that, please speak with <a href="https://huckle.studio/" target="_blank" rel="noreferrer">Dr Huckle</a>. </p>
            
            <p>Another option for faster text generation is to clone the source code via the GitHub link in the footer and push up a site featuring a build with a paid model; you are free to do that because the source code for <span id="title">{UIText.appTitle}</span> features a  <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a> license, which lets you distribute, remix, tweak, and build upon the <span id="title">{UIText.appTitle}</span> source code (even commercially), as long as you credit <a href="https://huckle.studio/" target="_blank" rel="noreferrer">Dr Steve Huckle</a> for the original work. You may also speak with <a href="https://huckle.studio/" target="_blank" rel="noreferrer">Dr Huckle</a>, if you would like help creating that new build.</p>
        </div>
    )
}
