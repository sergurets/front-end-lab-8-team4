import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/map.js';
import Autocomplete from 'react-google-autocomplete';




import Addform from './addForm.js'
//import JobList from './JobList/JobList.js'


class AddJob extends React.Component{
	render(){
		return(
			<div>
		 		<Addform/>

			</div>
		);
	}
}

export default AddJob