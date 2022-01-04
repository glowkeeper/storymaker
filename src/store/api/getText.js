import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI, OpenAPI } from '../../config'

export const getText = async (dispatch, text, isInit = false) => {

    /* dispatch({ 
        type: StoreActions.textInit
    });*/

    const content = {
        "prompt": text,
        "max_tokens": OpenAPI.maxTokens,
        "temperature": OpenAPI.temperature
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

        let foundText = response.choices[0].text
        const stopIndex = foundText.lastIndexOf('.');
        if (stopIndex !== -1 ) {
            foundText = foundText.slice(0, stopIndex + 1)
        }

        let type = StoreActions.textUpdate
        if (isInit) {
            foundText = text + " " + foundText
            type = StoreActions.textCreate            
        } 

        const payload = [];
        payload.push(foundText);
        dispatch({ 
            type: type,
            payload: payload
        });
    }, fetchOptions, RemoteAPI.openAPIGeneration)
}