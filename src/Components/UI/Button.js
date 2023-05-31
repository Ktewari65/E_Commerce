//import Authcontext from "../../Store/Authcontext"
import React from "react";
//import { useContext } from "react";
import classes from './Button.module.css'

const Button = (props) =>{


    //const ctx = useContext(Authcontext)
    var quantity=0;
     // console.log(ctx)
  
          props.items.forEach((item) =>{
           // console.log(item.quantity)
              quantity=  quantity + Number(item.quantity)
          })
      
    return (
        <div>
             <button className={classes.btn} onClick={props.onClick}>Cart
       
          <span>{quantity}</span>
          </button>
       
        </div>
    )

}
 export default Button