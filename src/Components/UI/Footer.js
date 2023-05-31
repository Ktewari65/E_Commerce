import { Navbar,Container } from "react-bootstrap"
import React, { useContext } from "react"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import classes from './Footer.module.css'
import Authcontext from "../../Store/Authcontext";
const Footer = ()=>{

  const authCtx = useContext(Authcontext)
return(
  <div>
    {authCtx.isLoggedIn && <div   className={classes.footers}>
       <Navbar bg='info'  expand='sm' variant='light'>
    <Container>
      <h1>The Generic</h1>
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>
    </Container>
    </Navbar>
    </div> }
    </div>
)
}
export default Footer
 