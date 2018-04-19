export default function(state = {}, action){
	switch(action.type){
		case 'jobList':
			return {...state,jobList:action.jobs};
		default :
			return state;
	}
}
