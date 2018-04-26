import { firebaseJobs } from '../firebase.js';

export function jobList() {
	return dispatch => {
		firebaseJobs.on('value', snapshot => {
			dispatch({
				type: 'jobList',
				jobs: snapshot.val()

			});
		});
	};
}
