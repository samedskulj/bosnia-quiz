import React, { useContext } from "react";
import "./GeneralnoZnanjeMeni.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import { Link } from "react-router-dom";
import axios from "axios";
const GeneralnoZnanjeMeni = () => {
  const { gameState, setGameState } = useContext(mjenjanjeIgre);
  const mjenjajHandler = async () => {
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
      <main className="generalnoznanje">
        <div className="generalnoznanje_div">
          <div className="generalnoznanje_div1">
            <h3>Lahkoba</h3>
            <p>Jeste li spremni da započnete kviz?</p>
            <MDBBtn onClick={mjenjajHandler} color="dark">
              Spreman/na sam
            </MDBBtn>
          </div>
          <br></br>
          <div>
            <Link id="generalnoznanjemeni_nazad" to="/kviz">
              Vrati se nazad
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default GeneralnoZnanjeMeni;
