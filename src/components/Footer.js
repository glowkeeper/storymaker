import { UIText } from '../config'

export const Footer = () => {
    return (
        <footer>
            <p dangerouslySetInnerHTML={{__html: UIText.appCopyright}}></p>
        </footer>
        
    )
}
