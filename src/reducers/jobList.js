const initialState = [
  'Smoke On The Water',
  'Enter Sandman'];

export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_JOB') {
    return [
      ...state, action.payload]
    }

  else if(action.type === 'DELETE_JOB') {return state;}

  return state;
}
