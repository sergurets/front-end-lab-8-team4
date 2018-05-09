import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import fireb from './firebase'

const createStoreWidthMiddleWare = applyMiddleware(thunk)(createStore);
let store = createStoreWidthMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
fireb.firebase.auth().onAuthStateChanged((user)=>{
	ReactDOM.render(
		<Provider store={store}>
			<App auth={user}/>
		</Provider>,
		document.getElementById('root')
	);
});