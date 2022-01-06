import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"

import { StoreContext } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const NavBar = () => {
    const store = useContext(StoreContext)
    const [pageTitle, setPageTitle] = useState("")

    useEffect(() => {
        setPageTitle(store.state.pageTitle)
    }, [store]);

    return (
        
        <div id="navBar">
            <h3 id="title">{pageTitle}</h3>                
            <nav id="links">
                <Link to={LocalRoutes.home}>{UIText.linkHome}</Link>
                <Link to={LocalRoutes.about}>{UIText.linkAbout}</Link>
                <Link to={LocalRoutes.settings}>{UIText.linkSettings}</Link>
            </nav>
        </div>
        
    )
}
