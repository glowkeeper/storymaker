import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { StoreContext, StoreActions } from '../store/store'

import { IO } from '../utils/iO'

import { UIText, LocalRoutes, Remote } from '../config'

export const Login = () => {

  const store = useContext(StoreContext)

  const [feedback, setFeedback] = useState("")
  const [hasNoTitle, setHasNoTitle] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    if (hasNoTitle) {

        store.dispatch({
            type: StoreActions.pageTitleSet,
            payload: UIText.appTitleLogin
        })
        setHasNoTitle(false)
    }

}, [store, hasNoTitle])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const giveFeedback = (message) => {
    
    //console.log('got message from server', message)
    if (message?.data?.access_token) {

      setFeedback(UIText.loginFeedbackOk)
      
      store.dispatch({
        type: StoreActions.login,
        payload: message.data
      })  

      setTimeout(() => {           
             
        navigate(LocalRoutes.app)
        
      }, 2000)

    } else {

      // oh dear
      setFeedback(UIText.loginFeedbackError)

      setTimeout(() => {           
             
        navigate(LocalRoutes.home)
        
      }, 10000)

    } 
  }

  const sendLogin = (data) => {

    const loginData = {
      email: data.email,
      password: data.password
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    IO.getData(giveFeedback, fetchOptions, process.env.REACT_APP_HOSTNAME + process.env.REACT_APP_DBASE + Remote.login, store)
  } 

  const onSubmit = async (data) => {
    sendLogin(data)
  }

  return (

    <>
      { feedback ? (

        <p dangerouslySetInnerHTML={{__html: feedback}}></p>

      ) : (

        <>
          <form onSubmit={handleSubmit(onSubmit)}>  

            <div id="login-form">
              <label 
                htmlFor={UIText.loginForm.email}
              >
                {`${UIText.loginForm.email}:`}
              </label>
              <input 
                type="text" 
                name={UIText.loginForm.email} 
                {
                  ...register(UIText.loginForm.email, 
                  { 
                    required: { 
                      value: true,
                      message: UIText.loginForm.requiredError
                    },
                    validate: (val) => {
                      if (!val.includes('@')) {
                        return UIText.loginForm.emailError;
                      }
                    }, 
                  })
                }
              />
              {errors[UIText.loginForm.email] && <p>{UIText.loginForm.emailError}</p>}
            </div>

            <div id="login-form">

              <label 
                htmlFor={UIText.loginForm.password}
              >
                {`${UIText.loginForm.password}:`}
              </label>
              <input 
                type="password" 
                name={UIText.loginForm.password} 
                {...register(UIText.loginForm.password, { 
                  required: { 
                    value: true,
                    message: UIText.loginForm.passwordError
                  },
                })}
              />
              {errors[UIText.loginForm.password] && 
                <p>{UIText.loginForm.passwordError}</p>
              }
            </div>

            <button
              id="login-button"
              type="submit" 
            >
              {UIText.login}
            </button>
          </form>
        </>
      )}        
    </>
  );
}