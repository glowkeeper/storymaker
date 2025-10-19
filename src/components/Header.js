import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Header = () => {
    const store = useContext(StoreContext)

    const [pageTitle, setPageTitle] = useState("")

    useEffect(() => {
        setPageTitle(store.state.pageTitle)
    }, [store])

    return (
        
        <header> 
            <h3 id="page-title">{pageTitle}</h3>   
            <h1 id="title">{UIText.appTitle}</h1>                           
            <nav id="links">                   

                <>
                    { pageTitle === UIText.linkHome ? (

                        <>
                            <>&nbsp;</>
                            <Link
                                to={LocalRoutes.about}
                            >
                                {UIText.linkAbout}
                            </Link>
                        </>

                    ) : (

                        <>

                            <Link to={LocalRoutes.home}>{UIText.linkHome}</Link>
                            <Link
                                to={LocalRoutes.about}
                            >
                                {UIText.linkAbout}
                            </Link>
                        </>

                    )} 
                </>  
            </nav>
        </header>
        
    )
}
