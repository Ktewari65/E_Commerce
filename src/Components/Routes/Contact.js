import React from "react"
import Emergency from "./Emergency"
const Contact = () =>{


    const comingDataHandler =  async (data) =>{
      const response = await fetch('https://react-http-36c63-default-rtdb.firebaseio.com/data.json',{
       method:'POST',
       body:JSON.stringify(data),
       headers:{
        'application': 'application'
       }
      })
      console.log(response)
    }

return (
    <div>
   <p>Contact us</p>
   <Emergency comingData = {comingDataHandler}/>
    </div>
)
}

export default Contact