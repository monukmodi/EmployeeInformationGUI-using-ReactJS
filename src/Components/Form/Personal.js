import React, { Component } from "react";
export default class Personal extends Component {
  render() {
    return (
      <div>
        <div >
          <div className="row m-0 col-sm-12">            
              <form>
                <div className="form-row col-md">
                  <div className="form-group col-md-6 ">
                    <label htmlFor="inputfname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      placeholder="Jhon"
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label htmlFor="inputlname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlname"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputemail">Email id</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputemail"
                    placeholder="jhon@xyz.com"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputphone">Phone No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputphone"
                    placeholder="555-555-555"
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="inputaddress">Where are You From</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputaddress"
                    placeholder="Bangalore"
                  />
                  <button
                    style={{ float: "right" }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>    
    );
  }
}



































// import React, { Component } from 'react'

// export default class Form extends Component {
//   render() {
//     return (
//       <div>
        
//       <div className="formdesign">
//           <div className="row m-0">
            
//               <form>
//                 <div className="form-row col-md">
//                   <div className="form-group col-md-6 ">
//                     <label htmlFor="inputfname">First Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="inputfname"
//                       placeholder="Jhon"
//                     />
//                   </div>
//                   <div className="form-group col-md-6 ">
//                     <label htmlFor="inputlname">Last Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="inputlname"
//                       placeholder="Doe"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-group col-md-12">
//                   <label htmlFor="inputemail">Email id</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="inputemail"
//                     placeholder="jhon@xyz.com"
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <label htmlFor="inputphone">Phone No</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputphone"
//                     placeholder="555-555-555"
//                   />
//                 </div>

//                 <div className="form-group col-md-12">
//                   <label htmlFor="inputaddress">Where are You From</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputaddress"
//                     placeholder="Bangalore"
//                   />
//                   <button
//                     style={{ float: "right" }}
//                     type="submit"
//                     className="btn btn-primary"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </form>
//             </div>
            
//           </div>


//       </div>
//     )
//   }
// }
