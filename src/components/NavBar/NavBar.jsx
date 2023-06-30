import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo.jpg";
import "./navbar.css"
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
                <NavDropdown.Item href="#action/3.1">
                  Instagram <i className="bi bi-instagram"></i>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Whatsapp <i className="bi bi-whatsapp"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Facebook <i className="bi bi-facebook"></i>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link}to='/Category/Fruto Seco'>
                  Frutos Secos <i className="bi bi-frutos-secos"></i>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link}to='/Category/Mix'>
                  Mix <i className="bi bi-mix"></i>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link}to='/Category/Cereales'>
                  Cereales <i className="bi bi-cereales"></i>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link}to='/Category/Frutas Desecadas'>
                  Frutas Desecadas <i className="bi bi-frutas-desecadas"></i>
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