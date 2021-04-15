import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const KvizNavbar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">lahko.ba</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i class="fas fa-bars" aria-controls="basic-navbar-nav"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-center align-items-center">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/kviz/profil"
              className="mx-4"
            >
              Profil
            </Link>
            <MDBBtn onClick={props.logouthandler} color="dark">
              Log Out
            </MDBBtn>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default KvizNavbar;
