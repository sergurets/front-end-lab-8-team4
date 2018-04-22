const initialState = [
  {
  title: "Прибрати і вивезти сміття",
  info: "Прибрати і вивезти будівельне сміття на задньому дворі (залишки цегли і дошки). Об'єм приблизно 5 кубів.",
  city: "Львів",
  salary: "500",
  duration: "3-5 hours",
  deadlineDate: "2018-04-20",
  id: "1524211904457"},
];

  
  
  
  
export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_JOB') {
    return [
      ...state, action.payload]
    }

  else if(action.type === 'READ_JOB') {return state;}

  return state;
}
