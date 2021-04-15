import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState, useContext, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import "./GeneralnoZnanjeIgra.css";
const GeneralnoZnanjeIgra = ({ pitanjeZnanje }) => {
  const [trenutnoPitanje, setTrenutnoPitanje] = useState(0);
  const [odabran, setOdabran] = useState("");
  const radiow = useRef();

  const odabranHandler = (e) => {
    setOdabran(e.target.value);
  };

  useEffect(() => {
    const radiobox = radiow.current.querySelector("input:checked");
    if (radiobox) {
      radiobox.checked = false;
    }
  }, [trenutnoPitanje]);

  const { gameState, setGameState, odgovori, setOdgovori } = useContext(
    mjenjanjeIgre
  );

  const trenutnoPitanjeHandler = () => {
    if (trenutnoPitanje !== pitanjeZnanje.length - 1) {
      setTrenutnoPitanje(trenutnoPitanje + 1);
      setOdgovori((prev) => [
        ...prev,
        { pitanje: pitanjeZnanje[trenutnoPitanje].pitanje, odgovor: odabran },
      ]);
      setOdabran("");
    } else {
      setGameState("meni");
    }
  };
  console.log(odgovori);

  return (
    <>
      <main className="generalnoznanjeigra">
        <div className="generalnoznanjeigra_div">
          {pitanjeZnanje[trenutnoPitanje].pitanje}
          <div className="izbori" ref={radiow}>
            {pitanjeZnanje[trenutnoPitanje].izbori.map((odabir, i) => (
              <label htmlFor="odabir" key={i}>
                <input
                  id="test"
                  type="radio"
                  name="odabir"
                  value={odabir}
                  onChange={odabranHandler}
                />
                {odabir}
              </label>
            ))}
          </div>
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
