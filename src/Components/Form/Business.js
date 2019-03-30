import React, { Component } from 'react';


export default class Business extends Component {
    state ={
        data:[{day:"Monday"},
              {day:"Tuesday"},
              {day:"Wednesday"},
              {day:"Thursday"},
              {day:"Friday"},
              {day:"Satuarday"}
             ]
    }
    render() {
        return (
            <div>
                <h5>Business Hours</h5>
                
             
             {this.state.data.map(week =>{
                  return(
                    <form >
                   <div className="row ">
                       <div className="col-md-3">
                       <label htmlFor="">{week.day}</label>
                       </div>
                       <div className="col">   
                            <input style={{marginRight:"2rem"}} type="time"/>
                            <input type="time"/>
                       </div>
                       
                   
                   </div>
                   </form>
                   )
              })}
             <div>

             </div>
             <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Previous
                  </button>    
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Next
                  </button>         
            </div>
        )
    }
}
