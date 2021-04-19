import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { mjenjanjeSport } from "./Sport";
import "./SportGotovo.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { POVEĆAJ_UKUPNO, RESETIRAJ_UKUPNO } from "../../redux/akcije";
import { MDBBtn } from "mdb-react-ui-kit";
const SportGotovo = ({ pitanjeSport, trofeji, dodaj, izbrisi }) => {
  const { odgovori } = useContext(mjenjanjeSport);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let brojac = 0;
    odgovori.forEach((vrijednost, i) => {
      if (vrijednost.odgovor === pitanjeSport[i].odgovor) {
        brojac++;
        console.log(vrijednost.odgovor);
      }
    });
    if (brojac === pitanjeSport.length) {
      dodaj();
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
    izbrisi();
  };
  console.log(odgovori);
  return (
    <>
      <main className="sport_gotovo">
        <div className="sport_gotovo_div">
          <p>
            Odgovorili ste na {counter} tačnih pitanja od {pitanjeSport.length}
          </p>
          {counter === pitanjeSport.length && (
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
          {counter < pitanjeSport.length && (
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
  return { pitanjeSport: state.pitanjeSport, trofeji: state.trofeji };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dodaj: () => dispatch({ type: POVEĆAJ_UKUPNO }),
    izbrisi: () => dispatch({ type: RESETIRAJ_UKUPNO }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SportGotovo);
