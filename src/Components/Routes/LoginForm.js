import React, { useContext, useState } from "react"
import classes from './LoginForm.module.css'
import Authcontext from "../../Store/Authcontext"
import { useNavigate } from "react-router-dom"



const LoginForm = () =>{

   const navigate = useNavigate()
    const authCtx= useContext(Authcontext)
  const[email, setEmail] = useState('')
  const[password,setPassword ] = useState('')
  const[isLogin, setIsLogin] = useState(true)
  const[isLoading, setIsLoading] = useState(false)
  
  
  const switchHandler = () =>{
    setIsLogin((preState) =>!preState)
  }

  const emailHandler = (event) =>{
   setEmail(event.target.value)
    }
    authCtx.emailId(email)
    console.log(email)
  
  const passwordHandler = (event) =>{
    setPassword(event.target.value)
 }
  const formSubmitHandler = (event) =>{
    event.preventDefault()
    let url = ''
    setIsLoading(true)
    if(isLogin){
     url=   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnqQP9f32IL2j6mJXROQToI-RXb3aCLLA'
    }
    else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnqQP9f32IL2j6mJXROQToI-RXb3aCLLA'
    }

  
    fetch(url,{
        method: 'POST',
        body : JSON.stringify({
        email:email,
        password:password,
        returnSecureToken: true
        }),
        headers:{
            'Content-Type': 'Application/json'
        }
    }).then((response)=>{
     // console.log(response)
     setIsLoading(false)
        if(response.ok){
      return response.json()
        }
        else{
            return response.json().then((data)=>{
                const error = data.error.message 
                alert(error)
                console.log(error)
                throw new Error(error)
            })
        }
    }).then((data)=>{
        //console.log(data.idToken)
     authCtx.isLogin(data.idToken)
     navigate('/')
  
    }).catch((err) =>{
       return err.message
       
    })
 }

    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.title}>Login Form</div>
            <form className={classes.auth} onSubmit={formSubmitHandler}>
                    <div className={classes.control} >                                            {/*    className={classes.control} */}
                <label className={classes.fas}> Email-Id</label>
                <input type="text"  onChange={emailHandler}></input>
                </div>
                <div className={classes.control}>
                <label>Password</label>
                <input type="text"  onChange={passwordHandler} ></input>
                <button className={classes.signuplink}>{isLogin ? 'Login' : 'Create Account'}</button>
                { isLoading && <p>Loading.....</p> }
                <button className={classes.toggle} onClick={switchHandler}>{isLogin ?  'Create new account': 'Login with existing account' }</button>
              </div>
            </form>
            </div>
        </div>
    )

}
 export default LoginForm