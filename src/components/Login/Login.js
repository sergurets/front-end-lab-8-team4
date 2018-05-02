import React, {Component} from 'react';
import  fireb  from '../../firebase.js';
import { Link, Route, Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom'
import './Login.css';

class Login extends Component{
	constructor(props){
	    super(props);
		    this.state = {
		      password: "",
		      email: "",
		      prevurl: ""
		};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.singOut = this.singOut.bind(this);
	    this.testIfLogin = this.testIfLogin.bind(this);
  	} 
  	handleSubmit(event){
	    event.preventDefault();
	    console.log("Submited", this.state);
	    fireb.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(res => {
  			console.log(res); 
  			document.getElementsByClassName("regform--logout")[0].style.visibility = "visible";
  			//document.getElementsByClassName('header__nav__item')[3].style.display = 'none';
  			document.getElementsByClassName("regform--send")[0].style.visibility = "hidden";
  			alert('Successfully logged');
  			window.history.back();
  		}).catch(function(error) {
	    	 alert(error);
		});
		for (var ref in this.refs) {
  			this.refs[ref].value = "";
    	}
    	//this.context.router.push('/Page');
  	}
  	handleChange(event){
   		this.setState({[event.target.name]: event.target.value});
  	}
	singOut(){
		fireb.firebase.auth().signOut().then(function() {
	  		alert('logged out');
	  		//document.getElementsByClassName('header__nav__item')[3].style.visibility = 'visible';
	  		document.getElementsByClassName("regform--logout")[0].style.visibility = "hidden";
	  		document.getElementsByClassName("regform--send")[0].style.visibility = "visible";

		}).catch(function(error) {
	  		alert(error);
		});
	}
	testIfLogin(){
		var user = fireb.firebase.auth().currentUser;
		console.log('user', user);
		//alert('1');
		if(user){
			document.getElementsByClassName("regform--logout")[0].style.visibility = "visible";
			document.getElementsByClassName("regform--send")[0].style.visibility = "hidden";
		}
	}
	render(){
		const {from} = this.props.location.state || {from: {pathname: '/'}};
		return (
			<div className='regform' onMouseUp={this.testIfLogin}>
				<form onSubmit={this.handleSubmit} method="post">
			      <input type="email"
			        placeholder="E-mail"
			        name="email"
			        ref="email"
			        className="regform__input"
			        value={this.state.email}
        			onChange={this.handleChange}
			        required
			      /><br/>
			      <input type="password"
			        placeholder="Enter password"
			        name="password"
			        ref="pass"
			        className="regform__input"
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
