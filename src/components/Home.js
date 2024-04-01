import { useEffect, useContext, useState } from 'react'

import { StoreContext, StoreActions } from '../store/store'

import { UIText } from '../config'

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

        <div class="inner-content">
            <p><span id="title">{UIText.appTitle}</span> {UIText.appTextAbout}</p>

            <p dangerouslySetInnerHTML={{__html: UIText.appTextAccount}}></p>
        </div>
    )
}
