import { UIText } from '../config'

export const About = () => {

    return (
        <>
            <h2>{UIText.appTitleAbout}</h2>
            <div id="seperator">&nbsp;</div>
            <div dangerouslySetInnerHTML={{__html: UIText.appTextAbout}} />
        </>
    )
}