// action will return an object

/*const action = {
	type : 'jobList',
	job : [
		{id:1, description : 'ffkfkkfkfkf', job_title : 'mdmdmdm', owner: 'df'},
		{id:2, description : 'ffkfkkfkfkf', job_title : 'mdmdmdm', owner: 'df'}
	]
}*/



//reducer

export default function(state = {}, action){

	switch(action.type){
		case 'jobList':
			return {...state, jobList: action.jobList}
		default :
			return state;
	}
}
