import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import "./HistorijaGotovo.css";
import { connect } from "react-redux";
import { mjenjanjeHistorija } from "./Historija";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
const HistorijaGotovo = ({ pitanjeHistorija }) => {
  const { odgovori } = useContext(mjenjanjeHistorija);
  const [counter, setCounter] = useState(0);
  const [trofeji, setTrofeji] = useState(0);
  useEffect(() => {
    let brojac = 0;
    odgovori.forEach((vrijednost, i) => {
      if (vrijednost.odgovor === pitanjeHistorija[i].odgovor) {
        brojac++;
        console.log(vrijednost.odgovor);
      }
    });
    if (brojac === pitanjeHistorija.length) {
      setTrofeji(trofeji + 1);
    }
    setCounter(brojac);
  }, []);
  const potvrdaTrofeja = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const { data } = await axios.post(
      "/api/private/pobjeda",
      { trofeji },
      config
    );
  };
  return (
    <>
      {" "}
      <main className="historija_gotovo">
        <div className="historija_gotovo_div">
          <p>
            Odgovorili ste na {counter} tačnih pitanja od{" "}
            {pitanjeHistorija.length}
          </p>
          {counter === pitanjeHistorija.length && (
            <>
              <p>
                Osvojili ste trofej "znalac", čestitamo. Molimo Vas pritisnite
                dugme ispod za potvrdu!
              </p>
              <Link to="/kviz">
                <MDBBtn color="dark" onClick={potvrdaTrofeja}>
                  Završi sa igrom!
                </MDBBtn>
              </Link>
            </>
          )}
          {counter < pitanjeHistorija.length && (
            <Link to="/kviz">
              <MDBBtn color="dark">Završi sa igrom!</MDBBtn>
            </Link>
          )}
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
export default connect(mapStateToProps)(HistorijaGotovo);
