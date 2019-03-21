import React,{Component} from 'react';
import * as Echarts from 'echarts';
// import 'echarts-countries-js/echarts.min.js';
// import 'echarts-countries-js/echarts-countries-js/Malaysia.js';

export default class GeoMap2 extends Component {

  constructor(){
    super();
    this.chartRef = React.createRef();
    this.state = {
      chartState: 'false'
    }
  }

  componentDidMount(){
    const node = this.chartRef.current;
    const new_node = Echarts.init(node);
    new_node.setOption({
    series : [
        {
            name: 'Reference Page',
            type: 'pie',
            radius: '55%',
            data:[
                {value:400, name:'Searching Engine'},
                {value:335, name:'Direct'},
                {value:310, name:'Email'},
                {value:274, name:'Alliance Advertisement'},
                {value:235, name:'Video Advertisement'}
            ]
        }
    ]
});

    this.setState({chartState:'true'});
    console.log('cdm');
  }

  render(){

    // let myChart = Echarts.init(node);
    console.log('render');
    return(
      <div width='720' height='480' ref={this.chartRef} >
      </div>
    );
  }
}


// function randomData() {
//     return Math.round(Math.random()*1000);
// }
