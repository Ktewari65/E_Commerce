//import ErrorFallback from './Components/Routes/ErrorFallback';
import './App.css';
import Item from './Components/Cart/Item';
import Footer from './Components/UI/Footer';
import Modal from './Components/UI/Modal';
import { useState } from 'react';
import Header from './Components/UI/Header';
import AuthProvider from './Store/AuthProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/Routes/About';
//import { ErrorBoundary } from 'react-error-boundary';


<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>

function App() {
const[cart,setCart] = useState(false)

const router = createBrowserRouter([
  {path:'/about', element: <About/>},
  {path:'/' ,  element:<App/>}
]) 

  const closeCartHandler =()=>{
   // console.log('closeCartHandler')
    setCart(false)
  }
  const openCartHandler=()=>{
    setCart(true)
  }
   

  return (
    <div>
      <RouterProvider  router={router}/>
       <AuthProvider>
    <Header onClick={openCartHandler}/>
   <Item/>
   {cart &&<Modal onClick={closeCartHandler}/>}
     <Footer/>
     </AuthProvider>
     </div>
   );
}

export default App;
