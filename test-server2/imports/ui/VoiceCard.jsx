import React,{Component} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

export default class VoiceCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='container'>
      <div className='card'>
      <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <div className="chip">
              <img src={this.props.userImg} alt="Contact Person"/>
              {this.props.username}
              </div>
              <h6>{this.props.voice}</h6>
            </div>
            <div className="card-action">
            <a className="btn btn-floating btn-sm cyan pulse right"><i className="material-icons">thumb_up</i></a>
            <a className="btn btn-floating btn-sm light-blue accent-3 pulse right"><i className="material-icons">share</i></a>
            </div>
        </div>
        </div>
        </div>
      </div>

    );
  }
}
