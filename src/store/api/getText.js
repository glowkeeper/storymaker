import { StoreActions } from '../store'
import { IO } from '../../utils/iO'

import { Remote, OpenRouter } from '../../config'

export const getText = async (store, prompt, isInit = false) => {

    //console.log('got text', prompt, process.env.REACT_APP_OPENROUTER, OpenRouter.model)
    
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER}`,
        'HTTP-Referer': 'https://huckle.studio/storymaker',
        'X-Title': 'Storymaker',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OpenRouter.model,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        reasoning: {
          effort: 'high',
          exclude: true, // Use reasoning but don't include it in the response
        },
      }),
    }

    const openRouterAPI = Remote.openRouterAPI
    
    IO.getData( async (response) => {

        console.log('I found', response)

        const payload = [];
        let type = StoreActions.textUpdate
        let foundText = ""
        
        foundText = response.choices[0]?.message?.content 
        const stopIndex = foundText.lastIndexOf('.')
        if (stopIndex !== -1 ) {
            foundText = foundText.slice(0, stopIndex + 1)
        }

        if (isInit) {
            foundText = prompt + " - " + foundText
            type = StoreActions.textCreate            
        } 

        payload.push(foundText);
        store.dispatch({ 
            type: type,
            payload: payload
        })  
        
    }, fetchOptions, openRouterAPI, store)
}