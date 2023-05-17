import { Navbar,Container } from "react-bootstrap"
import React from "react"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const Footer = ()=>{
return(
    <div>
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
    </div>
)
}
export default Footer
 