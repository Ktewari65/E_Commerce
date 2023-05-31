import React, { useContext } from "react";
import Input from "./Input";
import classes from './CartItemForm.module.css'
import Authcontext from "../../Store/Authcontext";

const CartItemForm = (props) =>{
//console.log(props)
 const ctx = useContext(Authcontext)

 const addToCart =(event)=>{
   event.preventDefault()
   const quantity = document.getElementById('amount' +props.id).value
   //console.log(quantity)
   ctx.addItem({...props.item, quantity: quantity})
 }
    return(
      <div>
        <form >
          <Input  label='Amount'
             input= {{
             id:'amount' +props.id,
             type:'number',
             min:'1',
             max:'5',
             step:'1',
            defaultValues:'1' ,  }}/>
            <button className={classes.formbutton} onClick={addToCart}> +Add</button>
        </form>
      </div>
    )

}

export default CartItemForm