import { useEffect } from 'react'
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import { Images } from './Images'
import { About } from './About'

import { UIText, LocalRoutes } from '../config'

export const App = () => {

    useEffect(() => {
        const prevTitle = document.title;
        document.title = UIText.appTabTitle;
        return () => {
            document.title = prevTitle;
        };
    });

    return (    
        <>
            <header>
                <h1>{UIText.appTitle}</h1>
                <nav>
                    <Link to={LocalRoutes.home}>{UIText.linkHome}</Link>
                    <Link to={LocalRoutes.about}>{UIText.linkAbout}</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route
                        path={LocalRoutes.home}
                        element={<Images />}
                    />
                    <Route
                        path={LocalRoutes.about}
                        element={<About />}
                    />
                </Routes>
            </main>
        </>
    )
}