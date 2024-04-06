import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

const systemPromptId = 'system-prompt'
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
      [systemPromptId]: '',
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
    //console.log('topic title', headline)    

    store.dispatch({
        type: StoreActions.errorInit
    })

    store.dispatch({
        type: StoreActions.textPromptSet,
        payload: data[systemPromptId]
    })

    store.dispatch({
        type: StoreActions.textInputCreate,
        payload: data[userPromptId]
    })

    reset({[systemPromptId]: '', [userPromptId]: ''})

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
                  htmlFor={systemPromptId}
                >
                  {`${UIText.systemPrompt}:`}
                </label>
                <textarea
                  id={systemPromptId}
                  {...register(systemPromptId, { required: true })}
                />
                {errors[systemPromptId] && <p>{UIText.systemPromptError}</p>}
              </div>

              <div id="login-form">

                <label 
                  htmlFor={userPromptId}
                >
                  {`${UIText.userPrompt}:`}
                </label>
                <textarea
                  id={userPromptId}
                  {...register(userPromptId, { required: true })}
                />
                {errors[systemPromptId] && <p>{UIText.userPromptError}</p>
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