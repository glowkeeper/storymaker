import React, { useMemo } from 'react'

import { Images } from './Images'

import { 
    StoreContext,
    rootReducer,
    initialState, 
    useReducerWithThunk 
} from '../store/store'

export const Home = () => {
    const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)

    const store = useMemo(() => {
        return { state: state, dispatch: dispatch }
    }, [state, dispatch])

    return (
        <>
            <StoreContext.Provider value={store}>
                <Images />
            </StoreContext.Provider>
        </>
    )
}
