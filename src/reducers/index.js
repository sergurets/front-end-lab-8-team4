import { combineReducers } from 'redux';
import jobList from './jobList_reducer';
import userList from './userList_reducer';

const rootReducer = combineReducers({
    jobList,
    userList
})

export default rootReducer;