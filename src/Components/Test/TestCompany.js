import React, { Component } from 'react';
import './TestCompany.css';

export default class TestForm extends Component {
    render() {
        return (
            <div>

            <h3>Company Info</h3>
                <form>
                <div className="">
                        <div class="form-group">
                            <label for="inputCname">Company Name</label>
                            <input type="text" class="form-control" id="inputCname1" placeholder="Nvest" />
                        </div>
                      
                    </div>
                    <div className="form-group">
                        <label for="inputCemail">Company Email</label>
                        <input type="email" class="form-control" id="inputCemail1" placeholder="nvest@xyz.com" />
                    </div>
                    <div className="form-group">
                        <label for="inputCphone">Company Phone</label>
                        <input type="text" class="form-control" id="inputCphone1" placeholder="555-555-555" />
                    </div>
                    <div className="form-group">
                        <label for="inputCposition">Your Position in Company:</label>
                        <input type="text" class="form-control" id="inputCposition1" placeholder="Nvest" />
                    </div>
                    <button type="submit" class="btn btn-primary testcompany" onClick={this.props.tabthree}>Next</button>
                </form>
            </div>
        )
    }
}
