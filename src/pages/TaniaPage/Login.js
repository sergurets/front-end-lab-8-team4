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
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
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
  	handleChange(event){
   		this.setState({[event.target.id]: event.target.value});
  	}
	singOut(){
		firebase.auth().signOut().then(function() {
	  		alert('logged out');
	  		document.getElementsByClassName('header__nav__item')[3].style.display = 'block';
		}).catch(function(error) {
	  		console.log(error);
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
        			onChange={this.handleChange}
			        required
			      /><br/>
			      <input type="password"
			        placeholder="Enter password"
			        id="password"
			        className="regform__pass"
			        value={this.state.password}
        			onChange={this.handleChange}
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
