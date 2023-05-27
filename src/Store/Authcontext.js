
import React from "react"

const Authcontext = React.createContext({
    items:[],
    addItem: (item)=>{},
    deleteItem: (id)=>{},
    token:'',
    isLoggedIn:false,
    islogin:(token)=>{

    },
    islogout:()=>{

    }
})

    


export default Authcontext