import React, { useContext } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./SportMeni.css";
import { mjenjanjeSport } from "./Sport";
import { Link } from "react-router-dom";
import axios from "axios";

const SportMeni = () => {
  const { gameState, setGameState } = useContext(mjenjanjeSport);
  const mjenjajSportHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const { data } = await axios.post("/api/private/pocetak", {}, config);
    setGameState("igra");
  };
  return (
    <>
      <main className="sport">
        <div className="sport_div">
          <div className="sport_div1">
            <h3>Lahkoba</h3>
            <p>Jeste li spremni da započnete kviz?</p>
            <MDBBtn onClick={mjenjajSportHandler} color="dark">
              Spreman/na sam
            </MDBBtn>
          </div>
          <br></br>
          <div>
            <Link id="sport_nazad" to="/kviz">
              Vrati se nazad
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SportMeni;
