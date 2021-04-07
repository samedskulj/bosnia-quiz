import React from "react";
import "./OsobineTestova.css";
import historijaIlustracija from "../slike/undraw_in_thought_gjsf.png";
import znanjeIlustracija from "../slike/undraw_exams_g4ow.png";
import sportIlustracija from "../slike/undraw_basketball_agx4.png";
const OsobineTestova = () => {
  return (
    <>
      <main className="osobinetestova">
        <div className="osobine_testova_div">
          <div className="osobine_testova_historija">
            <img src={historijaIlustracija}></img>
            <div className="osobine_testova_podaci_historija">
              <h2>Historija est magistra vitae</h2>
              <p>
                Svi živimo u sadašnjosti i planiramo budućnost - ali kako
                razumjeti kamo idemo i kako izgleda napredak? Da biste tačno
                znali kuda idete, prvo morate razumjeti odakle dolazite. Za to
                vam je potrebno poštovanje istorije.
              </p>
            </div>
          </div>
          <div className="osobine_testova_znanje">
            <img src={znanjeIlustracija}></img>
            <div className="osobine_testova_podaci_znanje">
              <h2>Generalno znanje</h2>
              <p>
                Opšte znanje je nešto što nam zaista pomaže da rastemo kako na
                ličnom tako i na akademskom nivou. Sužava naš osjećaj za
                opažanje svijeta, razumije i analizira situacije bolje kao što
                bismo to učinili bez odgovarajućeg znanja. Važno je znati šta se
                događa oko vas.
              </p>
            </div>
          </div>
          <div className="osobine_testova_sport">
            <img src={sportIlustracija}></img>
            <div className="osobine_testova_podaci_sport">
              <h2>Sportsko znanje</h2>
              <p>
                Znanje o sportu je najvažniji faktor ukupnog sportskog uspjeha.
                Takvo znanje može se steći obrazovanjem i iskustvom, ali znanje
                je više od običnog poznavanja pravila i propisa. Ukoliko znate
                sportsku historiju svoje zemlje, znati ćete i kako da istu
                poboljšate
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OsobineTestova;
