import React, { useState } from "react"
import Authcontext from "./Authcontext"
const AuthProvider = (props)=>{
    const[add, setAddItems] = useState([])

    const addItemHandler =(item)=>{
       // console.log(item)
     setAddItems((previous) =>{
      //  console.log(previous)
        return [...previous, item]
     })
    }

    const deleteItemHandler = (id) =>{

    }


    const cartItems={
        items:add,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
        message:'Products'
    }
return(
    <Authcontext.Provider  value={cartItems}>
        {props.children}
    </Authcontext.Provider>
)
}

export default AuthProvider