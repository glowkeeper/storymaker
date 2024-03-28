import { StoreActions } from '../store'
import { IO } from '../../utils/iO'
import { Remote, OpenAI } from '../../config'

export const getText = async (store, text, isInit = false) => {

    //console.log('got text', text)
    
    const content = {
        "systemPrompt": OpenAI.textSystemPrompt,
        "userPrompt": text
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
                foundText = text + " " + foundText
                type = StoreActions.textCreate            
            } 

            payload.push(foundText);
            store.dispatch({ 
                type: type,
                payload: payload
            });
        }
    }, fetchOptions, process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.openai)
}