import React, { useState } from "react";
import OpisKviza from "./components/OpisKviza";
import Navigacija from "./components/Navigacija";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Komponente from "./components/Komponente";
import OsobineTestova from "./components/OsobineTestova";
import LičniPodaci from "./components/LičniPodaci";
import KontaktPodaci from "./components/Kontakt podaci/KontaktPodaci";
import Login from "./components/Login/Login";
import Registracija from "./components/Registracija/Registracija";
const PočetnaStranica = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigacija></Navigacija>
            <OpisKviza></OpisKviza>
            <Komponente></Komponente>
            <OsobineTestova></OsobineTestova>
            <LičniPodaci></LičniPodaci>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registracija">
            <Registracija></Registracija>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PočetnaStranica;
