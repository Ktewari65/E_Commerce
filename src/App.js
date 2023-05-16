//import { Button } from 'react-bootstrap';
import { Container, Navbar, NavbarBrand ,Nav} from 'react-bootstrap';
import './App.css';
import Item from './Components/Item';
import Footer from './Components/Footer';


<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>


function App() {
  return (
    <div>
    <Navbar bg='dark' expand='sm' variant='dark'>
     <Container>
      <NavbarBrand>E_Commerce</NavbarBrand>
     
      <Nav className="me-auto"></Nav>
      <NavbarBrand>Home</NavbarBrand>
      <NavbarBrand>Store</NavbarBrand> 
      <NavbarBrand>About</NavbarBrand>
      <button>Cart
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
     <Footer/>
     </div>
   );
}

export default App;
