import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ZaboravljenaSifra from "./components/ForgotPass/ZaboravljenaSifra";
import Login from "./components/Login/Login";
import Registracija from "./components/Registracija/Registracija";
import KompletnaStranica from "./components/KompletnaStranica";
import RutaZaKviz from "./RutaZaKviz";
import Kviz from "./components/Kviz/Kviz";
import ResetŠifre from "./components/ResetPass/ResetŠifre";
import GeneralnoZnanje from "./components/Generalno/GeneralnoZnanje";
import Sport from "./components/Sport/Sport";
import Historija from "./components/Historija/Historija";
import Profil from "./components/Profil/Profil";
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
          <Route
            path="/kviz/generalnoznanje"
            component={GeneralnoZnanje}
          ></Route>
          <Route path="/kviz/sport" component={Sport}></Route>
          <Route path="/kviz/historija" component={Historija}></Route>
          <Route path="/kviz/profil" component={Profil}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PočetnaStranica;
