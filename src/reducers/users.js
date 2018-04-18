const initialState = [
    "vasia",
	"petya"
	] 

export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_USER') {
    return [
      ...state, action.payload]
    }
  else if(action.type === 'DELETE_USER') {return state;}

  return state;
}