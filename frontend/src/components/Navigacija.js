import React, { useState } from "react";
import "./Navbar.css";

import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";

const Navigacija = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  return (
    <>
      <Navbar bg="transparent" expand="lg" className="navbar_header">
        <Navbar.Brand href="#home">lahko.ba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar_linkovi">
            <Nav.Link href="#home">Početna stranica</Nav.Link>
            <Nav.Link href="#link">O kvizu</Nav.Link>
            <Nav.Link href="#link">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigacija;
