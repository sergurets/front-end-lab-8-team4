import * as firebase from 'firebase';
import {firebaseJobs} from '../firebase.js'
export function jobList(){
	return dispatch =>{
		firebaseJobs.on('value', snapshot =>{
			dispatch({
				type: 'jobList',
				jobs: snapshot.val()
			});
		});
	};
	/*let data = '';
	let job  => dispatch({
		firebaseJobs.once('value').then((snapshot) => {
		data = snapshot.val();
		console.log(data);
	});
	}
		job();
	console.log(data);
	return{
		type : 'jobList',
		jobs : [
			{id:1, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:2, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:3, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:4, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:5, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:6, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'},
			{id:7, description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', job_title : 'Cleaning job', owner: 'df'}
		]
	}*/
}
/*firebaseJobs.once('value').then((snapshot) => {
		data = snapshot.val();
		console.log(data);
	});*/
