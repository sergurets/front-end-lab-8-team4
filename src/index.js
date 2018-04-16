import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/RoksaPage/HomePage.js';
import SamPage from './pages/SamPage/SamPage.js';
import SergiyPage from './pages/SergiyPage/SergiyPage.js';
import Addjob from './pages/SergiyPage/addjob.js';
import Login from './pages/TaniaPage/Login.js';
import Registration from './pages/TaniaPage/Registration.js';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/HomePage' component={HomePage}></Route>
				<Route path='/SamPage' component={SamPage}></Route>
				<Route path='/SergiyPage' component={SergiyPage}></Route>
				<Route path='/Addjob' component={Addjob}></Route>
				<Route path='/Login' component={Login}></Route>
				<Route path='/Registration' component={Registration}></Route>
			</div>
		</BrowserRouter>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
