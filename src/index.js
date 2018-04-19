import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>
	, document.getElementById('root')
);