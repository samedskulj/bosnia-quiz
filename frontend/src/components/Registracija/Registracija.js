import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Registracija.css";
const Registracija = () => {
  return (
    <>
      <article className="registracija_screen">
        <div className="registracija_screen_div_slika"></div>
        <div className="registracija_screen_div">
          <p>lahko.ba</p>
          <div className="registracija_screen_div_form">
            <form>
              <MDBInput label="Username" id="formControlDefault" type="text" />
              <br></br>
              <MDBInput label="Email" id="formControlDefault" type="text" />
              <br></br>
              <MDBInput label="Šifra" id="formControlDefault" type="text" />
              <br></br>
              <MDBInput
                label="Potvrdi šifru"
                id="formControlDefault"
                type="text"
              />
              <br></br>
              <MDBBtn color="dark">Registruj se</MDBBtn>
              <p id="registracija_screen_login">
                Imate account?
                <Link id="registracija_screen_login" to="/login">
                  Uloguj se onda
                </Link>
              </p>
            </form>
          </div>
          <div className="registracija_screen_nazad">
            <i class="fas fa-angle-left"></i>
            <Link to="/" id="registracija_screen_vrati">
              <h4>Vrati se nazad</h4>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Registracija;
