import { UIText } from '../config'

import { useIsMobile } from '../utils/mobile'
import gitHubLogo from '../images/github-mark.png'

export const Footer = () => {
    return (
        <footer>    

            {useIsMobile() ? (

                <>

                    <div
                        id="copyright"
                    >
                        <p dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
                    </div>
                    <div id="github">
                        <a href="https://github.com/glowkeeper/storymaker" target="_blank" rel="noreferrer"><img className="footer-icon" src={gitHubLogo} alt="GitHub"/></a>
                    </div>

                </>
            ) : (

                <>       
                    <div id="powered">
                        <p><b>{UIText.poweredBy} </b><a href="https://www.flickr.com/" target="_blank" rel="noreferrer">flickr</a>, <a href="https://developer.nytimes.com/apis" target="_blank" rel="noreferrer">New York Times</a>, <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">TensorFlow</a> and <a href="https://openrouter.ai/" target="_blank" rel="noreferrer">OpenRouter.</a></p>
                    </div>
                    <div
                        id="copyright"
                    >
                        <p dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
                    </div>
                    <div id="github">
                        <a href="https://github.com/glowkeeper/storymaker" target="_blank" rel="noreferrer"><img className="footer-icon" src={gitHubLogo} alt="GitHub"/></a>
                    </div>
                </>

            )} 
        </footer>
        
    )
}
