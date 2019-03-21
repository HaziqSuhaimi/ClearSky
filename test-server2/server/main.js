import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import IoTData from '/imports/api/IoTData';

const broker = 'a2vyiluu6d4991-ats.iot.us-east-2.amazonaws.com';
const topic = 'ClearSky/iot';

var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   keyPath: Assets.absoluteFilePath('src/ec98c8d4ab-private.pem.key'),
  certPath: Assets.absoluteFilePath('src/ec98c8d4ab-certificate.pem.crt'),
    caPath: Assets.absoluteFilePath('src/AmazonRootCA1.pem.txt'),
  clientId: 'webApp_server',
      host: broker
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device.on('connect', function(err) {
  (err)? console.log('collecting...') :console.log('connected');
  device.subscribe(topic);

    // device.publish('topic_2', JSON.stringify({ test_data: 1}));
  });


device.on('message', Meteor.bindEnvironment((topik, payload) => {
        // Everything is good now
        let raw = payload.toString();
        let jsonified =JSON.stringify(raw);
        let obj = JSON.parse(jsonified);
        let data = JSON.parse(obj);
        // let co = data.CO; //example
        insert(data);
        // reset();
        // count();
  })
  );

reset = ()=>{ //only done by server guy to reset data
  Meteor.call('iotdata.removeAll',(err,res)=>{
    (!err)? console.log(res):console.error(err);
  });
}

insert = (dataObj)=>{
  Meteor.call('iotdata.insert',dataObj,(err,res) =>{
    (!err)? console.log(res): console.error(err);
  });
}

count = ()=>{
  Meteor.call('iotdata.count',(err,res) =>{
    (!err)? console.log(res): console.error(err);
  });
}

viewData = () =>{
  Meteor.call('iotdata.fetch',(err,res)=>{
    (!err)? console.log(res): console.error(err);
  });
}
