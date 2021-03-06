import * as firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './../app.js';
import { Provider } from 'react-redux';
import {
	firebaseJobs,
	firebaseJobsArchive,
	firebaseTrueUsers
} from '../firebase.js';

import { FETCH_JOB_LIST, FETCH_USER_LIST, GET_USER, EDIT_USER_INFO } from './actionTypes';


export function jobList() {
	return dispatch => {
		firebaseJobs.on('value', snapshot => {
			dispatch({
				type: FETCH_JOB_LIST,
				jobs: snapshot.val()
			});
		});
	};
}

export function userList() {
	return dispatch => {
		firebaseTrueUsers.on('value', snapshot => {
			dispatch({
				type: FETCH_USER_LIST,
				payload: snapshot.val()
			});
		});
	};
}

export function getUser(email) {
	return dispatch => {
		firebaseTrueUsers.orderByChild('email').equalTo(email).on('value', snapshot => {
			dispatch({
				type: GET_USER,
				payload: snapshot.val()
			});
		});
	};
}

export const editUserInfo = (user, key, email) => {
	firebase.database().ref(`usersT/${key}`).update({
		"name": user.name,
		"surname": user.surname,
		"city": user.city
	});

	return dispatch => {
		firebaseTrueUsers.orderByChild('email').equalTo(email).once('value').then(snapshot => {
			dispatch({
				type: EDIT_USER_INFO,
				payload: snapshot.val()
			});
		});
	};
}

export const saveJob = (job) => {
	return dispatch => {
		let dataKey = firebaseJobs.push(job).key;
		let Ref = firebase.database().ref(`jobList/${dataKey}`);
		Ref.update({
			"databaseId": dataKey
		});
		dispatch({
			type: 'addJob',
			jobs: dataKey
		});
	}
};

export const editJob = (job, key) => {
	firebase.database().ref(`jobList/${key}`).update({
		"city": job.city,
		"lat": job.lat,
		"lng": job.lng,
		"deadlineDate": job.deadlineDate,
		"duration": job.duration,
		"info": job.info,
		"salary": job.salary,
		"title": job.title
	})
}

export const editJobUser = (job) => {
	firebase.database().ref(`usersT/${job.userID}/createdJob/${job.userJobKey}`).update({
		...job
	})
}

export const addExecutor = (mail, id, jobStatus, key) => {
	firebase.database().ref(`jobList/${key}`).update({
		"executor": mail,
		"executorId": id,
		"jobStatus": jobStatus

	})
}
export const deleteJob = (job, key, user) => {

	console.log(job);

	firebaseJobsArchive.push(job);
	firebase.database().ref(`jobList/${key}`).set({
		title: null
	});

	firebase.database().ref(`usersT/${user}/createdJob/${job.userJobKey}`).set({
		...job,
		jobStatus: 'deleted'
	});

}

export function deletejobExecutor(user, job) {
	firebase.database().ref(`usersT/${user}/AcceptedJob/${job.executorJobId}`).set({
		title: null
	});
	firebase.database().ref(`jobList/${job.databaseId}`).update({
		"executorJobId": ''
	});
	firebase.database().ref(`usersT/${job.userID}/createdJob/${job.userJobKey}`).update({
		"executor": null, "jobStatus": 'new'
	});
}

export function addjobExecutor(user, job) {
	var key = firebase.database().ref(`usersT/${user}/AcceptedJob`).push(job).key
	firebase.database().ref(`jobList/${job.jobKey}`).update({
		"executorJobId": key
	});
	firebase.database().ref(`usersT/${job.user}/createdJob/${job.userJobKey}`).update({
		"executor": user, "jobStatus": 'inProcess'
	});
}

export function addRatingToEmployer(rating, job) {
	firebase.database().ref(`usersT/${job.userID}/createdJob/${job.userJobKey}`).update({
		"jobStatus": "done", "ratingEmployer": rating
	});
	firebase.database().ref(`jobList/${job.databaseId}`).update({
		"jobStatus": "done", "ratingEmployer": rating
	});
	firebase.database().ref(`usersT/${job.executorId}/AcceptedJob/${job.executorJobId}`).update({
		"jobStatus": "done", "ratingEmployer": rating
	});
}

export function addRatingToEmployee(rating, job) {
	firebase.database().ref(`usersT/${job.userID}/createdJob/${job.userJobKey}`).update({
		"jobStatus": "done", "ratingEmployee": rating
	});
	firebase.database().ref(`jobList/${job.databaseId}`).update({
		"jobStatus": "done", "ratingEmployee": rating
	});
	firebase.database().ref(`usersT/${job.executorId}/AcceptedJob/${job.executorJobId}`).update({
		"jobStatus": "done", "ratingEmployee": rating
	});
}


export function checkUser(user, store) {
	store.dispatch({
		type: 'CurUser',
		payload: user
	});
	ReactDOM.render(
		<Provider store={store}>
			<App auth={user} />
		</Provider>,
		document.getElementById('root')
	);
}