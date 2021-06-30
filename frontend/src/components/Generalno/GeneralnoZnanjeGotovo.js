import React, { useEffect, useContext, useState } from "react";
import "./GeneralnoZnanjeGotovo.css";
import { connect } from "react-redux";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { POVEĆAJ_UKUPNO, RESETIRAJ_UKUPNO } from "../../redux/akcije";
const GeneralnoZnanjeGotovo = ({ pitanjeZnanje, dodaj, izbrisi, trofeji }) => {
  const { odgovori } = useContext(mjenjanjeIgre);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let brojac = 0;
    odgovori.forEach((vrijednost, i) => {
      if (vrijednost.odgovor === pitanjeZnanje[i].odgovor) {
        brojac++;
        console.log(vrijednost.odgovor);
      }
    });
    if (brojac === pitanjeZnanje.length) {
      dodaj();
    }
    setCounter(brojac);
  }, []);

  console.log(counter);
  console.log(trofeji);

  const potvrdaTrofeja = async () => {
    console.log(trofeji);

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
    izbrisi();
  };
  console.log(trofeji);
  console.log(odgovori);
  return (
    <>
      <main className="genznanje_gotovo">
        <div className="genznanje_gotovo_div">
          <p>
            Odgovorili ste na {counter} tačnih pitanja od {pitanjeZnanje.length}
          </p>
          {counter === pitanjeZnanje.length && (
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
          {counter < pitanjeZnanje.length && (
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
  return { pitanjeZnanje: state.pitanjeZnanje, trofeji: state.trofeji };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dodaj: () => dispatch({ type: POVEĆAJ_UKUPNO }),
    izbrisi: () => dispatch({ type: RESETIRAJ_UKUPNO }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralnoZnanjeGotovo);
