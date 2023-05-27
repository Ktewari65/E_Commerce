import React, { useState } from "react"
import Authcontext from "./Authcontext"
import { useNavigate } from "react-router-dom"
const AuthProvider = (props)=>{
    const navigate = useNavigate()
    const[add, setAddItems] = useState([])
    const[token,setToken]= useState(null)
    const isLoggedIn= !!token
    //console.log(isLoggedIn)
    
    const addItemHandler =(item)=>{
        
     setAddItems((previous) =>{
        return [...previous, item]
     })
    }

    const deleteItemHandler = (id) =>{

    }

    const loginHandler= (token) =>{
        console.log(token)
       setToken(token)
      }

      const logoutHandler = ()=>{
     
      setToken(null)
      
      }

      setTimeout(() =>{
        console.log('Logeed Out')
        setToken(null)
        navigate('/login')
      },20000)

        const cartItems={
        items:add,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
        isLogin:loginHandler,
        isLogOut:logoutHandler,
        token:token,
        isLoggedIn:isLoggedIn
    }
return(
    <Authcontext.Provider  value={cartItems}>
        {props.children}
    </Authcontext.Provider>
)
}

export default AuthProvider