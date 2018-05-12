import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component{
	render(){
		return (
			<section className = "section--home section--full-height">
			<div className = "home-circle"></div>
			<div id = "about-us" className = "section__layout">
				<div className = "section__content">
					<h1 className = "about-us__header">About Us</h1>
					<p className = "about-us__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			</section>
		);
	}
}
 export default AboutUs
