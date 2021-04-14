import React from "react";
import "./KvizVijesti.css";
import { MDBIcon } from "mdb-react-ui-kit";
const KvizVijesti = () => {
  return (
    <>
      <main className="vijesti">
        <h3>Prednosti</h3>
        <div className="vijesti_container">
          <div className="vijesti1">
            <div className="vijesti_trofej">
              <MDBIcon icon="trophy" size="3x" />
            </div>
            <p id="vijesti_trofej_p">Osvoji trofeje!</p>
            <p id="vijesti_opis">
              Ukoliko dobro završite kviz, osvojit ćete trofej. Potrudi se!
            </p>
          </div>
          <div className="vijesti2">
            <div className="vijesti_sreca">
              <MDBIcon icon="grin-beam" size="3x"></MDBIcon>
            </div>
            <p id="vijesti_trofej_p">Uživaj!</p>
            <p id="vijesti_opis">
              Kviz je dizajniran da se zabaviš, uživaj što više možeš
            </p>
          </div>
          <div className="vijesti3">
            <div className="vijesti_greska">
              <MDBIcon icon="search-plus" size="3x"></MDBIcon>
            </div>
            <p id="vijesti_trofej_p">Greška u sistemu?!</p>
            <p id="vijesti_opis">
              Uvijek postoji greška. Ukoliko pronađete jednu, kontaktirajte
              vlasnika stranice
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default KvizVijesti;
