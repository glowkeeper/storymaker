import { UIText } from '../config'

export const Footer = () => {
    return (
        <footer>            
            <div id="powered">
                <p><b>{UIText.poweredBy} </b><a href="https://www.flickr.com/">flickr</a>, <a href="https://developer.nytimes.com/apis">New York Times</a>, <a href="https://www.tensorflow.org/">TensorFlow</a> and <a href="https://openrouter.ai/">OpenRouter.</a></p>
            </div>
            <div
                id="copyright"
            >
                <p dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
            </div>
        </footer>
        
    )
}
