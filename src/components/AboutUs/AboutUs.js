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
							<p className="about-us__text"> Try to think how many things you can do with some extra time? <br/> Our website will help you to save your time and to find employees to work for you, while you can do whatever you want.<br/> Or if you are looking for some extra money, then you are in wright place. Here you can find a well paid one-time job.</p>
						</div>
					</div>
					<div id="main-logo">
						<img alt='logo' src="https://firebasestorage.googleapis.com/v0/b/and-job-for-all.appspot.com/o/darker-logo.svg?alt=media&token=7e1dcaea-14d8-498d-91e9-0a3f27bde243" />
					</div>
				</div>
			</section>
		);
	}
}
export default AboutUs;
