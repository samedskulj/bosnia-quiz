import React, { useState, useEffect } from "react";
import "./Sport.css";
import SportGotovo from "./SportGotovo";
import SportIgra from "./SportIgra";
import SportMeni from "./SportMeni";
export const mjenjanjeSport = React.createContext();
const Sport = ({ history }) => {
  const [gameState, setGameState] = useState("meni");
  const [odgovori, setOdgovori] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
  }, [history]);
  return (
    <>
      <mjenjanjeSport.Provider
        value={{ gameState, odgovori, setOdgovori, setGameState }}
      >
        {gameState === "meni" && <SportMeni></SportMeni>}
        {gameState === "igra" && <SportIgra></SportIgra>}
        {gameState === "gotovo" && <SportGotovo></SportGotovo>}
      </mjenjanjeSport.Provider>
    </>
  );
};

export default Sport;
