import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header className = "header">
				<nav className="header__nav">
					<a href="#job-container" className="header__nav__item">Find a job</a>
					<Link to="#" className="header__nav__item">Post a job</Link>
					<a href="#about-us" className="header__nav__item">About us</a>
				</nav>
				<div className = "header__div">
					<Link to="" className="header__nav__item">Sign in</Link>
					<Link to="" className="header__div__img"></Link>
				</div>
			</header>
		);
	}
}

export default Header