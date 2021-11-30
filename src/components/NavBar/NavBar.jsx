import React from "react";
import { Navbar } from "react-bootstrap";
import {Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";   
import { BsSearch } from "react-icons/bs";                             

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/">
              <img src="https://i.pinimg.com/originals/7a/b0/2a/7ab02ae6078aea3ebcb59ab42836e4fa.png" style={{width:70 , marginRight: 100}} />
            </Link>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-3"
          aria-label="Search"
          style={{width: 500}}
        />
        <BsSearch  style={{color:"#fff", fontSize:30, marginRight: 90, marginTop:5}}/>
        
      </Form>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#store">Home</Nav.Link>
            </Link>
            <Link to="">
              <Nav.Link href="#store">Store</Nav.Link>
            </Link>
            <Link to="">
              <Nav.Link href="#AboutUs">About us</Nav.Link>
            </Link>|
          </Nav>
          </Container>
          <Link to="">
            <CartWidget />
          </Link>  

      
        </Navbar>
    );
   
}
export default NavBar;