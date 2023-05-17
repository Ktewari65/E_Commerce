import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import React from "react";
import Authcontext from '../../Store/Authcontext';
import { useContext } from 'react';
const Header = (props) =>{

  const ctx = useContext(Authcontext)
  var quantity=0;
   // console.log(ctx)

        ctx.items.forEach((item) =>{
         // console.log(item.quantity)
            quantity=  quantity + Number(item.quantity)
        })
    
return (
    <div>
         <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
      <NavbarBrand>E_Commerce</NavbarBrand>
     
      <Nav className="me-auto"></Nav>
      <NavbarBrand>Home</NavbarBrand>
      <NavbarBrand>Store</NavbarBrand> 
      <NavbarBrand>About</NavbarBrand>
    <button onClick={props.onClick}>Cart
        <button>
          <span>{quantity}</span>
          
        </button>
      </button> 
     </Container>
    </Navbar>
    <Navbar bg='secondary'  expand='sm' variant='light'>
    <Container>
      <h1>The Generic</h1>
    </Container>
    </Navbar>
    </div>
)
}

export default Header