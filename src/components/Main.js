import { useMemo, useEffect, useState } from 'react'
import { Route, Routes } from "react-router"
import { useNavigate } from 'react-router-dom'

import { NavBar } from './NavBar'
import { Home } from './Home'
import { About } from './About'
import { Settings } from './Settings'
import { Images } from './Images'
import { ImageObjects } from './ImageObjects'
import { News } from './News'
import { NewsHeadlines } from './NewsHeadlines'
import { Text } from './Text'
import { Footer } from './Footer'

import { 
    StoreContext,
    StoreActions,
    rootReducer,
    initialState, 
    initAPIKeys,
    useReducerWithThunk 
} from '../store/store'

import { LocalRoutes } from '../config'

export const Main = () => {
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)
    const [needsAPIKeys, setNeedsAPIKeys] = useState(true)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

    const navigate = useNavigate()


    useEffect(() => {

        if (needsAPIKeys) {

            const settingsStore = window.localStorage;
            const myAPIKeys = initAPIKeys
            Object.keys(myAPIKeys).forEach(key => {
                const myKeyValue = settingsStore.getItem(key);
                if (!myKeyValue) {
                    navigate(LocalRoutes.settings)
                } else {
                    store.dispatch({
                        type: StoreActions.aPIKeysUpdate,
                        payload: {
                            key: key,
                            value: myKeyValue
                        }
                    })
                }
                //console.log('my keys are: ', key, myKeyValue)
            })
            setNeedsAPIKeys(false)
        }

    }, [store, needsAPIKeys,navigate])

    return (    
        <>
            <StoreContext.Provider value={store}>
                <NavBar />
                <main>
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
                                path={LocalRoutes.settings}
                                element={<Settings />}
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