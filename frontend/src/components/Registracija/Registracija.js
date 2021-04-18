import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Registracija.css";
import axios from "axios";

import { motion } from "framer-motion";
const Registracija = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registracijaHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Šifre se ne poklapaju");
    }

    try {
      let trofeji = 0;
      const { data } = await axios.post(
        "/api/auth/registracija",
        { username, email, password, trofeji },
        config
      );
      console.log(data);
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
      <article className="registracija_screen">
        <div className="registracija_screen_div_slika"></div>
        <div className="registracija_screen_div">
          <p>lahko.ba</p>
          <div className="registracija_screen_div_form">
            {error && (
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                id="registracija_screen_error"
              >
                {error}
              </motion.h3>
            )}
            <form onSubmit={registracijaHandler}>
              <MDBInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                id="formControlDefault"
                type="text"
              />
              <br></br>
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
              <MDBInput
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label="Potvrdi šifru"
                id="formControlDefault"
                type="password"
              />
              <br></br>
              <MDBBtn type="submit" color="dark">
                Registruj se
              </MDBBtn>
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
