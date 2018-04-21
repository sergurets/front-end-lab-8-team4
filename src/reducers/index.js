import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import jobs from './jobs_reducer';

const rootReducer = combineReducers({
    jobs,
    firebase
});

export default rootReducer;