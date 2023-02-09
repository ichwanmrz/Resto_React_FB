import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../config/firebaseConfig';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const auth = getAuth(firebaseApp)
  const [user ] = useAuthState(auth)
  return (
    <div className="">
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="  mb-5">
      <Container className="fs-5 ">
        <Navbar.Brand as={Link} to="/"><h2 className="text-primary fw-bold me-3">goomer</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Goods" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/goods">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Price" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/price">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            {/* <Nav.Link as={Link} to="/profile">Profile</Nav.Link> */}
          </Nav>
          <Nav>
          {!user && <Nav.Link as={Link} to="/login">Enter</Nav.Link>}
          {!user && <Nav.Link as={Link} to="/profile" className="bg-primary rounded text-light px-3">
            Create Free Menu</Nav.Link>}
            {user && (
              <div className="d-flex">
              <Nav.Link as={Link} to="/profile"><p className='text-light'>
                Halo, {user.displayName || user.email.split('@')[0]} !</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={() => signOut(auth)}>Logout</Nav.Link>
              </div>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header