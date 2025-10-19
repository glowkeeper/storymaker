import { useMemo } from 'react'
import { Route, Routes } from "react-router"

import { Header } from './Header'
import { Home } from './Home'
import { StoryMaker } from './StoryMaker'
import { Login } from './Login'
import { Freestyle } from './Freestyle'
import { Images } from './Images'
import { ImageObjects } from './ImageObjects'
import { News } from './News'
import { NewsHeadlines } from './NewsHeadlines'
import { Genre } from './Genre'
import { Text } from './Text'
import { Footer } from './Footer'

import { 
    StoreContext,
    rootReducer,
    initialState,
    useReducerWithThunk 
} from '../store/store'

import { LocalRoutes } from '../config'

export const Main = () => {
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

    return (  
        <>
            <StoreContext.Provider value={store}>
                <Header />
                <main>
                    <Routes>
                        <Route
                            path={LocalRoutes.home}
                            element={<Home />}
                        />
                        <Route
                            path={LocalRoutes.login}
                            element={<Login />}
                        />
                        <Route
                            path={LocalRoutes.app}
                            element={<StoryMaker />}
                        />
                        <Route
                            path={LocalRoutes.freestyle}
                            element={<Freestyle />}
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
                            path={LocalRoutes.news}
                            element={<News />}
                        />
                        <Route
                            path={LocalRoutes.newsHeadlines}
                            element={<NewsHeadlines />}
                        />
                        <Route
                            path={LocalRoutes.genre}
                            element={<Genre />}
                        />
                        <Route
                            path={LocalRoutes.text}
                            element={<Text />}
                        />
                    </Routes>
                </main>    
            </StoreContext.Provider>        
            <Footer />
        </>
    )
}