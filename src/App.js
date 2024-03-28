import { useEffect, useState } from 'react'

import { Landing } from './components/Landing'
import { Main } from './components/Main'

import { UIText } from './config'

export const App = () => {
    const [hasLanded, setHasLanded] = useState(false)

    useEffect(() => {
        const prevTitle = document.title;
        document.title = UIText.appTabTitle;
        return () => {
            document.title = prevTitle;
        };
    }, []);

    return (    
        <>
            { hasLanded ? (
                <Main />
            ) : (
                <Landing setHasLanded={setHasLanded} />
            )}
        </>
    )
}