import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import JobReducer from './JobReducer';

const rootReducer = combineReducers({
  form: formReducer,
  jobs: JobReducer
});

export default rootReducer;