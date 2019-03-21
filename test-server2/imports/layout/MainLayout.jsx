import React, {Component} from 'react';
import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Moment from 'moment';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Weather from '/imports/ui/Weather';
import GeoMap from '/imports/ui/GeoMap';
import Pollution from '/imports/ui/Pollution';
import Compare from '/imports/ui/Compare';

import IoTData from '/imports/api/IoTData';

let co;
let co2;
let ch4;
let ts;
let _co = [];
let _co2 = [];
let _ch4 = [];
let _ts = [];
let array_size;


export default class MainLayout extends TrackerReact(Component){
  constructor(){
    super();
  }

  render(){
    Meteor.call('iotdata.fetch',(err,res)=>{
      // return (!err)? console.log(res) : console.log(err);
      if(!err){
        let rawDatas = res.map(data=>{
          co = data.source.CO;
          co2 = data.source.CO2;
          ch4 = data.source.CH4;
          ts = Moment.unix(data.source.timestamp).utcOffset("+08:00").format("MMMM DD, h:mm:ss a");

          _co.push(co);
          _co2.push(co2);
          _ch4.push(ch4);
          _ts.push(ts);

          // console.log(ts);
        });
      }else{
        console.error(err);
      }
    });

    Meteor.call('iotdata.count',(err,res)=>{
      array_size = res;
    });

    _ts = _ts.slice(0,array_size+1);
    _co = _co.slice(0,array_size+1);
    _co2 = _co2.slice(0,array_size+1);
    _ch4 = _ch4.slice(0,array_size+1);

    return (
      <div>
        <Weather />
        <div className='row'>
        <h3>IoT Devices Heat Map</h3>
        <GeoMap className='col s12' />
        </div>
        <h3>What's in The Air?</h3>
        <div className='row'>
        <Pollution val={co} title={'Carbon Monoxide,CO'} des={'Carbon monoxide is a colorless, odorless, tasteless and definitely toxic gas. '} />
        <Pollution val={co2} title={'Carbon Dioxide,CO2'} des={'Carbon dioxide is a colorless gas with a density about 60% higher than that of dry air.'} />
        <Pollution val={ch4} title={'Methane,CH4'} des={'This basically leads to dehydration. Nausea and vomiting are also methane gas poisoning symptoms.'} />
        </div>
        <h3>Pollution Intensity in Your Area</h3>
        <Compare timestamp={_ts} co={_co} co2={_co2} ch4={_ch4} />
      </div>

    );

  }

}
