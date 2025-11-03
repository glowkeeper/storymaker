import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { StoreContext, StoreActions } from '../store/store'

import { UIText, LocalRoutes } from '../config'

export const Freestyle = () => {

  const store = useContext(StoreContext)

  const [hasNoTitle, setHasNoTitle] = useState(true)     
  // eslint-disable-next-line
  const [error, setError] = useState("")

  const persona = 'persona'
  const context = 'context'
  const synopsis = 'synopsis'
  const style = 'style'
  const constraints = 'constraints'

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [persona]: 'You are a short story writer. ', 
      [context]: 'Create an engaging story suitable for a general audience of short story readers. ', 
      [synopsis]: '', 
      [style]: 'The story should enthral and excite. ', 
      [constraints]: 'Avoid any concepts that may offend. '
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

  const onSubmit = async (data) => {
    console.log('submit', data) 

    store.dispatch({
        type: StoreActions.errorInit
    })

    store.dispatch({
        type: StoreActions.textInputInit
    })

    store.dispatch({
        type: StoreActions.textIniconstraintst
    })

    store.dispatch({
        type: StoreActions.textPromptSet,
        payload: data[persona] + data[context] + data[style] + data[constraints]
    })

    store.dispatch({
        type: StoreActions.textInputCreate,
        payload: [data[synopsis]]
    })

    reset({
      [persona]: 'You are a short story writer. ', 
      [context]: 'Create an engaging story suitable for a general audience of short story readers. ', 
      [synopsis]: '', 
      [style]: 'The story should enthral and excite. ', 
      [constraints]: 'Avoid any concepts that may offend. '
    })
    navigate(LocalRoutes.genre)
  }

  //" Acting as a short story writer, create a story from the text following the genre of the story to write."

  return (

    <>

      { error ? (

        <p>{error}</p>

      ) : (

        <div className="inner-content">
            <form onSubmit={handleSubmit(onSubmit)}>  

              <p>create your AI prompt:</p>
              
              <div id="freestyle-form">

                <label 
                  htmlFor={persona}
                >
                  persona
                </label>
                <textarea
                  id={persona}               
                  autoFocus
                  {...register(persona, { required: true })}
                />
                {errors[persona] && <p>{UIText.userPromptError}</p>}

                <label 
                  htmlFor={context}
                >
                  context
                </label>
                <textarea
                  id={context}               
                  autoFocus
                  {...register(context, { required: true })}
                />
                {errors[context] && <p>{UIText.userPromptError}</p>}

                <label 
                  htmlFor={synopsis}
                >
                  synopsis
                </label>
                <textarea
                  id={synopsis}               
                  autoFocus
                  {...register(synopsis, { required: true })}
                />
                {errors[synopsis] && <p>{UIText.userPromptError}</p>}

                <label 
                  htmlFor={style}
                >
                  style
                </label>
                <textarea
                  id={style}               
                  autoFocus
                  {...register(style, { required: false })}
                />
                {errors[style] && <p>{UIText.userPromptError}</p>}

                <label 
                  htmlFor={constraints}
                >
                  constraints
                </label>
                <textarea
                  id={constraints}               
                  autoFocus
                  {...register(constraints, { required: false })}
                />
                {errors[constraints] && <p>{UIText.userPromptError}</p>}

                <button
                  id="freestyle-button"
                  type="submit" 
                >
                  {UIText.buttonSubmit}
                </button>
              </div>
            </form>    
        </div>
      )}
    </>
  )
}