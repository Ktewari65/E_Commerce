import React from "react";
import classes from './CartItem.module.css'
import CartItemForm from "./CartItemForm";
//import { Link } from "react-bootstrap";
import { Link } from "react-router-dom";
//import classes from './CartItem.module.css'
//import Authcontext  from "../../Store/Authcontext";
//import Cart from "../Modal/Cart";

const CartItem =(props) =>{
    //const ctx = useContext(Authcontext)
  //  console.log(props.id)
    const picture =<img src={props.url}  alt='img'></img>
   // const quantity= document.getElementById('quantity')
   // console.log(quantity)
    return (
        <div>
            <form className={classes.form}>
       <Link to = {`/${props.id}`}> <div className={classes.picture}> {props.title}</div></Link> 
      
            <div className={classes.picture}>{props.price}</div>
            <div className={classes.picture}>{picture}</div>
            <CartItemForm  item={props} />
            
            </form>
        </div>
    )

}

export default CartItem