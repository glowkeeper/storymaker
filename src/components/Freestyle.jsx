import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes, OpenAI } from '../config'

const userPromptId = 'user-prompt'

export const Freestyle = () => {

  const store = useContext(StoreContext)

  const [hasNoTitle, setHasNoTitle] = useState(true)     
  const [error, setError] = useState("")

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [userPromptId]: ''
    }
  })

  const navigate = useNavigate()

  useEffect(() => {

    if (hasNoTitle) {

        store.dispatch({
            type: StoreActions.pageTitleSet,
            payload: UIText.appTitleFreestyle
        })
        setHasNoTitle(false)
    }

  }, [store, hasNoTitle])

  useEffect(() => {

    if( !store.state.user.access_token )
    {
        setError(UIText.appTextNoAccount)
        setTimeout(() => {        
                      
            navigate(LocalRoutes.home) 
        
        }, 2000)     
    }

  }, [store, navigate])

  const onSubmit = async (data) => {
    //console.log('submit', data) 
    //console.log('sentence', sentence)

    store.dispatch({
        type: StoreActions.errorInit
    })

    store.dispatch({
        type: StoreActions.textPromptSet,
        payload: OpenAI.freestyleSystemPrompt
    })

    store.dispatch({
        type: StoreActions.textInputCreate,
        payload: [data[userPromptId]]
    })

    reset({[userPromptId]: ''})
    navigate(LocalRoutes.text)
  }

  return (

    <>

      { error ? (

        <p>{error}</p>

      ) : (

        <div className="inner-content">
            <form onSubmit={handleSubmit(onSubmit)}>  
              
              <div id="login-form">

                <label 
                  htmlFor={userPromptId}
                >
                  {`${UIText.userPrompt}:`}
                </label>
                <textarea
                  id={userPromptId}               
                  autoFocus
                  {...register(userPromptId, { required: true })}
                />
                {errors[userPromptId] && <p>{UIText.userPromptError}</p>
                }
              </div>

              <button
                id="login-button"
                type="submit" 
              >
                {UIText.buttonSubmit}
              </button>
            </form>    
        </div>
      )}
    </>
  )
}