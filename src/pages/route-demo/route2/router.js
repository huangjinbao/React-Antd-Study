import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./home";
import Main from "./main";
import About from "../route1/about";
import Topic from "../route1/topic";

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/a">
                  <About />
                </Route>
              </Main>
            )}
          ></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
        </Home>
      </HashRouter>
    );
  }
}
