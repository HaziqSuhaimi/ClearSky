import React,{Component} from 'react';
import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import Moment from 'moment';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const apikey = '&appid='+'158e9cfcf9064818475dab5668af21db';
const add = 'http://api.openweathermap.org/data/2.5/';
let loc;
let lat;
let long;
let url;
let weather;
let temp;
let description;
let icon;
let humidity;
let name_loc;
let now = Moment().format('a'); // am or pm
let mouse = '';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
 lat = position.coords.latitude;
 long = position.coords.longitude;
}

setTimeout(()=>{
  loc = 'weather?lat='+ lat +'&lon='+ long + '&units=metric';
  url = add.concat(loc,apikey);
  HTTP.get(url,(err,res)=>{
    (!err)? weather =res : console.error(err);
    dataParse();
  });
},1000);

dataParse = ()=>{
  weather = JSON.parse(weather.content)
  temp= weather.main.temp;
  description= weather.weather[0].description;
  icon= weather.weather[0].icon; //http://openweathermap.org/img/w/10d.png
  humidity= weather.main.humidity;
  name_loc= weather.name;
  // console.log(temp,description,icon,humidity,name_loc,now);
}

export default class Weather extends Component{
  constructor(){
    super();
    getLocation();
    this.state ={
      temp: '--',
      description: 'Let\'s see how today\'s feeling ',
      humidity:'--',
      name_loc: '--'
    }
  }
  greet(){
    let a = (now === 'am')? 'Good Morning, Haziq!': 'Good Evening, Haziq';
    return a;
  }

  set_state(){
    this.setState({
      temp: temp,
      description: description,
      humidity:humidity,
      name_loc: name_loc
    });
  }
  hover(){
    mouse = 'z-depth-2';
  }
  out(){
    mouse = '';
  }

  render(){
    // setTimer()
    return(
      <div onMouseOver={()=>{this.set_state()}} className="col s12 m7">
        <h2 className="header">{this.greet()}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img  src="/images/sunny.jpg"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2 onMouseOver={()=>{this.hover()}} onMouseOut={()=>{this.out()}} className={mouse}>{this.state.name_loc}</h2>
              <h3 onMouseOver={()=>{this.hover()}} onMouseOut={()=>{this.out()}} className={mouse}>{String(this.state.temp) + ' Celsius'}</h3>
              <h4 onMouseOver={()=>{this.hover()}} onMouseOut={()=>{this.out()}} className={mouse}>{'Humidity: '+this.state.humidity+ '%'}</h4>
              <h4 onMouseOver={()=>{this.hover()}} onMouseOut={()=>{this.out()}} className={mouse}>{'Description: ' +this.state.description}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
