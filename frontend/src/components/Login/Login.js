import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <article className="login_screen">
        <div className="login_screen_div_slika"></div>
        <div className="login_screen_div">
          <p>lahko.ba</p>
          <div className="login_screen_div_form">
            <form>
              <MDBInput label="Username" id="formControlDefault" type="text" />
              <br></br>
              <MDBInput label="Email" id="formControlDefault" type="text" />
              <br></br>
              <MDBInput label="Šifra" id="formControlDefault" type="text" />
              <br></br>
              <MDBBtn color="dark">Uloguj se</MDBBtn>
              <p id="login_screen_registracija">
                Nemate account?
                <Link id="login_screen_registracija" to="/registracija">
                  Registruj se onda
                </Link>
              </p>
            </form>
          </div>
          <div className="login_screen_nazad">
            <i class="fas fa-angle-left"></i>
            <Link to="/" id="login_screen_vrati">
              <h4>Vrati se nazad</h4>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Login;
