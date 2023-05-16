import React from "react"
import classes from './Modal.module.css'
import  ReactDOM from "react-dom"
  
const Overlay = (props)=>{
    return(
        
             <div className={classes.modal}> 
             <h1>Cart Items</h1>
            <div className={classes.content}>{props.children}</div>
            <button onClick={props.onClick}>Close</button>
        </div>
        
    )
}

  const container = document.getElementById('Overlay')

const Modal =(props)=>{
    return(
        <div>
  { ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, container)}
        </div>
    )

}

export default Modal