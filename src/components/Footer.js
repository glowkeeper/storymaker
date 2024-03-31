import { UIText } from '../config'

export const Footer = () => {
    return (
        <footer>
            <p id="source" dangerouslySetInnerHTML={{__html:`<a href="https://github.com/glowkeeper/storymaker" target="_blank" rel="noreferrer">GitHub</a>`}}></p>
            <p  id="copyright" dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
            <p id="cc" dangerouslySetInnerHTML={{__html:`<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer"><img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" alt="CC BY-NC-ND"/></a>`}}></p>
        </footer>
        
    )
}
