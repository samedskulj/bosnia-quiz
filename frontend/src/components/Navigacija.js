import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import KontaktPodaci from "../components/Kontakt podaci/KontaktPodaci";
import "bootstrap/dist/css/bootstrap.min.css";
const Navigacija = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar bg="transparent" expand="lg" className="navbar_header">
        <Link to="/">
          <Navbar.Brand href="#home">lahko.ba</Navbar.Brand>
        </Link>

        <Navbar.Toggle>
          {" "}
          <i class="fas fa-bars" aria-controls="basic-navbar-nav"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar_linkovi">
            <Link id="navbar_početna_stranica" to="/">
              <Nav.Link id="navlink" href="#link">
                Početna stranica
              </Nav.Link>
            </Link>
            <Nav.Link href="#link" onClick={handleShow}>
              <KontaktPodaci></KontaktPodaci>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigacija;
