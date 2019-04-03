import React, { Component } from 'react';
import Emailinfoimage from '../UserProfile/images/emailSetup.svg';
import './Emailinfoprofile.css';
export default class Emailinfoprofile extends Component {
  render() {
    return (
      <div className="showemailinfo">
        <div className="row m-0">

          <div className="col">
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <img style={{ width: "50%", textAlign: "center" }} src={Emailinfoimage} alt="" />
              <h5 >Email Info</h5>
              <p>Fill out the form in the Left. You can always edit the data.</p>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col">
            <div style={{ textAlign: "center", marginTop: "4rem" }}>

              <h5>(330-1234795)</h5>
              <p>Jhon@xyz.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
