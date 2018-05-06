import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="header__nav">//header-nav
					<a href="/Page#job-container" className="header__nav__item">Find a job</a>
					<Link to="/Addjob" className="header__nav__item">Post a job</Link>
					<a href="/Page#about-us" className="header__nav__item">About us</a>

				</nav>
				<div className="header__div">//header-div
					<Link to="/Login" className="header__nav__item">Sign in</Link>
					<Link to="/UserProfile" className="header__div__img"></Link>
				</div>
			</header>
		);
	}
}

export default Header
