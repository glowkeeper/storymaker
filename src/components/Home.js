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

            <p>To use <span id="title">{UIText.appTitle}</span>, you will need to <Link to={LocalRoutes.login}>{UIText.linkLogin}</Link> to your account. Accounts are available by emailing <a href="https://glowkeeper.github.io/">Dr Steve Huckle</a> at steve.huckle@gmail.com and offering him a small donation.</p>
        </>
    )
}
