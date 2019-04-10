import React, { Component } from 'react';
import './App.css';
//import bootstrap css and Availity css
import 'bootstrap/dist/css/bootstrap.min.css';
import './elegant_login.css'

// add const for list of state abreviations
const STATE_LIST = [
  "AK",'AL','AR','AZ','CA','CO','CT','DC',
  'DE','FL','GA','HI','IA','ID','IL','IN',
  'KS','KY','LA','MA','MD','ME','MI','MN',
  'MO','MS','MT','NC','ND','NE','NH','NJ',
  'NM','NV','NY','OH','OK','OR','PA','PR',
  'RI','SC','SD','TN','TX','UT','VA','VT',
  'WA','WI','WV','WY'
];

class App extends Component {
  // Add code for state properties
  constructor(props){
    super(props);
    this.state = {
      stateAbre: []
    };
  }

  createStateList(){
    if(this.state.stateAbre.length === 0){
      for(let i = 0; i < STATE_LIST.length; i++){
        this.state.stateAbre.push(<option value={STATE_LIST[i]}>{STATE_LIST[i]}</option>);
      }
    }
    return this.state.stateAbre;
  }
  
  // Add event handler for form submit to supply an alert box that the user was able to successfully submit
  handleSubmit(event){
    event.preventDefault();
    alert("You have submitted your registration!")
  }

  render() {
    return (
      <div className="App">
        {/* Create base form */}
        <main className="row justify-content-center">
          <form className="needs-validation bg-light col-6 my-5 rounded" name="registration" onSubmit={this.handleSubmit} >
            <div className="bg-dark row rounded mb-2">
              <div className="loginLogoPrivacy">&nbsp;</div>
            </div>
            <div className="form-row text-dark text center mb-2">
              <h1 className="col-12 font-weight-bold">Registration Form</h1>
            </div>
            {/* Form must have fields for First Name, Last Name, NPI Number, Business Address,
          Telephone number, and Email address */}
            <div className="form-row text-dark text-left">
              <div className="col-md-6 mb-2">
                <label className="font-weight-bold" for="firstName">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstName" 
                  placeholder="First name"
                  required/>
              </div>
              <div className="col-md-6 mb-2">
                <label className="font-weight-bold" for="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  required/>
              </div>
            </div>
            <div className="form-row text-dark text-left">
              <div className="col-md-7 mb-2">
                <label className="font-weight-bold" for="npi">NPI Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="npi"
                  placeholder="NPI #"
                  required/>
              </div>
            </div>
            <div className="form-row text-dark text-left">
              <div className="col-md-10 mb-2">
                <label className="font-weight-bold" for="streetAddress">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  placeholder="Street Address"
                  required/>
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  placeholder="optional"/>
              </div>
            </div>
            <div className="form-row text-dark text-left">
              <div className="col-md-6 mb-2">
                <label className="font-weight-bold" for="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  required/>
              </div>
              <div className="col-xs-1 mb-2">
                <label className="font-weight-bold" for="states">State</label>
                <select id="states" required className="form-control">
                  <option selected></option>
                  {this.createStateList()}
                </select>
              </div>
              <div className="col-md-3 mb-2">
                <label className="font-weight-bold" for="zip">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="Zip Code"
                  required/>
              </div>
            </div>
            <div className="form-row text-dark text-left">
              <div className="col-md-7 mb-2">
                <label className="font-weight-bold" for="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="123-456-7890"
                  required/>
              </div>
            </div>
            <div className="form-row text-dark text-left">
              <div className="col-md-7 mb-2">
                <label className="font-weight-bold" for="emailAddress">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="example@example.com"
                  required/>
              </div>
            </div>
            {/* Form needs a register button */}
            <div className="form-row justify-content-right">
              <div className="col-12 justify-content-right">
                <button className="btn btn-primary mb-3 float-right" type="submit">Register</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
