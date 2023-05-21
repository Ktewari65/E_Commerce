import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import React from "react";
import Button from './Button';
import classes from './Header.module.css'
//import Authcontext from '../../Store/Authcontext';
//import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
const Header = (props) =>{

 // const ctx = useContext(Authcontext)
  //var quantity=0;
   // console.log(ctx)

    //    ctx.items.forEach((item) =>{
         // console.log(item.quantity)
        //    quantity=  quantity + Number(item.quantity)
      //  })
    
return (
    <div>
         <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
      <NavbarBrand>E_Commerce</NavbarBrand>
     
      <Nav className="me-auto"></Nav>
     <NavbarBrand><NavLink to='/home'>Home</NavLink></NavbarBrand>
      <NavbarBrand><NavLink to='/'>Store</NavLink></NavbarBrand> 
<NavbarBrand> 
            <NavLink to="/about">About</NavLink>
            
          <NavbarBrand> <NavLink to="/contactus">Contact</NavLink></NavbarBrand>
            
        </NavbarBrand>
      <Button onClick={props.onClick}/>
     </Container>
    </Navbar>
    <Navbar bg='secondary'  expand='sm' variant='light'>
    <Container>
      <h1 className={classes.center}>The Generic</h1>
    </Container>
    </Navbar>
    </div>
)
}

export default Header