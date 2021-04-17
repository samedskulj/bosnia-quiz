import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import "./HistorijaGotovo.css";
import { connect } from "react-redux";
import { mjenjanjeHistorija } from "./Historija";

const HistorijaGotovo = ({ pitanjeHistorija }) => {
  const { odgovori } = useContext(mjenjanjeHistorija);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let brojac = 0;
    odgovori.forEach((vrijednost, i) => {
      if (vrijednost.odgovor === pitanjeHistorija[i].odgovor) {
        brojac++;
        console.log(vrijednost.odgovor);
      }
    });
    setCounter(brojac);
  }, []);
  return (
    <>
      {" "}
      <main className="historija_gotovo">
        <div className="historija_gotovo_div">
          <p>
            Odgovorili ste na {counter} tačnih pitanja od{" "}
            {pitanjeHistorija.length}
          </p>
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
