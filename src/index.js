import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import RoksaPage from './pages/RoksaPage/RoksaPage.js';
import SemPage from './pages/SemPage/SemPage.js';
import SergiyPage from './pages/SergiyPage/SergiyPage.js';
import TaniaPage from './pages/TaniaPage/TaniaPage.js';




const App = () =>{
	return(
		<BrowserRouter>
			<div>
				<Route path = '/RoksaPage' component = {RoksaPage}></Route>
				<Route path = '/SemPage' component = {SemPage}></Route>
				<Route path = '/SergiyPage' component = {SergiyPage}></Route>
				<Route path = '/TaniaPage' component = {TaniaPage}></Route>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
