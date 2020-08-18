import React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        This is Main page.
        <br />
        <Link to="/main/main-id">动态路由1</Link>
        <br />
        <Link to="/main/345">动态路由2</Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
