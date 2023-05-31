import React from "react";
import classes from './CartItem.module.css'
import CartItemForm from "./CartItemForm";
//import { Link } from "react-bootstrap";
import { Link } from "react-router-dom";
//import classes from './CartItem.module.css'
//import Authcontext  from "../../Store/Authcontext";
//import Cart from "../Modal/Cart";

const CartItem =(props) =>{
  
    const picture =<img src={props.url}  alt='img'></img>
   
   
  // console.log(props.id)
    return (
        <div className={classes.newsbox}>
             <form   className={classes.form}>                        {/*  className={classes.form} */}
            <Link to = {`/${props.id}`}> <div className={classes.newsbox}> {props.title}</div></Link> 
      
            <div className={classes.newsbox}>{props.price}</div>
            <div className={classes.newsbox}>{picture}</div>
            <CartItemForm  item={props} />
            
            </form>
        </div>
    )

}

export default CartItem