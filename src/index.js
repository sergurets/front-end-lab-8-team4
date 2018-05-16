import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import fireb from './firebase';
import {checkUser} from './actions';

const createStoreWidthMiddleWare = applyMiddleware(thunk)(createStore);
let store = createStoreWidthMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
fireb.firebase.auth().onAuthStateChanged((user)=>{
	checkUser(user, store);
});
