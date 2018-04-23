import { combineReducers } from 'redux';
import jobList from './jobList_reducer';
import users from './users';

const rootReducer = combineReducers({
	jobList,
   users 
})

export default rootReducer;
