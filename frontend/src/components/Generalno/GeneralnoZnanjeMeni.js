import React, { useContext } from "react";
import "./GeneralnoZnanjeMeni.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import { Link } from "react-router-dom";
const GeneralnoZnanjeMeni = () => {
  const { gameState, setGameState } = useContext(mjenjanjeIgre);
  const mjenjajHandler = () => {
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
