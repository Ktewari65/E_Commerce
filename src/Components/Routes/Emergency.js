import React, { useState } from "react"
const Emergency = (props) =>{
    const[name,setName] = useState('')
    const[email, setEmail]= useState('')
    const[phone,setPhone]= useState('')

    const nameHandler = (event) =>{
        setName(event.target.value)
    }
    const emailHandler = (event) =>{
        setEmail(event.target.value)
    }
    const phoneHandler = (event) =>{
        setPhone(event.target.value)
    }

    const formSubmitHandler = (event) =>{
           event.preventDefault()
           const formData = {
             name:name,
             email:email,
             phone:phone
           }

           props.comingData(formData)
    } 
return (
     <form onSubmit={formSubmitHandler}>
        <label>Name </label>
        <input type="text"  onChange={nameHandler}/>
        <label>E-Mail</label>
        <input type="text"  onChange={emailHandler}/>
        <label>Phone</label>
        <input type="number" onChange={phoneHandler}/>
        <button>Submit</button>
     </form>
)
}
 export default Emergency