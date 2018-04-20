const initialState = [
		{name:"vasyl",
		surname:"petrovich",
		password:"123",
		city:"lviv",
		email:"vasyl@gmail.com",
		isLogged:false}, 
		{name:"vasyl",
		surname:"petrovich",
		password:"123",
		city:"lviv",
		email:"vasyl@gmail.com",
		isLogged:false}
	] 

export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_USER') {
    return [
      ...state, action.payload]
    } else if(action.type === "DISPLAY_USERS"){
		return state;
	}

  return state;
}