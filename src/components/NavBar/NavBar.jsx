import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo.jpg";
// import "./navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="navBg" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
            <img src={logo} width={"150px"} alt="#" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/">
                Instagram <i className="bi bi-instagram"></i>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.whatsapp.com/">
                Whatsapp <i className="bi bi-whatsapp"></i>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.facebook.com/">
                Facebook <i className="bi bi-facebook"></i>
              </NavDropdown.Item>
              <NavDropdown.Item href="/contacto">
                Email <i class="bi bi-envelope-at"></i>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/productos/Frutos-Secos">Frutos secos</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/productos/Mix">Mix</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/productos/Cereales">Cereales</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/productos/Frutas-Desecadas">Frutas desecadas</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
