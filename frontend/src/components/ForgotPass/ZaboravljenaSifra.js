import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ZaboravljenaSifra.css";
import { motion } from "framer-motion";
import axios from "axios";
const ZaboravljenaSifra = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const zaboravljenašifrahandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/zaboravljenasifra",
        { email },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="zaboravljena_sifra"
      >
        <div className="zaboravljena_sifra_div">
          <p>lahko.ba</p>
          <div className="zaboravljena_sifra_form">
            <form onSubmit={zaboravljenašifrahandler}>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <br></br>

              <MDBBtn type="submit" color="dark">
                Potvrdi
              </MDBBtn>
            </form>
          </div>
          <div className="zaboravljena_sifra_nazad">
            <i class="fas fa-angle-left"></i>
            <Link to="/" id="zaboravljena_sifra_vrati">
              <h4>Vrati se nazad</h4>
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ZaboravljenaSifra;
