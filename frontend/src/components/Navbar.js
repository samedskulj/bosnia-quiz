import React, { useState } from "react";
import "./Navbar.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <MDBNavbar transparent bgColor="light">
        <MDBContainer fluid className="d-flex justify-content-between">
          <MDBNavbarBrand href="#">Lahko.ba</MDBNavbarBrand>
          <ul className="navbar_linkovi">
            <li>Početna stranica</li>
            <li>O kvizu</li>
            <li>Kontakt</li>
          </ul>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
