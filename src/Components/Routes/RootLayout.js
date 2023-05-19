import { Outlet } from "react-router-dom"
// import Header from "../UI/Header"
const RootLayout =()=>{

return(
    <div>
{/* <Header/> */}
<Outlet/>
    </div>
)
}

export default RootLayout