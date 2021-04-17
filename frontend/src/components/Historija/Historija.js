import React, { useState, createContext, useEffect } from "react";
import HistorijaMeni from "./HistorijaMeni";
import HistorijaIgra from "./HistorijaIgra";
import HistorijaGotovo from "./HistorijaGotovo";
export const mjenjanjeHistorija = createContext();

const Historija = ({ history }) => {
  const [gameState, setGameState] = useState("meni");
  const [odgovori, setOdgovori] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
  }, [history]);
  return (
    <>
      <mjenjanjeHistorija.Provider
        value={{ gameState, setGameState, odgovori, setOdgovori }}
      >
        {gameState === "meni" && <HistorijaMeni></HistorijaMeni>}
        {gameState === "igra" && <HistorijaIgra></HistorijaIgra>}
        {gameState === "gotovo" && <HistorijaGotovo></HistorijaGotovo>}
      </mjenjanjeHistorija.Provider>
    </>
  );
};

export default Historija;
