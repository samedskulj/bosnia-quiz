import React, { useContext, useState } from "react";
import "./HistorijaMeni.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { mjenjanjeHistorija } from "./Historija";
const HistorijaMeni = () => {
  const { gameState, setGameState } = useContext(mjenjanjeHistorija);
  const mjenjajHandler = () => {
    setGameState("igra");
  };
  return (
    <>
      <main className="historija">
        <div className="historija_div">
          <div className="historija_div1">
            <h3>Lahkoba</h3>
            <p>Jeste li spremni da započnete kviz?</p>
            <MDBBtn onClick={mjenjajHandler} color="dark">
              Spreman/na sam
            </MDBBtn>
          </div>
          <br></br>
          <div>
            <Link id="historijameni_nazad" to="/kviz">
              Vrati se nazad
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HistorijaMeni;
