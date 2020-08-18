import React from "react";
import App from "./App";
import Admin from "./admin";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons/buttons";
import NoMatch from "./pages/noMatch";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route component={NoMatch} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </Router>
    );
  }
}
