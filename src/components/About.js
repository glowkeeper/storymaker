import { UIText } from '../config'

export const About = () => {

    return (
        <>
            <h3>{UIText.appTitleAbout}</h3>
            <div dangerouslySetInnerHTML={{__html: UIText.appTextAbout}} />
        </>
    )
}