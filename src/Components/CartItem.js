import React from "react";
import classes from './CartItem.module.css'

const CartItem =(props) =>{
    const picture =<img src={props.url}  alt='img'></img>
    return (
        <div>
            <div className={classes.picture}>{props.title}</div>
            <div className={classes.picture}>{props.price}</div>
            <div className={classes.picture}>{picture}</div>
            <button>Add To Cart</button>
        </div>
    )

}

export default CartItem