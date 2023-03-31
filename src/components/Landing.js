import { UIText } from '../config'

export const Landing = (props) => {
    const {setHasLanded} = props

    return (    
        <div id="centered">
            <div id="centered-items">
                <div id="heading-fadeIn">
                    <h1>{UIText.appTitle}</h1>
                </div>
                <div id="catchprhase-fadeIn">
                    <h2>{UIText.appCatchphrase}</h2>
                </div>
                <div id="powered-fadeIn">
                    <p><b>{UIText.poweredBy}</b></p>
                </div>
                <div id="powered-fadeIn">
                    <p><a href="https://www.flickr.com/">flickr</a>, <a href="https://developer.nytimes.com/apis">New York Times</a>, <a href="https://www.tensorflow.org/">TensorFlow</a> and <a href="https://openai.com/">OpenAI</a></p>
                </div>
                <div id="landing-button-fadeIn">
                    <p>
                        <button
                            id="app-button"
                            onClick={() => setHasLanded(true)}
                        >
                            {UIText.appLandingButtonText}
                        </button>
                    </p>
                </div> 
            </div>
        </div>
    )
}