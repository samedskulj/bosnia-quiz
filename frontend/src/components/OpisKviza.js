import React from "react";
import "./OpisKviza.css";
import prvaIlustracija from "../slike/undraw_Questions_re_1fy7.png";
const OpisKviza = () => {
  return (
    <>
      <main className="opis_kviza">
        <div>
          <h2>Mislis da znas o svojoj drzavi, sto se ne testiras?</h2>
          <p>lorem10</p>
        </div>
        <img src={prvaIlustracija}></img>
      </main>
    </>
  );
};

export default OpisKviza;
