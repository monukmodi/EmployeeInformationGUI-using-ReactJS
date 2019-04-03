import React, { Component } from 'react';
import './TestEmailSetup.css'
import Gplus from '../Form/images/gplus.svg';
import MsOffice from '../Form/images/office.svg';
import Question from '../Form/images/question.svg';
export default class EmailSetup extends Component {
    render() {
        return (
            <div >
                <div className="emailsetuphead">
                    <h3>Email SetUp</h3>
                    <p>Which Email Provider are you using? PicK Below!</p>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="EmailColSetup">
                            <div className="contentcenterimage">
                                <img src={Gplus} style={{ width: "35%" }} alt="" />
                            </div>
                            <div className="contentcenter">
                                <h5 >Using Gmail</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="EmailColSetup">
                            <div className="contentcenterimage">
                                <img src={MsOffice} style={{ width: "35%" }} alt="" />
                            </div>
                            <div className="contentcenter">
                                <h5>Using MsOffice</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="AnotherEmailColSetup">
                            <div className="contentcenterimage">
                                <img src={Question} style={{ width: "35%" }} alt="" />
                            </div>
                            <div className="contentcenter">
                                <h5>Using Device</h5>
                            </div>
                        </div>
                    </div>
                </div>
















                {/* <div style={{ marginTop: "2rem" }} className="row">

                    <div style={{border:"1px solid"}} className="col-md-4">                        
                        <div className="gmail">
                            <div className="gmailimagedesktop">
                                <img className="gmailimage"
                                    src={Gplus}
                                />
                            </div>
                            <div className="gmailimagecontent">
                                <img className="gmailimage"
                                    src={Gplus}
                                />
                            </div>
                            <div className="Gmailcontentdesk">
                                <p style={{ color: "#FFFFFF", paddingTop: "1rem" }}>I am Using Gmail</p>
                            </div>
                            <div className="Gmailcontent">
                                <p style={{ color: "#FFFFFF" }}>Gmail</p>
                            </div>

                        </div>
                    </div>
                   
                    <div className="col-md-4 emailsetupcenter">
                        <div className="msoffice">
                            <div style={{ textAlign: "center" }}>
                                <img className="msofficeimage"
                                    src={MsOffice}
                                />
                            </div>
                            <div className="msofficecontentdesk">
                                <p style={{ color: "#FFFFFF", paddingTop: "1rem" }}>I am Using Office 365</p>
                            </div>
                            <div className="msofficecontent">
                                <p style={{ color: "#FFFFFF" }}>Office</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4 emailsetupcenter">
                        <div className="anotherdevice">
                            <div style={{ textAlign: "center" }}>
                                <img className="anotherdeviceimage"
                                    src={Question}
                                />
                            </div>
                            <div className="anothercontentdesk">
                                <p style={{ color: "#FFFFFF", paddingTop: "1rem" }}>I am Using Another Service</p>
                            </div>
                            <div className="anothercontent">
                                <p style={{ color: "#FFFFFF" }}>Service</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                




                <div style={{ textAlign: "center" }}>
                    <button type="button" class="btn btn-link">Skip Step</button>
                </div>

            </div>
        )
    }
}