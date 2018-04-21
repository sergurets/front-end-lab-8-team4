import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWidthMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWidthMiddleWare(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
