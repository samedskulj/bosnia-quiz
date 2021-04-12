import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = ({ history }) => {
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/kviz");
    }
  }, [history]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/kviz");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <article className="login_screen">
        <div className="login_screen_div_slika"></div>
        <div className="login_screen_div">
          <p>lahko.ba</p>
          <div className="login_screen_div_form">
            {error && <h3>{error}</h3>}
            <form onSubmit={loginHandler}>
              <MDBInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                id="formControlDefault"
                type="text"
              />
              <br></br>
              <MDBInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Šifra"
                id="formControlDefault"
                type="password"
              />
              <br></br>
              <MDBBtn type="submit" color="dark">
                Uloguj se
              </MDBBtn>
              <Link to="/zaboravljenasifra">
                <p id="login_screen_zab_sifra">Zaboravili ste šifru?</p>
              </Link>
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
