import { Link } from "react-router-dom"

import { UIText, LocalRoutes } from '../config'

export const Home = () => {
    return (
        <>            
            <Link to={LocalRoutes.images}>{UIText.linkImages}</Link>
        </>
    )
}
