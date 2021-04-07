import React from "react";
import "./OpisKviza.css";
import prvaIlustracija from "../slike/undraw_Questions_re_1fy7.png";
import { MDBBtn } from "mdb-react-ui-kit";
const OpisKviza = () => {
  return (
    <>
      <main className="opis_kviza">
        <div className="opis_kviza_div">
          <h2 className="opis_kviza_h2">
            Mislis da znas o svojoj drzavi? <br></br> Što se ne testiras?
          </h2>
          <p className="opis_kviza_p">
            lahko.ba je web aplikacija na kojoj možete da testirate svoje znanje
            o domovini. <br></br>Kviz je odrađen tako da bude lagan, dok u isto
            vrijeme može biti zahtjevan, u zavisnosti od Vašeg znanja. Odradi
            kviz, i testiraj svoje znanje!
          </p>
          <div className="opis_kviza_btn">
            <MDBBtn color="dark" className="registruj_se_btn">
              Registruj se!
            </MDBBtn>
            <MDBBtn outline color="dark" className="login_se_btn">
              Uloguj se!
            </MDBBtn>
          </div>
        </div>
        <img src={prvaIlustracija}></img>
      </main>
    </>
  );
};

export default OpisKviza;
