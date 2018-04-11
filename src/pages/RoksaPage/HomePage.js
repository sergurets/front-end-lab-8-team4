import React from 'react';
import ReactDOM from 'react-dom';
import './HomePage.css';

import Header from './Header/Header.js'
import AboutUs from './AboutUs/AboutUs.js'
import JobList from './JobList/JobList.js'

class HomePage extends React.Component{
	render(){
		return(
			<div>
		 		<Header/>
		 		<AboutUs/>
		 		<JobList/>
			</div>
		);
	}
}

export default HomePage
