import React, { useState, createContext } from "react";
import GeneralnoZnanjeMeni from "./GeneralnoZnanjeMeni";
import GeneralnoZnanjeIgra from "./GeneralnoZnanjeIgra";
export const mjenjanjeIgre = createContext();
const GeneralnoZnanje = () => {
  const [gameState, setGameState] = useState("meni");
  const [odgovori, setOdgovori] = useState([]);
  return (
    <>
      <mjenjanjeIgre.Provider
        value={{ gameState, setGameState, odgovori, setOdgovori }}
      >
        {gameState === "meni" && <GeneralnoZnanjeMeni></GeneralnoZnanjeMeni>}
        {gameState === "igra" && <GeneralnoZnanjeIgra></GeneralnoZnanjeIgra>}
      </mjenjanjeIgre.Provider>
    </>
  );
};

export default GeneralnoZnanje;
