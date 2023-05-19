import React from "react";
//import Header from "../UI/Header";
import HomeContent from "./HomeContent";
import classes from './HomeContent.module.css'

const Home = () =>{
     const dates = [
        {date: 'Jul16 ',  place: 'DETROIT, MI' ,  theater: 'DTE ENERGY MUSIC THEATRE'},
        {date: 'Jul19 ',  place: 'DETROIT, MI' ,  theater: 'DTE ENERGY MUSIC THEATRE'},
        {date: 'Jul22 ',  place: 'DETROIT, MI' ,  theater: 'DTE ENERGY MUSIC THEATRE'},
        {date: 'Jul25 ',  place: 'DETROIT, MI' ,  theater: 'DTE ENERGY MUSIC THEATRE'},
        {date: 'Jul28' ,  place: 'DETROIT, MI' ,  theater: 'DTE ENERGY MUSIC THEATRE'},

     ]

     const concertDays =  dates.map((item)=>
     <HomeContent date={item.date}
     place={item.place}
     theater={item.theater}/>
   )
    return(
        <div>
            <h1 className={classes.center}> Tour</h1>
         <div className={classes.meals}>{concertDays}</div>
        </div>
    )

}

export default Home