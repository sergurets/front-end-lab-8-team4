import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
	render(){
		return (
			<div className='regform'>
				<form onSubmit={this.handleSubmit} method="post">
			      <input type="email"
			        placeholder="E-mail"
			        id="email"
			        className="regform__email"
			        required
			      /><br/>
			      <input type="password"
			        placeholder="Enter password"
			        id="password"
			        className="regform__pass"
			        required
			      /><br/>
			      <button className="regform_send">Send</button>
			    </form>
			</div>
		)
	}
}

export default Login;
