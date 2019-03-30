import React, { Component } from 'react';
import './EmailSetup.css'
import Gplus from './images/gplus.svg';
import MsOffice from './images/office.svg';
import Question from './images/question.svg';
export default class EmailSetup extends Component {
    render() {
        return (
            <div >
            <div style={{marginTop:"1rem"}}>
            <h3>Email SetUp</h3>
            <p>Which Email Provider are you using? Pict Below!</p>
            </div>
                <div style={{marginTop:"2rem"}} className="row">
                    
                    <div className="col-md-4">
                        <div className="gmail">
                            <div style={{textAlign:"center"}}>
                                <img style={{ width: "50%" }}
                                    src={Gplus}
                                />
                                <p style={{ color: "#FFFFFF"}}>I am Using Gmail</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="msoffice">
                            <div style={{textAlign:"center"}}>
                                <img style={{ width: "50%" }}
                                    src={MsOffice}
                                />
                                <p style={{ color: "#FFFFFF", paddingTop:"1rem" }}>I am Using Office 365</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="anotherdevice">
                            <div style={{textAlign:"center"}}>
                                <img style={{ width: "50%" }}
                                    src={Question}
                                />
                                <p style={{ color: "#FFFFFF", paddingTop:"1rem" }}>I am Using Another Service</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                <h5 >If You Want to Skip this than STOP! and do it Later</h5>
                <button type="button" class="btn btn-link">Skip Step</button>
                </div>
                
            </div>
        )
    }
}