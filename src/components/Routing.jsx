import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage"
import Fiche from "./Fiche"
import { TransitionGroup, CSSTransition } from "react-transition-group";
function Routing({ location }) {
    return (
      <div>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/fiche/:ficheNumber(\d+)" component={Fiche} />
              </Switch>
            </section>
            </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
  export default withRouter(Routing);  