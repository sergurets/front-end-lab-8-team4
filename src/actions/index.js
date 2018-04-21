export function jobsList() {
    return {
        type: 'JOBS_LIST',
        payload: [
            { id: 1, name: 'job1' },
            { id: 2, name: 'job2' },
            { id: 3, name: 'job3' }
        ]
    }
}