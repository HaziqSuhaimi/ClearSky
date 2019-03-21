import React,{Component} from 'react';

export default class MyFooter extends Component{

  render(){
    return(
      <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">ClearSky</h5>
            <p className="grey-text text-lighten-4">A better way we can manage pollutions</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2019 Created by haziqsuhaimi
        </div>
      </div>
    </footer>

    );
  }
}
