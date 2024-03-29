import { StoreActions } from '../store'
import { IO, openaiQuery } from '../../utils/iO'

export const getText = async (store, systemPrompt, userPrompt, isInit = false) => {

    //console.log('got text', systemPrompt, userPrompt)
    
    const content = {
        "systemPrompt": systemPrompt,
        "userPrompt": userPrompt
    }

    //console.log('content', content)

    const fetchOptions = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(content)
    }

    IO.getData( async (response) => {

        //console.log('I found', response)

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

            foundText = response.data.choices[0]?.message?.content 
            const stopIndex = foundText.lastIndexOf('.');
            if (stopIndex !== -1 ) {
                foundText = foundText.slice(0, stopIndex + 1)
            }

            if (isInit) {
                foundText = userPrompt + " " + foundText
                type = StoreActions.textCreate            
            } 

            payload.push(foundText);
            store.dispatch({ 
                type: type,
                payload: payload
            });
        }
    }, fetchOptions, openaiQuery)
}