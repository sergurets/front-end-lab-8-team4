import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './addjob.css';
import { saveJob } from '../../actions';
import { firebaseJobList } from '../../firebase';
import * as firebase from 'firebase';
//import Map from './Map/map.js';
import Autocomplete from 'react-google-autocomplete';


function addLink(id){
	if (id!=undefined){var link=document.createElement('p');
	link.innerHTML = `<a href='jobInfo#${id}'>link to job</a>`;
	document.getElementById('addJobForm').appendChild(link);}
};
function TodayDate(){var defaultDate = new Date; 
	if (defaultDate.getMonth() <=8) {var month = '0' + (defaultDate.getMonth()+1)}
	else {var month = (defaultDate.getMonth()+1)}
	return `${defaultDate.getFullYear()}-${month}-${defaultDate.getDate()}`;}
	
var defDate = TodayDate();	


class Addjob extends Component {
	constructor(props){
		super(props);
		this.state = {
		  title: "",
		  info: "",
		  salary: "",
		  duration: "up to 2 hours" ,
		  deadlineDate: defDate
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.infohandleInfoChange = this.infohandleInfoChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);		
		
	  }
	
	handleSubmit(event){
		event.preventDefault();
		this.state.id= Date.now().toString();
		addLink(this.state.id);
		this.props.onAddJob(this.state);
 		
	  }
	  
	  handleDateChange(event){
		this.setState({deadlineDate: event.target.value});
	  }

	  handleSalaryChange(event){
		this.setState({salary: event.target.value});
	  }
	
	  handleDurationChange(event){
		this.setState({duration: event.target.value});
		console.log(event.target.value)
	  }


	  handleSalaryChange(event){
		this.setState({salary: event.target.value});
	  }
	
	  handleTitleChange(event){
		this.setState({title: event.target.value});
	  }
	
	  infohandleInfoChange(event){
		this.setState({info: event.target.value});
	  }
	


	
  render() {

	var user = firebase.auth().currentUser;  
	if (user)	
	{ this.state.user = user.email;
		return (
      <div id='addJobForm'>
	  <form onSubmit={this.handleSubmit} method="post" 
	  className="formjob">
      <input type="text"
        placeholder="title"
        id="title"
        className="regform_name"
        value={this.state.title}
        onChange={this.handleTitleChange}
        required
      />
	  <br/>
      <textarea
        placeholder="Enter info"
        id="info"
        className="form input"
        value={this.state.info}
        onChange={this.infohandleInfoChange}
        required
      /><br/>
      <Autocomplete
				style={{width: '90%'}}
				onPlaceSelected={(place) => {
				  /*Coordinates.lng = place.geometry.viewport.b.b;
				  Coordinates.lat = place.geometry.viewport.f.b;
				  Coordinates.city = place.address_components[0].long_name;
				  console.log(Coordinates,place)*/
				  this.state.lng = (place.geometry.viewport.b.f+place.geometry.viewport.b.b)/2;
				  console.log(this.state.lng);
				  this.state.lat = (place.geometry.viewport.f.f+place.geometry.viewport.f.b)/2;
				  this.state.city = place.address_components[0].long_name;
				  console.log(this.state,place.geometry.viewport)
				}}
				types={['(regions)']}
				componentRestrictions={{country: "ua"}}
                />
<br/>
	  <input type="number"
	    min="0"
        placeholder="salary"
        id="salary"
        className="form input"
        value={this.state.salary}
        onChange={this.handleSalaryChange}
        required
      /><br/>
	  <label className="formLabel">Тривалість</label>
	  <select
	  onChange={this.handleDurationChange}
	  value={this.state.duration}
	  required>
      <option>up to 2 hours</option>
      <option>3-5 hours</option>
	  <option>6-8 hours</option>
	  <option>more than 8 hours</option>
      </select>			
	  <label className="formLabel">Крайній термін</label>
	  <input 
      min = {defDate}
	  onChange={this.handleDateChange} 
	  value={this.state.deadlineDate}
	  type="date" 
	  name="calendar" 
	 
	 className="inpform"
	 required/>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" name="photo" multiple accept="image/*,image/jpeg" onChange={this.handleFileUpload} value={this.state.file}/><br/>
      <button className="button">Send</button>
      </form>
	  
      </div>
    );
	}
	else return (
	<div>
	You need to login
	</div>
	)
  }
}


const mapStateToProps = (state) => {
	return {
		saveJob: state.saveJob
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAddJob : (job) => {
			dispatch(saveJob(job))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Addjob);


