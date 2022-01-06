import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI, OpenAI } from '../../config'

export const getText = async (store, text, isInit = false) => {

    /* dispatch({ 
        type: StoreActions.textInit
    });*/

    const openAIKey = store.state.aPIKeys.openAI
    if ( openAIKey ) {

        const content = {
            "prompt": text,
            "max_tokens": OpenAI.maxTokens,
            "temperature": OpenAI.temperature
        }

        const fetchOptions = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${openAIKey}`
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
            store.dispatch({ 
                type: type,
                payload: payload
            });
        }, fetchOptions, RemoteAPI.openAIGeneration)
    }
}