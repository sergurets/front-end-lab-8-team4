import React, {Component} from 'react';
import { firebase } from '../../firebase.js';
import './Login.css';

class Login extends Component{
	constructor(props){
	    super(props);
		    this.state = {
		      password: "",
		      email: ""
		};
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handlePasswordChange = this.handlePasswordChange.bind(this);
	    this.singOut = this.singOut.bind(this);
  	}
  	handleSubmit(event){
	    event.preventDefault();
	    console.log("Submited", this.state);
	    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(res => {
  			console.log(res);
  			document.getElementsByClassName('header__nav__item')[3].style.display = 'none';
  			alert('Successfully logged');
  		}).catch(function(error) {
	    	 console.log(error);
		});
  	}
  	handleEmailChange(event){
  		this.setState({email: event.target.value});
  	}

	handlePasswordChange(event){
	  	this.setState({password: event.target.value});
	}
	singOut(){
		firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  		alert('logged out');
		}).catch(function(error) {
	  // An error happened.
	  		alert('dayn');
		});
	}
	render(){
		return (
			<div className='regform'>
				<form onSubmit={this.handleSubmit} method="post">
			      <input type="email"
			        placeholder="E-mail"
			        id="email"
			        className="regform__email"
			        value={this.state.email}
        			onChange={this.handleEmailChange}
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
			      <button className="regform_send">Send</button>
			    </form>
			    <div>
				<button onClick={this.singOut}>Log Out</button>
			</div>
			</div>

		)
	}
}

export default Login;
