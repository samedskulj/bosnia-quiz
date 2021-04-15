import React, { useContext } from "react";
import "./GeneralnoZnanjeMeni.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
const GeneralnoZnanjeMeni = () => {
  const { gameState, setGameState } = useContext(mjenjanjeIgre);
  const mjenjajHandler = () => {
    setGameState("igra");
  };
  return (
    <>
      <main className="generalnoznanje">
        <div className="generalnoznanje_div">
          <h3>Lahkoba</h3>
          <p>Jeste li spremni da započnete kviz?</p>
          <MDBBtn onClick={mjenjajHandler} color="dark">
            Spreman/na sam
          </MDBBtn>
        </div>
      </main>
    </>
  );
};

export default GeneralnoZnanjeMeni;
