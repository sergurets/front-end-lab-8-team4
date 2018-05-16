export default function(state = {}, action){
	switch(action.type){
		case 'CurUser':
			return {...state, CurUser: action.payload};
		default :
			return state;
	}
}
