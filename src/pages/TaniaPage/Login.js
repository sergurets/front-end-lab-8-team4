import React, {Component} from 'react';
import  fireb  from '../../firebase.js';
import { Link } from 'react-router-dom'
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
	    fireb.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(res => {
  			console.log(res);
  			document.getElementsByClassName("regform--logout")[0].style.visibility = "visible";
  			document.getElementsByClassName('header__nav__item')[3].style.display = 'none';
  			alert('Successfully logged');
  			document.getElementsByTagName('input')[0].value ="";
  			document.getElementsByTagName('input')[1].value ="";
  		}).catch(function(error) {
	    	 alert(error);
		});
  	}
  	handleChange(event){
   		this.setState({[event.target.id]: event.target.value});
  	}
	singOut(){
		fireb.firebase.auth().signOut().then(function() {
	  		alert('logged out');
	  		document.getElementsByClassName('header__nav__item')[3].style.display = 'block';
	  		document.getElementsByClassName("regform--logout")[0].style.visibility = "hidden";
		}).catch(function(error) {
	  		alert(error);
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
			      <button className="regform--send">Send</button>
			    </form>
			    <div>
					<button onClick={this.singOut} className="regform--logout">Log Out</button>
				</div>
				<div>
					<Link to="/registration" className="regform__register">Don't have an account? Register now</Link>
				</div>
			</div>
		)
	}
}

export default Login;
