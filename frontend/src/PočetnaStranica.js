import React from "react";
import OpisKviza from "./components/OpisKviza";
import Navigacija from "./components/Navigacija";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Komponente from "./components/Komponente";
const PočetnaStranica = () => {
  return (
    <div>
      <Router>
        <Navigacija></Navigacija>
        <Switch>
          <Route exact path="/">
            <OpisKviza></OpisKviza>
            <hr
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></hr>
            <Komponente></Komponente>
          </Route>
          <Route path="/infokviz"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PočetnaStranica;
