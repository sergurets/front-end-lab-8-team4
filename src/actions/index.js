import * as firebase from 'firebase';
import {
  firebaseJobs,
  firebaseJobsArchive
} from '../firebase.js'


export function jobList() {
  return dispatch => {
    firebaseJobs.on('value', snapshot => {
      console.log(snapshot.val());
      dispatch({
        type: 'jobList',
        jobs: snapshot.val()

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
  console.log('yyyete', job, key);
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

export const addExecutor = (mail, key) => {
  console.log('yyyete', mail, key);
  firebase.database().ref(`jobList/${key}`).update({
    "executor": mail
  })
}

export const deleteJob = (job, key) => {
  firebaseJobsArchive.push(job);
  firebase.database().ref(`jobList/${key}`).set({
    title: null
  });
}
