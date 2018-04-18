import { combineReducers } from 'redux';
import jobList from './jobList_reducer';

const rootReducer = combineReducers({
	jobList
})

export default rootReducer;
