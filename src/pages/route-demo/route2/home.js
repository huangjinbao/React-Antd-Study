import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/about">About2</Link>
          </li>
          <li>
            <Link to="/main">Main2</Link>
          </li>
          <li>
            <Link to="/topic">Topic2</Link>
          </li>
        </ul>
        <tr />
        {this.props.children}
      </div>
      
    );
  }
}
