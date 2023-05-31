import React, { useState } from "react"
import Authcontext from "./Authcontext"
import { useNavigate } from "react-router-dom"

const AuthProvider = (props)=>{
    const navigate = useNavigate()
    const[add, setAddItems] = useState([])
    const[token,setToken]= useState(localStorage.getItem('token'))
    const[email,setEmail] = useState('')
    //const[updcart, setUpdCart]= useState([])
   
    const isLoggedIn= !!token
    //console.log(isLoggedIn)
   
   const modifiedEmail = email.replace(/[@.]/g, '');
   console.log(modifiedEmail)
    
    const addItemHandler =(item)=>{
      fetch(`https://crudcrud.com/api/9f3ac5056b6f4f87aeaf4571e73169d9/Items${modifiedEmail}`,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            'Content-Type': 'Application/json'
        }
         }).then((response)=>response.json()).then((data) =>{
            setAddItems((previous) =>{
               // console.log(previous)
                return [...previous,data]
            })
         })
           
           
         .catch((error) =>{
            console.log(error)
         })
       
    //   setAddItems((previous) =>{
    //      return [...previous, item]
     
    //  })
    }

    const deleteItemHandler = (id) =>{

    }

    const loginHandler= (token) =>{
        localStorage.setItem('token', token)
       setToken(token)
      }

      const logoutHandler = ()=>{
       localStorage.removeItem('token')
      setToken(null)
      
      }

      setTimeout(() =>{
        console.log('Logeed Out')
        setToken(null)
        navigate('/login')
      },3000000)

        const emailId = (email) =>{
         setEmail(email)
        // console.log(email)
        }

        const addFilteredItem =()=>{
             
        }

        
        const cartItems={
        addFilteredItem :addFilteredItem,
        emailId:emailId,
        items:add,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
        isLogin:loginHandler,
        isLogOut:logoutHandler,
        token:token,
        isLoggedIn:isLoggedIn,
        modifiedEmail: modifiedEmail,
        
    }
return(
    <Authcontext.Provider  value={cartItems}>
       
        {props.children}
    </Authcontext.Provider>
)
}

export default AuthProvider