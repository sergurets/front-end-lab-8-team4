import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


import Header from './components/Header/Header.js';
import Page from './pages/RoksaPage/Page.js';
import UserProfile from './pages/SamPage/UserProfile';
import jobInfo from './pages/SergiyPage/jobInfo.js';
import Addjob from './pages/SergiyPage/addjob.js';
import Login from './components/Login/Login.js';
import Registration from './components/Registration/Registration.js';
import editJob from './pages/SergiyPage/editJob.js';
import * as firebase from 'firebase';
const App = (props) => {
	return (
		<Router>
			< Layout {...props} />
		</Router>
	)
}

const PrivateRoute = ({
	isLogged,
	component: Comp,
	...rest
}) => {
	return <Route {...rest} component={(props) => (
		isLogged ?
			<Comp {...props} />
			:
			<Redirect to="/login" />
	)} />
}

const Layout = (props) => {
	return (
		<div className="layout">
			<Header />
			<Route path="/Page" component={Page} />
			<Route path="/UserProfile" component={UserProfile} />
			<Route path="/jobInfo" component={jobInfo} />
			<PrivateRoute isLogged={props.auth} path="/Addjob" component={Addjob} />
			<PrivateRoute isLogged={props.auth} path="/editJob" component={editJob} />
			<Route path="/login" component={Login} />
			<Route path="/registration" component={Registration} />


		</div>
	)
}
export default App 