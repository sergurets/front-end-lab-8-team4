import { firebaseJobs } from '../firebase';
export const FETCH_JOBS = 'fetch_jobs';

export function getJobs() {
    return dispatch => {
        firebaseJobs.on('value', snapshot => {
            dispatch({
                type: FETCH_JOBS,
                payload: snapshot.val()
            })
        })
    }
}

export function postJob() {

}

export function deleteJob() {

}