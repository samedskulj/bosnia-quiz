import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { mjenjanjeSport } from "./Sport";
import "./SportGotovo.css";
const SportGotovo = ({ pitanjeSport }) => {
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
    setCounter(brojac);
  }, []);
  console.log(odgovori);
  return (
    <>
      <main className="sport_gotovo">
        <div className="sport_gotovo_div">
          <p>Odgovorili ste na {counter} tačnih pitanja od 7</p>
        </div>
      </main>
    </>
  );
};
const mapStateToProps = (state) => {
  return { pitanjeSport: state.pitanjeSport };
};
export default connect(mapStateToProps)(SportGotovo);
