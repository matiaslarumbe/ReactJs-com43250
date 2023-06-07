import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
      
      <Navbar bg="light" expand="lg">
      <Container>
    
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram <i className="bi bi-instagram"></i></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whatsapp <i className="bi bi-whatsapp"></i></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Facebook <i className="bi bi-facebook"></i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Carrito de compra */}
         <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;


