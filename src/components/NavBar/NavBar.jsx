import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/logo.svg"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = ({ amountItems }) => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" id="title"><img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            CeluStore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/#productos">Productos</Nav.Link>
              <Nav.Link href="/#contacto">Contacto</Nav.Link>
              <div className="cartWidget">
                <CartWidget amountItems={amountItems} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;