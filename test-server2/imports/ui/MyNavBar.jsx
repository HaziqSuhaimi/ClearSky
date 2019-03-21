import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

export default class MyNavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">ClearSky<i className="large material-icons">cloud</i></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/change">#MakeChange</a>
            </li>
            <li>
              <a href="/voice">#Voices</a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">@haziqsuhaimi</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
