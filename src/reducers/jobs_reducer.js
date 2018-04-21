export default function (state = {}, action) {
    switch (action.type) {
        case 'JOBS_LIST':
            return { ...state, jobs: action.payload }
        default:
            return state;
    }
}