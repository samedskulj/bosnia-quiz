import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ResetŠifre.css";
import axios from "axios";
const ResetŠifre = ({ match }) => {
  const [password, setPassword] = useState("");
  const [potvrdaŠifre, setPotvrdaŠifre] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const resetšifrehandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== potvrdaŠifre) {
      setPassword("");
      setPotvrdaŠifre("");
      setTimeout(() => {
        setError("");
      }, 5000);
      setError("Šifre se ne poklapaju");
    }
    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        { password },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setPassword("");
      setPotvrdaŠifre("");

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
        className="reset_šifre"
      >
        <div className="reset_šifre_div">
          <p>lahko.ba</p>
          <div className="reset_šifre_form">
            <form onSubmit={resetšifrehandler}>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
              <p id="reset_šifre_napomena"></p>
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
                value={potvrdaŠifre}
                onChange={(e) => setPotvrdaŠifre(e.target.value)}
                label="Potvrda šifre"
                id="formControlDefault"
                type="password"
              />
              <br></br>
              <MDBBtn type="submit" color="dark">
                Potvrdi
              </MDBBtn>
            </form>
          </div>
          <div className="reset_šifre_nazad">
            <i class="fas fa-angle-left"></i>
            <Link to="/" id="reset_šifre_vrati">
              <h4>Vrati se nazad</h4>
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ResetŠifre;
