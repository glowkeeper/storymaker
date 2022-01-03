import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import { Home } from './Home'
import { About } from './About'
import { Images } from './Images'
import { ImageObjects } from './ImageObjects'
import { Text } from './Text'

import { 
    StoreContext,
    rootReducer,
    initialState, 
    useReducerWithThunk 
} from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Main = () => {
    const [pageTitle, setPageTitle] = useState("")
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

    useEffect(() => {
        setPageTitle(store.state.pageTitle)
    }, [store.state.pageTitle]);

    return (    
        <>
            <main>
                <div id="navBar">
                    <h3 id="title">{pageTitle}</h3>                
                    <nav id="links">
                        <Link to={LocalRoutes.home}>{UIText.linkHome}</Link>
                        <Link to={LocalRoutes.about}>{UIText.linkAbout}</Link>
                    </nav>
                </div>
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
                            path={LocalRoutes.text}
                            element={<Text />}
                        />
                    </Routes>
                </StoreContext.Provider>
            </main>
        </>
    )
}