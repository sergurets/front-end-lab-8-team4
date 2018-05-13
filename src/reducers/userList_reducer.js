import { FETCH_USER_LIST, GET_USER, EDIT_USER_INFO } from '../actions/actionTypes';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_USER_LIST:
			return { ...state, users: action.payload };
		case GET_USER:
			return { ...state, user: action.payload };
		case EDIT_USER_INFO:
			return { ...state, user: action.payload }
		default:
			return state;
	}
}