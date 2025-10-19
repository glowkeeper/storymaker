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
            <p dangerouslySetInnerHTML={{__html: UIText.appTextAbout }}></p>
        </div>
    )
}
