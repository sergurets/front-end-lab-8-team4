import { firebaseJobs } from '../firebase';
export const FETCH_JOBS = 'fetch_jobs';

export const getJobs = () => {
    return dispatch => {
        firebaseJobs.on('value', snapshot => {
            dispatch({
                type: FETCH_JOBS,
                payload: snapshot.val()
            })
        })
    }
}

export const saveJob = (job) => {
    return dispatch => firebaseJobs.push(job);
}