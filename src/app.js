import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './routes.js';

const App = () => (
	<Router>
		<Route path="" component={Layout} />
	</Router>
);

export default App