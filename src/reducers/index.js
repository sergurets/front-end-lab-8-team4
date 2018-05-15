import { combineReducers } from 'redux';
import jobList from './jobList_reducer';
import userList from './userList_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    jobList,
    userList,
    user
})

export default rootReducer;
