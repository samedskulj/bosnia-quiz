import React, { useState, createContext, useEffect } from "react";
import GeneralnoZnanjeMeni from "./GeneralnoZnanjeMeni";
import GeneralnoZnanjeIgra from "./GeneralnoZnanjeIgra";
import GeneralnoZnanjeGotovo from "./GeneralnoZnanjeGotovo";
export const mjenjanjeIgre = createContext();
const GeneralnoZnanje = ({ history }) => {
  const [gameState, setGameState] = useState("meni");
  const [odgovori, setOdgovori] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
  }, [history]);
  return (
    <>
      <mjenjanjeIgre.Provider
        value={{ gameState, setGameState, odgovori, setOdgovori }}
      >
        {gameState === "meni" && <GeneralnoZnanjeMeni></GeneralnoZnanjeMeni>}
        {gameState === "igra" && <GeneralnoZnanjeIgra></GeneralnoZnanjeIgra>}
        {gameState === "gotovo" && (
          <GeneralnoZnanjeGotovo></GeneralnoZnanjeGotovo>
        )}
      </mjenjanjeIgre.Provider>
    </>
  );
};

export default GeneralnoZnanje;
