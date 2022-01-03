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
                    <h2>{UIText.poweredBy}</h2>
                </div>
                <div id="landing-button-fadeIn">
                    <button
                        id="app-button"
                        onClick={() => setHasLanded(true)}
                    >
                        {UIText.appLandingButtonText}
                    </button>
                </div> 
            </div>
        </div>
    )
}