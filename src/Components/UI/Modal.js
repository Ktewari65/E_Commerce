import React, { useContext } from "react"
import classes from './Modal.module.css'
import  ReactDOM from "react-dom"
import Authcontext from "../../Store/Authcontext"
  
const Overlay = (props)=>{
    
     const ctx = useContext(Authcontext)
     
     const amount =ctx.items.reduce((curr, item)=>{
          return curr= curr+item.price
},0)

      const cartItem= <ul>
       { ctx.items.map((item,index)=>
       <li key={index}>  Name:{item.title} - Price:{item.price}  -Quantity{item.quantity}</li>
        )
    }
      </ul>
    return(
        
             <div className={classes.modal}> 
             <div>{cartItem}</div>
            <div className={classes.content}>{props.children}</div>
            <div>Total Amount:{amount}</div>
            
            <button onClick={props.onClick}>Close</button>
        </div>
        
    )
}

  const container = document.getElementById('Overlay')

const Modal =(props)=>{
    return(
        <div>
  { ReactDOM.createPortal(<Overlay onClick={props.onClick}>{props.children}</Overlay>, container)}
        </div>
    )

}

export default Modal