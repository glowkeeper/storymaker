import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI } from '../../config'

export const getText = async (dispatch, predictions) => {

    const myText = predictions.join(' ')
    const content = {
        "prompt": myText,
        "max_tokens": 256
    }

    const fetchOptions = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${RemoteAPI.openAPIKey}`
        },
        body: JSON.stringify(content)
    }

    IO.getData( async (response) => {

        // console.log(response.choices[0].text)
        dispatch({ 
            type: StoreActions.textCreate,
            payload: response.choices[0].text
        });
    }, fetchOptions, RemoteAPI.openAPIGeneration)
}