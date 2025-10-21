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
            <p>Created by <a href="https://huckle.studio/" target="_blank" rel="noreferrer">Dr Steve Huckle</a>, <span id="title">{UIText.appTitle}</span> {UIText.appTextAbout}</p>
        </div>
    )
}
