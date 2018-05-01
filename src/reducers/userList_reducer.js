export default function (state = {}, action) {
	switch (action.type) {
		case 'FETCH_USER_LIST':
			return { ...state, users: action.payload };
		default:
			return state;
	}
}