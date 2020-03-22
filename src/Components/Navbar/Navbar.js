import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SearchBar from './Search/SearchBar';

const navbar = (props) => {
  return (
    <Navbar bg="white" variant="light" expand="lg">
      <Container className="pt-3 pb-3">
        <Navbar.Brand href="#home">
          <span className="brand-logo pr-2"></span>
          <span>Personal Blog</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" className="btn btn-sm btn-light" />

        <Navbar.Collapse id="navbar-menu">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#posts">Posts</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>

          <Form inline>
            <SearchBar />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;