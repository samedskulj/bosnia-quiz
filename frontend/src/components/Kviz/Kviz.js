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
import { motion } from "framer-motion";
const Kviz = ({
  history,
  ukupno,
  pitanjeHistorija,
  pitanjeSport,
  pitanjeZnanje,
}) => {
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

  const shuffleHistory = () => {
    pitanjeHistorija = pitanjeHistorija.sort(() => Math.random() - 0.5);
  };
  const shuffleSport = () => {
    pitanjeSport = pitanjeSport.sort(() => Math.random() - 0.5);
  };
  const shuffleZnanje = () => {
    pitanjeZnanje = pitanjeZnanje.sort(() => Math.random() - 0.5);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
            <Link onClick={shuffleHistory} id="_link" to="kviz/historija">
              <MDBBtn id="kviz_btn" color="dark">
                Historija
              </MDBBtn>
            </Link>
            <br></br>
            <Link onClick={shuffleZnanje} id="_link" to="kviz/generalnoznanje">
              <MDBBtn id="kviz_btn" color="dark">
                Generalno znanje
              </MDBBtn>
            </Link>
            <br></br>
            <Link onClick={shuffleSport} id="_link" to="kviz/sport">
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
      </motion.div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    pitanjeHistorija: state.pitanjeHistorija,
    pitanjeZnanje: state.pitanjeZnanje,
    pitanjeSport: state.pitanjeSport,
  };
};
export default connect(mapStateToProps)(Kviz);
