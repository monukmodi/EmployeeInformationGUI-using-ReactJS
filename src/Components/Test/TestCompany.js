import React, { Component } from 'react';
import './TestCompany.css';

export default class TestForm extends Component {
    render() {
        return (
            <div>

            <h3>Company Info</h3>
                <form>
                <div className="">
                        <div className="form-group">
                            <label htmlfor="" for="inputCname">Company Name</label>
                            <input type="text" className="form-control" id="inputCname1" placeholder="Nvest" />
                        </div>
                      
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCemail">Company Email</label>
                        <input type="email" className="form-control" id="inputCemail1" placeholder="nvest@xyz.com" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCphone">Company Phone</label>
                        <input type="text" className="form-control" id="inputCphone1" placeholder="555-555-555" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCposition">Your Position in Company:</label>
                        <input type="text" className="form-control" id="inputCposition1" placeholder="Nvest" />
                    </div>
                    <button type="submit" className="btn btn-primary testcompany" onClick={this.props.tabthree}>Next</button>
                </form>
            </div>
        )
    }
}
