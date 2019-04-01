import React, { Component } from 'react'

export default class TestForm extends Component {
  render() {
    return (
      <div>

        <h3>Personal Info</h3>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputfname">First Name</label>
              <input type="text" class="form-control" id="inputfname1" placeholder="Jhon" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputlname">Last Name</label>
              <input type="password" class="form-control" id="inputlname1" placeholder="Doe" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputemail">Email</label>
            <input type="email" class="form-control" id="inputemail1" placeholder="Jhon@xyz.com" />
          </div>
          <div class="form-group">
            <label for="inputphone">Phone</label>
            <input type="text" class="form-control" id="inputphone1" placeholder="9876543210" />
          </div>
          <div class="form-group">
            <label for="inputadd">Where are You From ?</label>
            <input type="text" class="form-control" id="inputadd1" placeholder="India" />
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    )
  }
}
