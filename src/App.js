//import { Button } from 'react-bootstrap';
import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import './App.css';
import Item from './Components/Item';
import Footer from './Components/Footer';
import Modal from './Components/UI/Modal';
import { useState } from 'react';


<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>

function App() {

  const[cart,setCart] = useState(false)

  const closeCartHandler =()=>{
    setCart(false)
  }
  const openCartHandler=()=>{
    setCart(true)
  }
   

  return (
    <div>
    <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
      <NavbarBrand>E_Commerce</NavbarBrand>
     
      <Nav className="me-auto"></Nav>
      <NavbarBrand>Home</NavbarBrand>
      <NavbarBrand>Store</NavbarBrand> 
      <NavbarBrand>About</NavbarBrand>
    <button onClick={openCartHandler}>Cart
        <button>
          <span>0</span>
        </button>
      </button> 
     </Container>
    </Navbar>
    <Navbar bg='secondary'  expand='sm' variant='light'>
    <Container>
      <h1>The Generic</h1>
    </Container>
    </Navbar>
   <Item/>
   {cart && <Modal onClick={closeCartHandler}/>}
     <Footer/>
     </div>
   );
}

export default App;
