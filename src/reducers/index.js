import { combineReducers } from 'redux';

import jobList from './jobList';
import users from './users';

export default combineReducers({
   jobList,
   users   	
})