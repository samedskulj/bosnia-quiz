import React, { useEffect, useState } from "react";
import KvizNavbar from "../Kviz/KvizNavbar";
import "./Profil.css";
import axios from "axios";

const Profil = ({ history }) => {
  const [podaci, setPodaci] = useState({
    ime: "samed",
    email: "samketrejd@gmail.com",
    trofeji: 0,
    odigraniKvizovi: 0,
  });
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/kviz");
    }
    const fetchPodatke = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      const { data } = await axios.get("/api/private", config);
      setPodaci({
        ...podaci,
        ime: data.ime,
        email: data.email,
        trofeji: data.trofeji,
        odigraniKvizovi: data.odigraniKvizovi,
      });
    };
    return fetchPodatke();
  }, []);
  console.log(podaci);
  return (
    <>
      <KvizNavbar></KvizNavbar>
      <main className="profil">
        <div className="profil_div">
          <div className="profil_slika"></div>
          <div className="profil_podaci">
            <div className="profil_ime">
              <p className="profil_label">Ime</p>
              <p>{podaci.ime}</p>
            </div>
            <hr></hr>
            <div className="profil_email">
              <p className="profil_label">Email</p>
              <p>{podaci.email}</p>
            </div>
            <hr></hr>
            <div className="podaci_trofeji_kvizovi">
              <div>
                <p className="profil_label">Trofeji</p>
                <p>{podaci.trofeji}</p>
              </div>
              <div>
                <p className="profil_label">Odigrani kvizovi</p>
                <p>{podaci.odigraniKvizovi}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profil;
