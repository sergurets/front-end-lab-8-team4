import React, { Component } from 'react';
import './Registration.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      surname: "",
      password: "",
      city: "",
      email: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("Submited", this.state);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleSurNameChange(event){
    this.setState({surname: event.target.value});
  }

  handleCityChange(event){
    this.setState({city: event.target.value});
  }

  handleEmailChange(event){
  	this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
  	this.setState({password: event.target.value});
  }
  render(){
    return (
      <div className="regform">
      <form onSubmit={this.handleSubmit} method="post">
      <input type="text"
        placeholder="Enter name"
        id="name"
        className="regform_name"
        value={this.state.name}
        onChange={this.handleNameChange}
        required
      />
      <input type="text"
        placeholder="Enter surname"
        id="surname"
        className="regform_surname"
        value={this.state.surname}
        onChange={this.handleSurNameChange}
        required
      /><br/>
      <input type="password"
        placeholder="Enter password"
        id="password"
        className="regform_pass"
        value={this.state.password}
        onChange={this.handlePasswordChange}
        required
      /><br/>
      <input type="password"
        placeholder="Confirm password"
        id="cpassword"
        className="regform_cpass"
        required
      /><br/>
      <input type="text"
        placeholder="Enter city"
        id="city"
        className="regform_city"
        value={this.state.city}
        onChange={this.handleCityChange}
        required
      /><br/>
      <input type="email"
        placeholder="E-mail"
        id="email"
        className="regform_email"
        value={this.state.email}
        onChange={this.handleEmailChange}
        required
      /><br/>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" name="photo" multiple accept="image/*,image/jpeg"/><br/>
      <button className="regform_send">Send</button>
      </form>
      </div>
    );
  }
}


export default App;
