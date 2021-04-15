import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ZaboravljenaSifra from "./components/ForgotPass/ZaboravljenaSifra";
import Login from "./components/Login/Login";
import Registracija from "./components/Registracija/Registracija";
import KompletnaStranica from "./components/KompletnaStranica";
import RutaZaKviz from "./RutaZaKviz";
import Kviz from "./components/Kviz/Kviz";
import ResetŠifre from "./components/ResetPass/ResetŠifre";
import { connect } from "react-redux";
import GeneralnoZnanje from "./components/Generalno/GeneralnoZnanje";
const PočetnaStranica = () => {
  return (
    <div>
      <Router>
        <Switch>
          <RutaZaKviz exact path="/kviz" component={Kviz}></RutaZaKviz>
          <Route exact path="/" component={KompletnaStranica}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/registracija" component={Registracija}></Route>
          <Route
            path="/zaboravljenasifra"
            component={ZaboravljenaSifra}
          ></Route>
          <Route
            path="/passwordreset/:resetToken"
            component={ResetŠifre}
          ></Route>
          <Route path="/kviz/generalnoznanje">
            <GeneralnoZnanje></GeneralnoZnanje>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PočetnaStranica;
