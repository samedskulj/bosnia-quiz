import React, { useContext, useState } from "react";
import "./HistorijaMeni.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { mjenjanjeHistorija } from "./Historija";
import axios from "axios";
import { connect } from "react-redux";

const HistorijaMeni = ({ pitanjeHistorija }) => {
  const { gameState, setGameState } = useContext(mjenjanjeHistorija);
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
const mapStateToProps = (state) => {
  return {
    pitanjeHistorija: state.pitanjeHistorija,
  };
};
export default connect(mapStateToProps)(HistorijaMeni);
