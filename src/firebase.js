import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyB1kcURclpPVLCp9SA5yDa_6GF01L_2mG8",
	authDomain: "and-job-for-all.firebaseapp.com",
	databaseURL: "https://and-job-for-all.firebaseio.com",
	projectId: "and-job-for-all",
	storageBucket: "and-job-for-all.appspot.com",
	messagingSenderId: "515341851666"
};

firebase.initializeApp(config);
const firebaseDB = firebase.database();

export const firebaseUsers = firebaseDB.ref('users');
export const firebaseTrueUsers = firebaseDB.ref('usersT');
export const firebaseJobs = firebaseDB.ref('jobList');

export default {
	firebase,
	firebaseDB,
	firebaseUsers,
	firebaseJobs,
	firebaseTrueUsers,
}