import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component {
	render() {
		return (
			<section className="section--home section--full-height">
				<div className="home-circle"></div>
				<div id="about-us" className="section__layout">
					<div className="section__content">
						<h1 className="about-us__header">About Us</h1>
						<div className="mega_layout">
							<p className="about-us__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							{/* <div id="main-logo">
								<img alt='logo' src="https://firebasestorage.googleapis.com/v0/b/and-job-for-all.appspot.com/o/darker-logo.svg?alt=media&token=7e1dcaea-14d8-498d-91e9-0a3f27bde243" />
							</div> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default AboutUs;
