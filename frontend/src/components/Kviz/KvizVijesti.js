import React from "react";
import "./KvizVijesti.css";
import { MDBIcon } from "mdb-react-ui-kit";
const KvizVijesti = () => {
  return (
    <>
      <main className="vijesti">
        <div className="vijesti_container">
          <div className="vijesti1">
            <div className="vijesti_trofej">
              <MDBIcon icon="trophy" size="3x" />
            </div>
          </div>
          <div className="vijesti2">
            <MDBIcon icon="grin-beam" size="3x"></MDBIcon>
          </div>
          <div className="vijesti3">
            <MDBIcon icon="search-plus" size="3x"></MDBIcon>
          </div>
        </div>
      </main>
    </>
  );
};

export default KvizVijesti;
