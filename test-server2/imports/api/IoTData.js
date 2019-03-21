import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const IoTData = new Mongo.Collection('data');

Meteor.methods({
  'iotdata.insert'(source) {
    IoTData.insert({
      source
    });
    return 'data inserted!';
  },
  'iotdata.removeAll'() { //reset collection
    IoTData.remove({});
    return 'data removed' ;
  },
  'iotdata.count'(){
    let count = IoTData.find({}).count();
    return count;
  },
  'iotdata.fetch'(){
    let data = IoTData.find({}).fetch();
    return data;
  }
});
