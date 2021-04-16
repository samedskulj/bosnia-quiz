import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import "./GeneralnoZnanjeGotovo.css";
import { connect } from "react-redux";
import { mjenjanjeIgre } from "./GeneralnoZnanje";

const GeneralnoZnanjeGotovo = ({ pitanjeZnanje }) => {
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
    setCounter(brojac);
  }, []);

  console.log(odgovori);
  return (
    <>
      <main className="genznanje_gotovo">
        <div className="genznanje_gotovo_div">
          <p>Odgovorili ste na {counter} tačnih pitanja od 7</p>
        </div>
      </main>
    </>
  );
};
const mapStateToProps = (state) => {
  return { pitanjeZnanje: state.pitanjeZnanje };
};
export default connect(mapStateToProps)(GeneralnoZnanjeGotovo);
