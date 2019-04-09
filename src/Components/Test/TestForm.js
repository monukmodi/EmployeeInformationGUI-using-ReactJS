import React, { Component } from 'react';

export default class TestForm extends Component {
  state={
    fname:'', lname:'', email:'', phone:'', address:''
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
        <h3>Personal Info</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label >First Name</label>
              <input type="text"  className="form-control" name="fname" placeholder="Sushil"  onChange={this.handleChange}  />
            </div>
            <div className="form-group col-md-6">
              <label >Last Name</label>
              <input type="text"  className="form-control" name="lname" placeholder="Sharma"  onChange={this.handleChange}  />
            </div>
          </div>
          <div className="form-group">
            <label >Email</label>
            <input type="email" className="form-control" name="email" placeholder="Jhon@xyz.com" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label >Phone</label>
            <input type="text"  className="form-control" name="phone" placeholder="9876543210" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label >Where are You From ?</label>
            <input type="text"  className="form-control" name="address" placeholder="India" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.props.tabtwo}>Next</button>
          {/* <button onClick={this.props.tabtwo} >Click Here</button> */}
        </form>
      </div>
    )
  }
}
