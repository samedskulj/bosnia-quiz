import React from "react";
import "./Komponente.css";
import drugaIlustracija from "../slike/undraw_Processing_re_tbdu.png";
import { MDBIcon } from "mdb-react-ui-kit";
const Komponente = () => {
  return (
    <>
      <main className="komponente">
        <div className="komponente_div">
          <h2>Lagan, čitljiv, razumljiv!</h2>
          <p id="komponente_div_prvi_p">
            Kviz je osmišljen da pomogne mladim ljudima, da se prisjete stvari
            koje su zaboravili <br></br>o svojoj domovini. Jedinstvena prilika,
            da pokažete svima koliko volite svoju državu.
          </p>
          <div className="komponente_ach">
            <div className="komponente_ach1">
              <MDBIcon className="ms-1" icon="star" far size="2x" />
              <p>
                Za svaki dobro odrađen test kviza, dobijate nagrade! Potrudite
                se da skupite što više trofeja
              </p>
            </div>
            <div className="komponente_ach2">
              <MDBIcon className="ms-1" icon="sync" fas size="2x" />
              <p>
                Ukoliko niste dobro odradili kviz, imate priliku da ponovite
                isti. Nemojte se predavati!
              </p>
            </div>
          </div>
        </div>
        <img src={drugaIlustracija}></img>
      </main>
    </>
  );
};

export default Komponente;
