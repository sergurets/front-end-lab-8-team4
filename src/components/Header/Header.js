import React from 'react';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav className="nav-header">
			<a href="#job-container" className="nav-item-link">Find a job</a>
						<a href="#" className="nav-item-link">Post a job</a>
						<a href="#about-us" className="nav-item-link">About us</a>
		</nav>
		<div className = "div-header">
			<a href="" className="nav-item-link">Sign in</a>
			<a href="" className="div-header-img"></a>
		</div>
			</header>
		);
	}
}

export default Header
