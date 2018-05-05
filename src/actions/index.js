import * as firebase from 'firebase';
import {
  firebaseJobs,
  firebaseJobsArchive,
  firebaseTrueUsers
} from '../firebase.js'


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

export function getUser(mail) {
  return dispatch => {
    firebaseTrueUsers.orderByChild('email').equalTo(mail).on('value', snapshot => {
      dispatch({
        type: 'FETCH_USER_LIST',
        payload: snapshot.val()
      });
    });
  };
}


export const saveJob = (job) => {
  return dispatch => {
    var dataKey = firebaseJobs.push(job).key;
    var Ref = firebase.database().ref(`jobList/${dataKey}`);
    Ref.update({
      "databaseId": dataKey
    });
    dispatch({
      type: 'addJob',
      jobs: dataKey
    });

  }
}

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
    "id": job.id,
    "jobStatus": job.jobStatus,
    "title": job.title
  })
}

export const addExecutor = (mail, id, jobStatus, key) => {
  firebase.database().ref(`jobList/${key}`).update({
    "executor": mail,
    "executorId": id,
	"jobStatus": jobStatus

  })
}


export const deleteJob = (job, key) => {
  firebaseJobsArchive.push(job);
  firebase.database().ref(`jobList/${key}`).set({
    title: null
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
