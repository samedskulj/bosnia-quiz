import React, { useState } from "react";
import OpisKviza from "./components/OpisKviza";
import Navigacija from "./components/Navigacija";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Komponente from "./components/Komponente";
import OsobineTestova from "./components/OsobineTestova";
import LičniPodaci from "./components/LičniPodaci";
import KontaktPodaci from "./components/Kontakt podaci/KontaktPodaci";
const PočetnaStranica = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  return (
    <div>
      <Router>
        <Navigacija></Navigacija>
        <Switch>
          <Route exact path="/">
            <OpisKviza></OpisKviza>
            <Komponente></Komponente>
            <OsobineTestova></OsobineTestova>
            <LičniPodaci></LičniPodaci>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PočetnaStranica;
