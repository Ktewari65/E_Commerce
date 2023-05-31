import "./App.css";
import Footer from "./Components/UI/Footer";
import Modal from "./Components/UI/Modal";
import Header from "./Components/UI/Header";
import About from "./Components/Routes/About";
import Home from "./Components/Routes/Home";
import Store from "./Components/Routes/Store";
import Contact from "./Components/Routes/Contact";
import StoreDetails from "./Components/Routes/StoreDetails";
import { useContext,useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Routes/Login";
import Authcontext from "./Store/Authcontext";

/* <script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script> */

function App() {
  //const ctx = useContext(Authcontext)
  const { modifiedEmail, items } = useContext(Authcontext);
 // console.log(items)
  const [updcart, setUpdCart] = useState(items);
  //console.log(updcart);
  

  const [cart, setCart] = useState(false);
  const closeCartHandler = () => {
    setCart(false);
  };
  
    const openCartHandler = () => {
      fetch( `https://crudcrud.com/api/9f3ac5056b6f4f87aeaf4571e73169d9/Items${modifiedEmail}`)
        .then((response) => response.json())
        .then((data) => {
         // console.log(data);
          // data.forEach(element => {
          //   console.log("Elements:")
          //   console.log(element)
          //   ctx.addItem(element)

          // });
          
          //console.log(data)
          setUpdCart(data)
          //  setUpdCart((previous)=>{
          //     console.log(previous)
          //     return [...previous, data]
          //   })
        });

      setCart(true)
    };
   
 

  // console.log(updcart)
  return (
    <div>
       <Header  items={updcart} onClick={openCartHandler}/>   
     
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:productId" element={<StoreDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<Login />} />
      </Routes>
      {cart && <Modal items={updcart} onClick={closeCartHandler} />}
      <Footer />
    </div>
  );
}

export default App;
