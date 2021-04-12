import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./ZaboravljenaSifra.css";
const ZaboravljenaSifra = () => {
  return (
    <>
      <main className="zaboravljena_sifra">
        <div className="zaboravljena_sifra_div">
          <p>lahko.ba</p>
          <div className="zaboravljena_sifra_form">
            <form>
              <p id="zaboravljena_sifra_napomena">
                Za promjenu šifre, potrebno je da upišite svoj mail koji ste
                koristili prilikom registracije. Mi ćemo Vam poslati reset
                password confirmation mail.
              </p>
              <br></br>
              <MDBInput
                label="Upišite Vaš mail"
                id="formControlDefault"
                type="text"
              />

              <br></br>
              <MDBBtn color="dark">Potvrdi</MDBBtn>
            </form>
          </div>
          <div className="zaboravljena_sifra_nazad">
            <i class="fas fa-angle-left"></i>
            <Link to="/" id="zaboravljena_sifra_vrati">
              <h4>Vrati se nazad</h4>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ZaboravljenaSifra;
