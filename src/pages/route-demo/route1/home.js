import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import About from "./about";
import Main from "./main";
import Topic from "./topic";
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <tr />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topic">
              <Topic />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
