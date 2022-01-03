import { useEffect, useContext, useState } from 'react'

import { Link } from "react-router-dom"

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    const store = useContext(StoreContext)
    const [hasNotDispatched, setHasNotDispatched] = useState(true)

    useEffect(() => {

        if( hasNotDispatched ) {

            store.dispatch({
                type: StoreActions.pageTitleSet,
                payload: UIText.appTitleHome
            })
            setHasNotDispatched(false)
        }

    }, [store, hasNotDispatched])

    return (
        <>        
            <Link to={LocalRoutes.images}>{UIText.linkImages}</Link>
        </>
    )
}
