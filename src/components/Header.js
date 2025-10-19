import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"

import { StoreContext, StoreActions } from '../store/store'

import { IO } from '../utils/iO'

import { UIText, LocalRoutes, Remote } from '../config'

export const Header = () => {
    const store = useContext(StoreContext)

    const [pageTitle, setPageTitle] = useState("")

    useEffect(() => {
        setPageTitle(store.state.pageTitle)
    }, [store]);

    const doLogout = async () => {
        
        store.dispatch({
            type: StoreActions.logout,
            payload: {}
        })
    }

    const logout = () => {   

        const logoutData = {
            'refresh_token': store.state.user.refresh_token,
            "mode": "json"
        }

        const fetchOptions = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(logoutData)
        }
      
        IO.getData( doLogout, fetchOptions, process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.logout, store)
    }     

    return (
        
        <header> 
            <h3 id="page-title">{pageTitle}</h3>   
            <h1 id="title">{UIText.appTitle}</h1>               
            <nav id="links">
                <>
                    { store.state.user.access_token ? (

                        <>
                            { pageTitle === UIText.linkHome ? (

                                <>&nbsp;</>

                            ): (

                                <Link to={LocalRoutes.home}>{UIText.linkHome}</Link>

                            )}                            
                            
                            <Link
                                to={LocalRoutes.app}
                            >
                                {UIText.linkStoryMaker}
                            </Link>                             
                            <Link
                                to={LocalRoutes.home}
                                onClick={() => logout()}
                            >
                                {UIText.linkLogout}
                            </Link>
                        </>        

                    ) : (
                        <>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <Link to={LocalRoutes.login}>{UIText.linkLogin}</Link>
                        </>
                    )}
                </>
            </nav>
        </header>
        
    )
}
