import React from "react"
import { useParams } from "react-router-dom"
const StoreDetails = () =>{

    const params= useParams()
  console.log('Hi i am param' + params)
 return(
    <div>
      <h1>Store Details</h1>
      {params.productId}
     
    </div>
 )
}
 export default StoreDetails