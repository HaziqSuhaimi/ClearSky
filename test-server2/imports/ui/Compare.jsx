import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';

let data;
export default class Compare extends Component{
  constructor(props){
    super(props);
     data = {
      labels: this.props.timestamp,          // ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      datasets: [
        {
          label:'Carbon Monoxide',
          // fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,0,192,0.4)',
          borderColor: 'rgba(75,0,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,0,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,0,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.co
        },
        {
          label:'Methane',
          // fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,100,192,0.4)',
          borderColor: 'rgba(75,100,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,100,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,100,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.ch4
        },
        {
          label:'Carbon Dioxide',
          // fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.co2
        }]
    };

  }

  render(){
    return(
      <div>
      <Line data={data} />
      </div>
    );
  }
}
