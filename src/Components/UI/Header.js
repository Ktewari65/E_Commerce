import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import React from "react";
import Button from './Button';
import classes from './Header.module.css'
//import Authcontext from '../../Store/Authcontext';
//import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import Authcontext from '../../Store/Authcontext';
import { useContext } from 'react';
const Header = (props) =>{
   
  const ctx = useContext(Authcontext)
  //var quantity=0;
   // console.log(ctx)

    //    ctx.items.forEach((item) =>{
         // console.log(item.quantity)
        //    quantity=  quantity + Number(item.quantity)
      //  })

      const logoutHandler = () =>{
      
        ctx.isLogOut()
      }
    
    
return (
    <div>
         <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
     {ctx.isLoggedIn && <NavbarBrand className={classes.center}><h2>Shop In</h2></NavbarBrand>}
     
      <Nav className="me-auto"></Nav>
    {ctx.isLoggedIn &&<NavbarBrand><NavLink to='/home'>Home</NavLink></NavbarBrand>}
    {ctx.isLoggedIn &&<NavbarBrand><NavLink to='/'>Store</NavLink></NavbarBrand>} 
            <NavbarBrand> 
            {ctx.isLoggedIn &&  <NavLink to="/about">About</NavLink>}
            
            {ctx.isLoggedIn && <NavbarBrand> <NavLink to="/contactus">Contact</NavLink></NavbarBrand>}
            <NavbarBrand><NavLink to = "/login"><button onClick={logoutHandler}>{ctx.isLoggedIn ? 'Logout' : 'Login'}</button></NavLink></NavbarBrand>
            
        </NavbarBrand>
        {ctx.isLoggedIn &&<Button  items={props.items} onClick={props.onClick}/>}
     </Container>
    </Navbar>
    <Navbar bg='secondary'  expand='sm' variant='light'>
    <Container>
    {ctx.isLoggedIn &&<h1 className={classes.generic}>The Generic</h1>}
    </Container>
    </Navbar>
    </div>
)
}

export default Header