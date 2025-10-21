import { UIText } from '../config'

export const Landing = (props) => {
    const {setHasLanded} = props

    return (  
        <div id="landing">
            <div>
                <h1 className="landing">{UIText.appTitle}</h1>
                <div 
                    id="catchprhase-fadeIn"
                        onAnimationEnd={() => setHasLanded(true)}
                >
                    <h2>{UIText.appCatchphrase}</h2>
                </div>
            </div>
        </div>
    )
}