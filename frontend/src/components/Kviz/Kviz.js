import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import KvizNavbar from "./KvizNavbar";
import "./Kviz.css";
import { MDBBtn } from "mdb-react-ui-kit";
import KvizVijesti from "./KvizVijesti";
import KvizZašto from "./KvizZašto";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Kviz = ({ history }) => {
  const [ime, setIme] = useState("");
  const [trofeji, setTrofeji] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get(`/api/private/`, config);
        setIme(data.ime);
        setTrofeji(data.trofeji);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Nemate pristup ovoj ruti, molimo Vas ulogujte se!");
      }
    };

    fetchData();
  }, []);
  const logouthandler = () => {
    if (localStorage.getItem("authToken")) {
      localStorage.removeItem("authToken");
      history.push("/login");
    }
  };
  return (
    <>
      {error ? <p>{error}</p> : ""}

      <nav>
        <KvizNavbar logouthandler={logouthandler}></KvizNavbar>
      </nav>
      <main className="kviz_main">
        <div className="kviz_div1">
          <p
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            className="kviz_div1_odaberi"
          >
            Odaberite svoj kviz
          </p>
          <Link id="_link" to="kviz/historija">
            <MDBBtn id="kviz_btn" color="dark">
              Historija
            </MDBBtn>
          </Link>
          <br></br>
          <Link id="_link" to="kviz/generalnoznanje">
            <MDBBtn id="kviz_btn" color="dark">
              Generalno znanje{" "}
            </MDBBtn>
          </Link>
          <br></br>
          <Link id="_link" to="kviz/sport">
            <MDBBtn id="kviz_btn" color="dark">
              Sport
            </MDBBtn>
          </Link>
          <br></br>
        </div>
        <div id="kviz_slika_velika">
          <div></div>
        </div>
      </main>
      <KvizVijesti></KvizVijesti>
      <KvizZašto></KvizZašto>
    </>
  );
};
const mapStateToProps = (state) => {
  return { ukupno: state.ukupno };
};
export default connect(mapStateToProps)(Kviz);
