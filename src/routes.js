import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import Page from './pages/RoksaPage/Page.js';
import SamPage from './pages/SamPage/SamPage.js';
import SergiyPage from './pages/SergiyPage/SergiyPage.js';
import Addjob from './pages/SergiyPage/addjob.js';
import Login from './pages/TaniaPage/Login.js';
import Registration from './pages/TaniaPage/Registration.js';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' component={Page}></Route>
				<Route path='/SamPage' component={SamPage}></Route>
				<Route path='/SergiyPage' component={SergiyPage}></Route>
		        <Route path = '/Addjob' component = {Addjob}></Route>
				<Route path='/Login' component={Login}></Route>
				<Route path='/Registration' component={Registration}></Route>
			</div>
		</BrowserRouter>
	);
}

export default App
