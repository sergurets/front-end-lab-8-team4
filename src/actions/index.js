import { firebaseJobs, firebaseTrueUsers } from '../firebase.js';

export function jobList() {
	return dispatch => {
		firebaseJobs.on('value', snapshot => {
			dispatch({
				type: 'FETCH_JOB_LIST',
				jobs: snapshot.val()
			});
		});
	};
}

export function userList() {
	return dispatch => {
		firebaseTrueUsers.on('value', snapshot => {
			dispatch({
				type: 'FETCH_USER_LIST',
				payload: snapshot.val()
			});
		});
	};
}

export const saveJob = (job) => {
	return dispatch => firebaseJobs.push(job);
}