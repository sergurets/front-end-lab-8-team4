import { FETCH_JOB_LIST } from "../actions/actionTypes";


export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_JOB_LIST:
			return { ...state, jobList: action.jobs };
		default:
			return state;
	}
}
