
import React from "react"

const Authcontext = React.createContext({
    items:[],
    addItem: (item)=>{},
    deleteItem: (id)=>{}
})

    


export default Authcontext