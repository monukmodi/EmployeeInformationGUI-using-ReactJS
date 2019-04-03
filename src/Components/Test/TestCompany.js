import React, { Component } from 'react';
import './TestCompany.css';

export default class TestForm extends Component {
    state={
        Cname:'',Cemail:'',Cphone:'',Cposition:''
    }
    handleChange = (e) =>{
        this.setState({
         [e.target.name]:e.target.value
        }) 
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.getData(this.state)
      }
    render() {
        return (
            <div>

            <h3>Company Info</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="">
                        <div className="form-group">
                            <label htmlfor="" for="inputCname">Company Name</label>
                            <input type="text" className="form-control" name="Cname" placeholder="Nvest" onChange={this.handleChange} />
                        </div>
                      
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCemail">Company Email</label>
                        <input type="email" className="form-control" name="Cemail" placeholder="nvest@xyz.com" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCphone">Company Phone</label>
                        <input type="text" className="form-control" name="Cphone" placeholder="555-555-555" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="" for="inputCposition">Your Position in Company:</label>
                        <input type="text" className="form-control" name="Cposition" placeholder="Nvest" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary testcompany" onClick={this.props.tabthree}>Next</button>
                </form>
            </div>
        )
    }
}
