import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/RoksaPage/HomePage.js';
import SamPage from './pages/SamPage/SamPage.js';
import SergiyPage from './pages/SergiyPage/SergiyPage.js';
import TaniaPage from './pages/TaniaPage/TaniaPage.js';





const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/HomePage' component={HomePage}></Route>
				<Route path='/SamPage' component={SamPage}></Route>
				<Route path='/SergiyPage' component={SergiyPage}></Route>
				<Route path='/TaniaPage' component={TaniaPage}></Route>
			</div>
		</BrowserRouter>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
