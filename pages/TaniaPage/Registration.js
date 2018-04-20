import React, { Component } from 'react';
import './Registration.css';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class App extends Component{

	constructor(props){
    super(props);
    this.state = {
      name: "",
      surname: "",
      password: "",
      city: "",
      email: "",
      isLogged: false
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
    console.log(this.props);
    this.props.onAddUser(this.state);
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
        className="regform__name"
        value={this.state.name}
        onChange={this.handleNameChange}
        required
      />
      <input type="text"
        placeholder="Enter surname"
        id="surname"
        className="regform__surname"
        value={this.state.surname}
        onChange={this.handleSurNameChange}
        required
      /><br/>
      <input type="password"
        placeholder="Enter password"
        id="password"
        className="regform__pass"
        value={this.state.password}
        onChange={this.handlePasswordChange}
        required
      /><br/>
      <input type="password"
        placeholder="Confirm password"
        id="cpassword"
        className="regform__cpass"
        required
      /><br/>
      <input type="text"
        placeholder="Enter city"
        id="city"
        className="regform__city"
        value={this.state.city}
        onChange={this.handleCityChange}
        required
      /><br/>
      <input type="email"
        placeholder="E-mail"
        id="email"
        className="regform__email"
        value={this.state.email}
        onChange={this.handleEmailChange}
        required
      /><br/>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" name="photo" multiple accept="image/*,image/jpeg"/><br/>
      <button className="regform__send">Send</button>
      </form>
      </div>
    );
  }
}



export default connect(
	state => ({
		users: state.users
	}),
	dispatch => ({
		onAddUser: (user)=>{
			dispatch({type: 'ADD_USER', payload: user})
		}
	})
)(App)
