import { MDBBtn, MDBRadio } from "mdb-react-ui-kit";
import React, { useState, useContext, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { mjenjanjeIgre } from "./GeneralnoZnanje";
import "./GeneralnoZnanjeIgra.css";
import { motion, AnimatePresence } from "framer-motion";
const GeneralnoZnanjeIgra = ({ pitanjeZnanje }) => {
  const [trenutnoPitanje, setTrenutnoPitanje] = useState(0);
  const [odabran, setOdabran] = useState("");
  const [error, setError] = useState("");
  const radiow = useRef();

  const odabranHandler = (e) => {
    setOdabran(e.target.value);
    setError("");
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
    if (odabran === "") {
      return setError("Molimo Vas odaberite jednu od opcija");
    } else {
      setOdgovori((prev) => [
        ...prev,
        { pitanje: pitanjeZnanje[trenutnoPitanje].pitanje, odgovor: odabran },
      ]);
      setOdabran("");
      if (trenutnoPitanje < pitanjeZnanje.length - 1) {
        setTrenutnoPitanje(trenutnoPitanje + 1);
      } else {
        setGameState("gotovo");
      }
    }
  };
  console.log(odgovori);

  return (
    <>
      <main className="generalnoznanjeigra">
        <AnimatePresence>
          <motion.div
            className="generalnoznanjeigra_div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {pitanjeZnanje[trenutnoPitanje].pitanje}
            <motion.div
              className="izbori"
              ref={radiow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {pitanjeZnanje[trenutnoPitanje].izbori.map((odabir, i) => (
                <label className="izbori_label" htmlFor="odabir" key={i}>
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label={odabir}
                    value={odabir}
                    onChange={odabranHandler}
                  />
                </label>
              ))}
            </motion.div>
            {error && (
              <p
                style={{ color: "red", padding: "0px 5px", fontSize: "0.8rem" }}
              >
                {error}
              </p>
            )}
            <MDBBtn color="dark" onClick={trenutnoPitanjeHandler}>
              Potvrdi
            </MDBBtn>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};
const mapStateToProps = (state) => {
  return { pitanjeZnanje: state.pitanjeZnanje };
};
export default connect(mapStateToProps)(GeneralnoZnanjeIgra);
