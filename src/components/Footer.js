import { UIText } from '../config'
import gitHubLogo from '../images/github-mark.png'

export const Footer = () => {
    return (
        <footer>            
            <div id="powered">
                <p><b>{UIText.poweredBy} </b><a href="https://www.flickr.com/" target="_blank">flickr</a>, <a href="https://developer.nytimes.com/apis" target="_blank">New York Times</a>, <a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a> and <a href="https://openrouter.ai/" target="_blank">OpenRouter.</a></p>
            </div>
            <div
                id="copyright"
            >
                <p dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
            </div>
            <div id="github">
                <a href="https://github.com/glowkeeper/storymaker" target="_blank"><img className="footer-icon" src={gitHubLogo} alt="GitHub"/></a>
            </div>
        </footer>
        
    )
}
