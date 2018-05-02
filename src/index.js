import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWidthMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWidthMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
		<App />
	</Provider>,
	document.getElementById('root')
);

