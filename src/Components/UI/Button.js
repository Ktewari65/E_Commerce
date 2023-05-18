import Authcontext from "../../Store/Authcontext"
import React from "react";
import { useContext } from "react";

const Button = (props) =>{


    const ctx = useContext(Authcontext)
    var quantity=0;
     // console.log(ctx)
  
          ctx.items.forEach((item) =>{
           // console.log(item.quantity)
              quantity=  quantity + Number(item.quantity)
          })
      
    return (
        <div>
             <button onClick={props.onClick}>Cart
        <button>
          <span>{quantity}</span>
          </button>
      </button> 
        </div>
    )

}
 export default Button