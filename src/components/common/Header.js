import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../css/Header.css';
import logo from '../../images/logo.png';

function Header() {
  // Access user data from the UserContext

  return (
    <>
      {/* Navigation bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="130" height="50" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About Us</Nav.Link>
              <Nav.Link as={Link} to="/products">Product</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
             
            </Nav>
            {/* Display the user's name if available */}

      

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
