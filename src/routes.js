import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header/Header.js';
import Page from './pages/RoksaPage/Page.js';
import SamPage from './pages/SamPage/SamPage.js';
import SergiyPage from './pages/SergiyPage/SergiyPage.js';
import Addjob from './pages/SergiyPage/addjob.js';
import Login from './pages/TaniaPage/Login.js';
import Registration from './pages/TaniaPage/Registration.js';

const App = () => (
	<Router>
    	<Route path="/" component={Layout} />
	</Router>
);

const Layout = ({ match }) => (
  	<div className="layout">
  		<Header/>
    	<Route path={`${match.url}Page`} component={Page}/>
		<Route path={`${match.url}SamPage`} component={SamPage}/>
		<Route path={`${match.url}SergiyPage`} component={SergiyPage}/>
		<Route path={`${match.url}Addjob`} component = {Addjob}/>
		<Route path={`${match.url}Login`} component={Login}/>
		<Route path={`${match.url}Registration`} component={Registration}/>
  	</div>
);

export default App;
