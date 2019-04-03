import React, { Component } from 'react';
import Businessinfoimage from '../UserProfile/images/clock.svg';
import './Businessinfoprofile.css'

export default class Businessinfoprofile extends Component {
    render() {
        return (
            <div className="showbusinessinfo">
                <div className="row m-0">

                    <div className="col">
                        <div style={{ textAlign: "center", marginTop: "4rem" }}>
                            <img style={{ width: "50%", textAlign: "center" }} src={Businessinfoimage} alt="" />
                            <h5 >Business Info</h5>
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
