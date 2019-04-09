import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";


import Galerie from "./Galerie"
import Fiche from "./Fiche"
function Container({ location }) {
    return (
      <div>
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={Galerie} />
                <Route path="/fiche/:ficheNumber(\d+)" component={Fiche} />
              </Switch>
            </section>

      </div>
    );
  }

  export default withRouter(Container);  