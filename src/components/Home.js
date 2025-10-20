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

        <div className="inner-content">
            <p><span id="title">{UIText.appTitle}</span> {UIText.appTextAbout} <Link to={LocalRoutes.app}>Create</Link>,  using <span id="title">{UIText.appTitle}</span>.</p>
        </div>
    )
}
