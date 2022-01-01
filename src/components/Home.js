import { Link } from "react-router-dom"

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    return (
        <> 
            <h3>{UIText.appTitleHome}</h3>           
            <Link to={LocalRoutes.images}>{UIText.linkImages}</Link>
        </>
    )
}
