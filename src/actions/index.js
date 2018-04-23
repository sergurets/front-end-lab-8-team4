import * as firebase from 'firebase';
import {firebaseJobs} from '../firebase.js'
export function jobList(){
	return dispatch =>{
		firebaseJobs.on('value', snapshot =>{
			console.log(snapshot.val());
			dispatch({
				type: 'jobList',
				jobs: snapshot.val()

			});
		});
	};
}
