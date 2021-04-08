import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <article className="login_screen">
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
            </form>
          </div>
        </div>
      </article>
    </>
  );
};

export default Login;
