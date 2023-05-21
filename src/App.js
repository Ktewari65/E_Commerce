import './App.css';
import Footer from './Components/UI/Footer';
import Modal from './Components/UI/Modal';
import Header from './Components/UI/Header';
import About from './Components/Routes/About';
import Home from './Components/Routes/Home';
import Store from './Components/Routes/Store';
import Contact from './Components/Routes/Contact';
//import { RouterProvider } from 'react-router-dom';
//import { createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
//import RootLayout from './Components/Routes/RootLayout';
import { Route, Routes } from 'react-router-dom';

/* <script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script> */

function App() {
const[cart,setCart] = useState(false)

// const router = createBrowserRouter([
//   {path:'/' ,  element:<RootLayout/>,
//   children:[
//     {path:'/' ,  element:<Store/>,},
//   {path:'/about', element: <About/>},
//    { path:'/home' , element:<Home/>}
//   ]
// }
// ]) 

  const closeCartHandler =()=>{
   // console.log('closeCartHandler')
    setCart(false)
  }
  const openCartHandler=()=>{
    setCart(true)
  }
   

  return (
    
      <div>

       <Header onClick={openCartHandler}/>  
        <Routes> 
       <Route  path='/'   element={<Store/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path='/home'  element={<Home/>}/>
        <Route  path='/contactus' element={<Contact/>}/>
        </Routes>  
       {/* <RouterProvider  router={router}/> */}
       {/* <Header onClick={openCartHandler}/>   */}
       {/* <Item/>*/}
       {/* <Item/> */}
       {cart &&<Modal onClick={closeCartHandler}/>} 
       <Footer/>
         </div> 
    
     
     
  
   );
}

export default App;
