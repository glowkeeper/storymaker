import { useEffect, useState } from 'react'

import { Landing } from './Landing'
import { Main } from './Main'
import { Footer } from './Footer'

import { UIText } from '../config'

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
                <>
                    <Main />
                    <Footer />
                </>
            ) : (
                <Landing setHasLanded={setHasLanded} />
            )}
        </>
    )
}