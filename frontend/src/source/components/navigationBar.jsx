import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function NavigationBar() {
  return (
    <Navbar fixed='top'>
      <Container>
        <Navbar.Brand>Proxy for image</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>HomeTab</Nav.Link>
            <Nav.Link>Dashboard</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item>Create Task</NavDropdown.Item>
              <NavDropdown.Item>
                Edit Task
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Send Messages
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;