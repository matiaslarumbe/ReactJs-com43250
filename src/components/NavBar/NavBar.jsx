import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// carrito contador
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
    return (
        <div>

<Navbar bg="light" expand="lg">
      <Container>
    
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whatsapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
        </div>
      
  )
}

export default NavBar;


