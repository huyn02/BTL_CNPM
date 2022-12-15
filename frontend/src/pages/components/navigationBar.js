import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
function NavigationBar() {
  return /*#__PURE__*/React.createElement(Navbar, {
    fixed: "top"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Navbar.Brand, null, "Proxy for image"), /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/React.createElement(Nav, {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement(Nav.Link, null, "HomeTab"), /*#__PURE__*/React.createElement(Nav.Link, null, "Dashboard"), /*#__PURE__*/React.createElement(NavDropdown, {
    title: "Features",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/React.createElement(NavDropdown.Item, null, "Create Task"), /*#__PURE__*/React.createElement(NavDropdown.Item, null, "Edit Task"), /*#__PURE__*/React.createElement(NavDropdown.Divider, null), /*#__PURE__*/React.createElement(NavDropdown.Item, null, "Send Messages"))))));
}
export default NavigationBar;