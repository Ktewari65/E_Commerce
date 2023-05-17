//import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import './App.css';
import Item from './Components/Cart/Item';
import Footer from './Components/UI/Footer';
import Modal from './Components/UI/Modal';
import { useState } from 'react';
import Header from './Components/UI/Header';
import AuthProvider from './Store/AuthProvider';


<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>

function App() {

  const[cart,setCart] = useState(false)

  const closeCartHandler =()=>{
   // console.log('closeCartHandler')
    setCart(false)
  }
  const openCartHandler=()=>{
    setCart(true)
  }
   

  return (
    <AuthProvider>
    <Header onClick={openCartHandler}/>
   <Item/>
   {cart &&<Modal onClick={closeCartHandler}/>}
     <Footer/>
     </AuthProvider>
   );
}

export default App;
