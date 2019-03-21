import React, {Component} from 'react';
import ReactMapGL,{SVGOverlay} from 'react-map-gl';

let longLat = [
  {city: 'Seri Kembangan' ,long: 101.7069 , lat:3.0278 },
  {city: 'Shah Alam' ,long: 101.5296 , lat:3.0906 },
  {city: 'Klang' ,long: 101.5500183 , lat:3.020369892 },
  {city: 'Putrajaya' ,long: 101.5499977 , lat:	3.066695996 },
  {city: 'Batu Pahat' ,long:102.9333447 , lat:	1.850363789 },
  {city: 'Keluang' ,long:103.317869 , lat:	2.038310973 },
  {city: 'Raub' ,long:101.8423002 , lat:	3.792700011 },
  {city: 'Kota Baharu' ,long:102.2299768 , lat:	6.119973978 },
  {city: 'Kangar' ,long:100.1899987 , lat:6.4330019918 },
  {city: 'Kota Kinabalu' ,long:116.1100081 , lat:5.979982523 },
  {city: 'Lahad Datu' ,long:118.3359704 , lat:5.046396097 },
  {city: 'Bintulu' ,long:113.0359838 , lat:	3.16640749 },
  {city: 'Sibu' ,long:111.8430334 , lat:2.302971821 },

];

function q({project}) {
    let [cx, cy] = project([101.7069,3.0278]);
    return <circle cx={cx} cy={cy} r={8} fill="blue" />

}
function w({project}) {
    let [cx, cy] = project([101.5296,3.0906]);
    return <circle cx={cx} cy={cy} r={4} fill="blue" />

}
function e({project}) {
    let [cx, cy] = project([101.5500183,3.020369892]);
    return <circle cx={cx} cy={cy} r={5} fill="blue" />


}
function r({project}) {
    let [cx, cy] = project([101.5499977,3.066695996]);
    return <circle cx={cx} cy={cy} r={4} fill="blue" />

}
function t({project}) {
    let [cx, cy] = project([102.9333447,1.850363789]);
    return <circle cx={cx} cy={cy} r={2} fill="blue" />

}
function y({project}) {
    let [cx, cy] = project([103.317869,2.038310973]);
    return <circle cx={cx} cy={cy} r={1} fill="blue" />

}
function u({project}) {
    let [cx, cy] = project([101.8423002,3.792700011]);
    return <circle cx={cx} cy={cy} r={4} fill="blue" />

}
function i({project}) {
    let [cx, cy] = project([102.2299768,6.119973978]);
    return <circle cx={cx} cy={cy} r={4} fill="blue" />

}
function o({project}) {
    let [cx, cy] = project([100.1899987,6.4330019918]);
    return <circle cx={cx} cy={cy} r={7} fill="blue" />

}
function p({project}) {
    let [cx, cy] = project([116.1100081.long,5.979982523]);
    return <circle cx={cx} cy={cy} r={5} fill="blue" />

}
function l({project}) {
    let [cx, cy] = project([118.3359704,5.046396097]);
    return <circle cx={cx} cy={cy} r={2} fill="blue" />

}
function k({project}) {
    let [cx, cy] = project([113.0359838,3.16640749]);
    return <circle cx={cx} cy={cy} r={3} fill="blue" />

}
function j({project}) {
    let [cx, cy] = project([111.8430334,2.302971821]);
    return <circle cx={cx} cy={cy} r={6} fill="blue" />

}

export default class Map extends Component {

  state = {
    viewport: {
      width: 1450,
      height: 700,
      latitude: 3.444893318084817,
      longitude: 109.30771287905303,
      zoom: 5.668201553263755,
      // style: 'mapbox://styles/mapbox/basic-v9'
    }
  };

  _onViewportChange = viewport => {
    // if (viewport.longitude > 0) {
    //     viewport.longitude = 0;
    // }
    // console.log('lat',viewport.latitude);
    // console.log('long',viewport.longitude);
    // console.log('zoom',viewport.zoom);
    this.setState({viewport});
}

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiaGF6aXFzdWhhaW1pIiwiYSI6ImNqdDk1b21oYTBnM3k0OWs4Y21ycmZiNm8ifQ.zJB6ifp6DjWGVTnse_PVnw'}
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}>
        <SVGOverlay redraw={q} />
        <SVGOverlay redraw={w} />
        <SVGOverlay redraw={e} />
        <SVGOverlay redraw={r} />
        <SVGOverlay redraw={t} />
{/*        <SVGOverlay redraw={y} />
        <SVGOverlay redraw={u} />
        <SVGOverlay redraw={i} />
        <SVGOverlay redraw={o} />
        <SVGOverlay redraw={p} />*/}
        <SVGOverlay redraw={l} />
        <SVGOverlay redraw={k} />
        <SVGOverlay redraw={j} />
      </ ReactMapGL>
    );
  }
}
