import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI, OpenAPI } from '../../config'

export const getText = async (dispatch, predictions) => {

    dispatch({ 
        type: StoreActions.textInit
    });

    const searchText = "A " + predictions[Math.floor(Math.random() * predictions.length)];

    const content = {
        "prompt": searchText,
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

        // console.log(response.choices[0].text)
        dispatch({ 
            type: StoreActions.textCreate,
            payload: searchText + " " + foundText
        });
    }, fetchOptions, RemoteAPI.openAPIGeneration)
}