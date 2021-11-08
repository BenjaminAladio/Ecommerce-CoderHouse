import React from "react";
import { Navbar } from "react-bootstrap";
import {Nav, Container} from 'react-bootstrap';
import { CartWidget } from "./CartWidget/CartWidget";


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <img src="https://i.pinimg.com/originals/7a/b0/2a/7ab02ae6078aea3ebcb59ab42836e4fa.png" style={{width:70}} />
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#AboutUs">About us</Nav.Link>
        </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      
    );

   
}
export default NavBar;