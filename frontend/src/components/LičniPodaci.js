import React from "react";
import "./LičniPodaci.css";
import { MDBBtn } from "mdb-react-ui-kit";
const LičniPodaci = () => {
  return (
    <>
      <main className="ličnipodaci">
        <div className="ličnipodaci_div">
          <h2>Sve na jednom mjestu!</h2>
          <p>
            Ukoliko imate nekih primjedbi slobodno me kontaktirajte. Stranica
            prvenstveno napravljena za zabavu i poboljšanje znanja o Bosni i
            Hercegovini{" "}
          </p>
          <p id="ličnipodaci_ime">@škuljsamed</p>
          <p id="ličnipodaci_fakultet">software engineering student</p>
        </div>
        <p id="ličnipodaci_nauči">Nauči o svojoj državi</p>
        <MDBBtn className="text-dark" color="light">
          Registruj se!
        </MDBBtn>
      </main>
      <div className="ličnipodaci_copyright">
        <p>lahko.ba</p>
      </div>
    </>
  );
};

export default LičniPodaci;
