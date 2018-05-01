import React from 'react';
import ReactDOM from 'react-dom';
import './Page.css';

import AboutUs from './AboutUs/AboutUs.js';
import JobList from './JobList/JobList.js';
import WorkMap from './Map/map.js'

class HomePage extends React.Component{
	render(){
		return(
			<div>
		 		<AboutUs/>
		 		<JobList/>
		 		<WorkMap/>
			</div>
		);
	}
}

export default HomePage
