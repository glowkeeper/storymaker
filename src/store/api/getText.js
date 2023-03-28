import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { RemoteAPI, OpenAI } from '../../config'

export const getText = async (store, text, isInit = false) => {

    const openAIKey = store.state.aPIKeys.openAI
    if ( openAIKey ) {

        const content = {
            "model": OpenAI.model,
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

            // console.log('I found', response)

            const payload = [];
            let type = StoreActions.textUpdate
            let foundText = ""

            if ( response.hasOwnProperty('error')) {
                
                foundText = response.error.message
                payload.push(foundText);
                store.dispatch({ 
                    type: type,
                    payload: payload
                });

            } else {

                foundText = response.choices[0].text
                const stopIndex = foundText.lastIndexOf('.');
                if (stopIndex !== -1 ) {
                    foundText = foundText.slice(0, stopIndex + 1)
                }

                if (isInit) {
                    foundText = text + " " + foundText
                    type = StoreActions.textCreate            
                } 

                payload.push(foundText);
                store.dispatch({ 
                    type: type,
                    payload: payload
                });
            }
        }, fetchOptions, RemoteAPI.openAIGeneration)
    }
}