import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import KvizNavbar from "./KvizNavbar";
import "./Kviz.css";
import { MDBBtn } from "mdb-react-ui-kit";
import KvizVijesti from "./KvizVijesti";
const Kviz = ({ history }) => {
  const [privateData, setPrivateData] = useState("");
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
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
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
          <p>Odaberite svoj kviz</p>
          <MDBBtn id="kviz_btn" color="dark">
            Historija
          </MDBBtn>
          <br></br>
          <MDBBtn id="kviz_btn" color="dark">
            {" "}
            Generalno znanje
          </MDBBtn>
          <br></br>
          <MDBBtn id="kviz_btn" color="dark">
            Sport
          </MDBBtn>
          <br></br>
        </div>
      </main>
      <KvizVijesti></KvizVijesti>
    </>
  );
};

export default Kviz;
