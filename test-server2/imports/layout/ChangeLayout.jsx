import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

export default class ChangeLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img height="300" className="activator" src="/images/love.jpg" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                <i class="material-icons right">close</i>We Love Clean Air
              </span>
              <p>
                Air pollution is one of the most serious problems in the world.
                It refers to the contamination of the atmosphere by harmful
                chemicals or biological materials. According to the World's
                Worst Polluted Places by Blacksmith Institute in 2008, two of
                the worst pollution problems in the world are urban air quality
                and indoor air pollution. To solve the problem of air pollution,
                it's necessary to understand the issues and look for ways to
                counter it.
              </p>
            </div>
          </div>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <label for="first_name">First Name</label>
                <input id="first_name" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <label for="last_name">Last Name</label>
                <input id="last_name" type="text" className="validate" />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <label for="email">Email</label>
                <input id="email" type="email" className="validate" />
              </div>
            </div>

            <div className="row">
              <p>Any suspicious pollution activity? Write it down below :</p>
              <div className="input-field col s12">
                <label for="textarea1">Speak Out!</label>
                <textarea id="textarea1" className="materialize-textarea" />
              </div>
            </div>
            <div className="file-field input-field">
              <p>Put any evidance here :</p>
              <div className="btn">
                <span>File</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>
          <button
            class="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}
