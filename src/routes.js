import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './components/Header/Header.js';
import Page from './pages/RoksaPage/Page.js';
import UserProfile from './pages/SamPage/UserProfile';
import jobInfo from './components/JobInfo/JobInfo.js';
import Addjob from './components/AddJob/AddJob.js';
import Login from './components/Login/Login.js';
import Registration from './components/Registration/Registration.js';
import editJob from './components/EditJob/EditJob.js';
import Footer from './components/Footer/footer.js';

const Layout = ({ match }) => {

	return(
	<div className="layout">
		<Header />
		<Route path={`${match.url}/`} component={Page} />
		<Route path={`${match.url}UserProfile`} component={UserProfile} />
		<Route path={`${match.url}jobInfo`} component={jobInfo} />
		<Route path={`${match.url}Addjob`} component={Addjob} />
		<Route path={`${match.url}editJob`} component={editJob} />
		<Route path={`${match.url}login`} component={Login} />
		<Route path={`${match.url}registration`} component={Registration} />
		<Footer/>
	</div>
);

}

const mapStateToProps = (state) => {
	return {
		CurUser: state.user
	}
}

export default connect(mapStateToProps, null)(Layout);

