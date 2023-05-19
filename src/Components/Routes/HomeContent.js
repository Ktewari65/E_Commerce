import React from "react"
import classes from './Home.module.css'
const HomeContent = (props) =>{
    return(
        <div>
            
        <div>
           
          <div>{props.date}</div>
          <div className={classes.description}>{props.place}</div>
          <div className={classes.price}>{props.theater}</div>
          <button>Buy Ticket</button>
        </div>
        </div>
    )

}

export default HomeContent