import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    const store = useContext(StoreContext)
    const [hasNoTitle, setHasNoTitle] = useState(true)

    useEffect(() => {

        if ( hasNoTitle ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleHome
            })
            setHasNoTitle(false)
        }

    }, [store, hasNoTitle])

    return (

        <>
            <p><span id="title">{UIText.appTitle}</span> {UIText.appTextAbout}</p>

            <p>To use <span id="title">{UIText.appTitle}</span>, you will need an account. If you have an account, please <Link to={LocalRoutes.login}>{UIText.linkLogin}</Link>. Otherwise, if you'd like an account, please contact <a href="https://glowkeeper.github.io/">Dr Steve Huckle</a> at steve.huckle@gmail.com.</p>

            <p>The <a href="https://github.com/glowkeeper/storymaker" target="_blank" rel="noreferrer">source code</a> for <span id="title">{UIText.appTitle}</span> is available under a Creative Commons <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer">Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND)</a> license.</p>
            <p><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer"><img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" alt="CC BY-NC-ND"/></a></p>
        </>
    )
}
