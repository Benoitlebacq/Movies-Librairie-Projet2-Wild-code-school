import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage"
import Fiche from "./Fiche"
function Routing({ location }) {
    return (
      <div>
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/fiche/:ficheNumber(\d+)" component={Fiche} />
              </Switch>
            </section>
      </div>
    );
  }
  export default withRouter(Routing);  