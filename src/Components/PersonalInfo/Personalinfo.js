import React, { Component } from 'react';
import './Personalinfo.css';
import TestCompany from '../Test/TestCompany';
import TestForm from '../Test/TestForm';
import TestBusiness from '../Test/TestBusiness';
import TestEmailSetup from '../Test/TestEmailSetup';
import PersonalUserInfo from '../UserProfile/PersonalUserInfo';
import CompanyUserInfo from '../UserProfile/Companyinfoprofile';
import BusinessuserInfo from '../UserProfile/Businessinfoprofile';
import EmailuserInfo from '../UserProfile/Emailinfoprofile';
export default class Personalinfo extends Component {

  state = {
    toggle1: true,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    data: []
  }
  tabone = () => {
    this.setState({
      toggle1: true,
      toggle2: false,
      toggle3: false,
      toggle4: false
    })
  }
  tabtwo = () => {
    this.setState({
      toggle1: false,
      toggle2: true,
      toggle3: false,
      toggle4: false
    })
  }
  tabthree = () => {
    this.setState({
      toggle1: false,
      toggle2: false,
      toggle3: true,
      toggle4: false
    })
  }
  tabfour = () => {
    this.setState({
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: true
    })
  }
  getData = (data) => {

    let todos = [data]
    this.setState({
      data: todos
    })

  }
  handleClick = () => {
    console.log("hey")
  }
  render() {
    return (
      <div >
        <div className="centerform ">
          <div className="row m-0">
            <div className="col-md-4 order-md-2">
              <div className="row m-0 ">
                <div>
                  <div className="tab" >
                    <h6 onClick={this.tabone} className={this.state.toggle1 ? "subtabs cursor" : "cursor"}>1</h6>
                  </div>
                </div>
                <div>
                  <div className="tab">
                    <h6 onClick={this.tabtwo} className={this.state.toggle2 ? "subtabs cursor" : "cursor"}>2</h6>
                  </div>
                </div>
                <div>
                  <div className="tab">
                    <h6 onClick={this.tabthree} className={this.state.toggle3 ? "subtabs cursor" : "cursor"}>3</h6>
                  </div>
                </div>
                <div>
                  <div className="tab">
                    <h6 onClick={this.tabfour} className={this.state.toggle4 ? "subtabs cursor" : "cursor"}>4</h6>
                  </div>
                </div>
              </div>
              <div className="personaluserinfo">
                {/* <PersonalUserInfo uerdetail={this.state.data}/> */}
                {this.state.toggle1 ? <PersonalUserInfo userdetail={this.state.data} /> : null}
                {this.state.toggle2 ? <CompanyUserInfo /> : null}
                {this.state.toggle3 ? <BusinessuserInfo /> : null}
                {this.state.toggle4 ? <EmailuserInfo /> : null}
              </div>
            </div>
            <div className="col-md-8 order-md-1">
              {this.state.toggle1 ? <TestForm getData={this.getData} tabtwo={this.tabtwo} /> : null}
              {this.state.toggle2 ? <TestCompany tabthree={this.tabthree} /> : null}
              {this.state.toggle3 ? <TestBusiness tabfour={this.tabfour} /> : null}
              {this.state.toggle4 ? <TestEmailSetup /> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
