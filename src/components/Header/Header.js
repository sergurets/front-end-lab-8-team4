import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.scrollAboutUs = this.scrollAboutUs.bind(this);
		this.scrollToJob = this.scrollToJob.bind(this);
	}

	onScroll = () => {
		if (window.pageYOffset > 50) {
			document.querySelector('.header').classList.add("header--scrolled");
		} else {
			document.querySelector('.header').classList.remove("header--scrolled");
		}

	}

	scrollToJob() {
		if (window.pageYOffset < 300) {
			window.scrollBy(0, 500);
		}
	}

	scrollAboutUs() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;

	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
		document.querySelector('#toClickJob').addEventListener('click', this.scrollToJob);
		document.querySelector('#toClickAbout').addEventListener('click', this.scrollAboutUs);
	}

	render() {
		return (
			<header className="header section--header ">
				<nav className="header__nav">
					<Link to="/#job-container" id="toClickJob" className="header__nav-links" >
						Find a job
          			</Link>
					<Link to="/Addjob" className="header__nav-links">
						Post a job
					</Link>

					<Link to="/#about-us" id="toClickAbout" className="header__nav-links" >
						About us
          			</Link>
				</nav>
				<div className="header__div">
					<Link to="/Login" className="header__nav-links header__div-links" >
						<span>Sign in</span>
					</Link>
					<Link to="/UserProfile" className="header__div__img" />
				</div>
			</header>
		);
	}

}

export default Header;
