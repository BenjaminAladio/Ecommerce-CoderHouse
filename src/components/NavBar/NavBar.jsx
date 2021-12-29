import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import {Nav, Container, Form, FormControl} from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";   
import { BsSearch } from "react-icons/bs";     
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./NavBar.css";
                   

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
        <Link to="/productos/:catId" element= {<ItemListContainer />}>
        <BsSearch  style={{color:"#fff", fontSize:30, marginRight: 90, marginTop:5}}/>
        
        </Link>
        
      </Form>
           <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#store">Home</Nav.Link>
            </Link>
            <Link to="">
            <NavDropdown className="productos-list" title="Products" id="basic-nav-dropdown">
              <Link to="/productos/hardware">Hardware</Link>
              <Link to="/productos/pc">Gamer Computers</Link>
              <Link to="/productos/display">Displays</Link>
              
           </NavDropdown>
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