import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI } from '../../config'

export const getStory = async (dispatch, predictions) => {

    const myText = predictions.join(' ')
    const content = {
        "text": myText,
        "min_length": 10,
        "max_length": 256
    }

    const fetchOptions = {
        mode: 'no-cors', 
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${RemoteAPI.nlpCloudAPIToken}`
        },
        body: JSON.stringify(content)
    }

    IO.getData( async (response) => {

        console.log(response)
    }, fetchOptions, RemoteAPI.nlpGeneration)
}