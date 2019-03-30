import React, { Component } from "react";
import './Company.css'
export default class Personal extends Component {
  render() {
    return (
      <div>
        <div >

          <div style={{width:"100%",height:"auto"}}>
            <div className="row m-0">

              <form style={{ width: "50%" }}>
                <div className="" style={{ border: "1px dotted black", width: "100%" }}>
                  <button style={{ width: "100%" }}>
                    <input style={{ width: "100%" }} type="file" className="" id="" placeholder="" />


                  </button>
                </div>
                <div className="form-group ">
                  <label for="">Company Name</label>
                  <input type="text" className="form-control" id="" placeholder="Enter Company Name" />
                </div>

                <div className="form-group">
                  <label for="">Company Phone_No</label>
                  <input type="text" className="form-control" id="" placeholder="Enter Phone No." />
                </div>

                <div className="form-group">
                  <label for="">Company Email</label>
                  <input type="email" className="form-control" id="" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label for="">Your Position in Company</label>
                  <input type="text" className="form-control" id="" placeholder="Enter Phone No." />
                </div>
                <button
                    style={{ float: "right",marginLeft:"4rem",borderRadius:"2rem"}}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                  <button
                    style={{ float: "right",borderRadius:"2rem"}}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Previous
                  </button>
              </form>
            </div>

          </div>
        </div>
      </div>

    );
  }
}