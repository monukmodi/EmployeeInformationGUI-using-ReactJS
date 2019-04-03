import React, { Component } from 'react';
import './TestBusiness.css'
export default class TestBusiness extends Component {
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
                <h3>Business Hours</h3>
                
             
             {this.state.data.map(week =>{
                  return(
                    <form >
                   <div style={{marginTop:"1rem"}} className="row ">
                       <div className="col-md-3">
        
                       <label htmlFor="">{week.day}</label>
                       </div>
                       <div className="col">   
                            <input style={{marginRight:"2.5rem"}} type="time"/>
                            <input type="time"/>
                       </div>
                   </div>
                   </form>
                   )
              })}
              <button type="submit" class="btn btn-primary testcompany" onClick={this.props.tabfour}>Next</button>
            </div>
        )
    }
}
