import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


// let data = {
// 	// labels: [
// 		// 	// 'Red',
// 		// 	// 'Green',
// 		// 	// 'Carbon Monoxide'
// 		// ],
// 		datasets: [{
// 			data: [30,100],
// 			backgroundColor: [
// 				// '#FF6384',
// 				// '#36A2EB',
// 				'#FFCE56'
// 			],
// 			hoverBackgroundColor: [
// 				// '#FF6384',
// 				// '#36A2EB',
// 				'#FFCE56'
// 			]
// 		}]
// 	};

// let gas_val = data.datasets[0].data[0];

export default class Pollution extends Component{
	constructor(props){
		super(props);
		// this.state ={
		// 	value: data
		// }
	}

	// onChange(){
	// 	data = {
	// 		datasets: [{
	// 			data: [this.props.val,100-this.props.val],
	// 			backgroundColor: ['#FFCE56'],
	// 			hoverBackgroundColor: [	'#FFCE56']
	// 		}]
	// 	};
	// 	console.log(this.props.val);
	// 	this.setState({value: data});
	// }

  render(){
		let	data = {
				labels: [
					this.props.title
					],
				datasets: [{
					data: [this.props.val,100-this.props.val],
					backgroundColor: ['#FFCE56'],
					hoverBackgroundColor: [	'#FFCE56']
				}]
			};
    return(
      <div>
      <div style={{width:'40', height:'80'}}>
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.title}</span>
              <Doughnut data={data} />
            </div>
            <div className="card-action white">
              <p>{this.props.des}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
