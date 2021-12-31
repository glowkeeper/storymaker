import { useEffect, useMemo } from 'react'
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import { Home } from './Home'
import { About } from './About'
import { Images } from './Images'
import { ImageObjects } from './ImageObjects'
import { Story } from './Story'

import { 
    StoreContext,
    rootReducer,
    initialState, 
    useReducerWithThunk 
} from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const App = () => {
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

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
                <StoreContext.Provider value={store}>
                    <Routes>
                        <Route
                            path={LocalRoutes.home}
                            element={<Home />}
                        />
                        <Route
                            path={LocalRoutes.about}
                            element={<About />}
                        />
                        <Route
                            path={LocalRoutes.images}
                            element={<Images />}
                        />
                        <Route
                            path={LocalRoutes.imageObjects}
                            element={<ImageObjects />}
                        />
                        <Route
                            path={LocalRoutes.story}
                            element={<Story />}
                        />
                    </Routes>
                </StoreContext.Provider>
            </main>
        </>
    )
}