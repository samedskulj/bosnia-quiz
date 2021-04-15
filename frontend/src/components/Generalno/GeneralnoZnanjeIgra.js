import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import "./GeneralnoZnanjeIgra.css";
const GeneralnoZnanjeIgra = ({ pitanjeZnanje }) => {
  const [trenutnoPitanje, setTrenutnoPitanje] = useState(0);
  const { gameState, setGameState } = useContext(mjenjanjeIgre);
  const trenutnoPitanjeHandler = () => {
    if (trenutnoPitanje !== pitanjeZnanje.length - 1) {
      setTrenutnoPitanje(trenutnoPitanje + 1);
    } else {
      setGameState("meni");
    }
  };
  console.log(pitanjeZnanje);
  return (
    <>
      <main className="generalnoznanjeigra">
        <div className="generalnoznanjeigra_div">
          {pitanjeZnanje[trenutnoPitanje].pitanje}
          {pitanjeZnanje[trenutnoPitanje].izbori.map((odabir, i) => {
            return (
              <div className="izbori" key={i}>
                <p>{odabir}</p>
              </div>
            );
          })}
          <MDBBtn color="dark" onClick={trenutnoPitanjeHandler}>
            Potvrdi
          </MDBBtn>
        </div>
      </main>
    </>
  );
};
const mapStateToProps = (state) => {
  return { pitanjeZnanje: state.pitanjeZnanje };
};
export default connect(mapStateToProps)(GeneralnoZnanjeIgra);
