import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { jobList, editJob, editJobUser } from '../../actions';
import './addjob.css';
import Autocomplete from 'react-google-autocomplete';

let ID;
let Coordinates = {};
class JobEdit extends React.Component{
	defaultObj={}
	componentWillMount(){
        this.props.getJobs();
        this.handleTitleChange = this.handleTitleChange.bind(this);
		this.infohandleInfoChange = this.infohandleInfoChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);	
	}
	
	find(object, id){
		
		let obj={};
		for (let key in object){
			if (object[key].id===id){
					obj= Object.assign({}, object[key] );
				 }
			 }
		this.defaultObj=Object.assign({}, obj );	 
		ID = obj.databaseId;
		return obj;
    } 
    
    
    handleSubmit(event){
		event.preventDefault();
		let res=Object.assign(this.defaultObj, this.state, Coordinates );
		editJob(res,ID);
		editJobUser(res);
		window.location.href = `/jobInfo/#${res.id}`;
      		
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
	


	renderList = (jobList) =>{
			
		if (jobList)
		{ 
	     let obj = Object.assign({}, jobList);
		 let jobId=this.props.location.hash.slice(1)+'';
         let job=this.find(obj, jobId);	
 
		  let defaultState = {
            title: job.title,
            info: job.info,
            city: job.city,
            salary: job.salary,
            duration: job.duration ,
            deadlineDate: job.deadlineDate
          };
          let user = firebase.auth().currentUser;
	      if (job.user === user.email) {  
		  	return  (
	<div id="editJob">

            <form  onSubmit={this.handleSubmit} method="post" 
	  className="formjob">
	  <label className='formLabel'>title</label>
      <input type="text"
        placeholder="title"
        id="title"
        className="regform_name"
		defaultValue={defaultState.title}
       
        onChange={this.handleTitleChange}
        required
      />
	  <br/>
	  <label className='formLabel'>Enter info</label>
      <textarea
      
        placeholder="Enter info"
        id="info"
        className="form input"
        defaultValue={defaultState.info}
        onChange={this.infohandleInfoChange}
        required
      /><br/><label className='formLabel'>Location</label>
           <Autocomplete
		   placeholder={defaultState.city}
				style={{width: '80%'}}
				onPlaceSelected={(place) => {
				  Coordinates.lng = (place.geometry.viewport.b.f+place.geometry.viewport.b.b)/2;
				  Coordinates.lat = (place.geometry.viewport.f.f+place.geometry.viewport.f.b)/2;
				  Coordinates.city = place.formatted_address;
				}}
				types={['(regions)']}
				componentRestrictions={{country: "ua"}}
                /><br/>
	  <label className='formLabel'>Salary</label>
	  <input type="number"
	    min="0"
        placeholder="salary"
        id="salary"
        className="form input"
        defaultValue={defaultState.salary}
        onChange={this.handleSalaryChange}
        required
      /><br/>
	  <label className="formLabel">Duration</label>
	  <select
	  onChange={this.handleDurationChange}
	  defaultValue={defaultState.duration}
	  required>
      <option>up to 2 hours</option>
      <option>3-5 hours</option>
	  <option>6-8 hours</option>
	  <option>more than 8 hours</option>
      </select>			
	  <label className="formLabel">Deadline</label>
	  <input 
	  onChange={this.handleDateChange} 
	  defaultValue={defaultState.deadlineDate}
	  type="date" 
	  name="calendar" 
	  min="2018-04-18"
	 className="inpform"
	 required/>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" name="photo" multiple accept="image/*,image/jpeg" onChange={this.handleFileUpload} defaultValue={defaultState.file}/><br/>
      <button className="button">Save</button>
      </form>	
        </div>)
 
		  }
		  else {return "no data" }
		}
		 else {return "no data" }							
	}
	render(){
		return(
			<div>
					{this.renderList(this.props.data.jobList)}
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.jobList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getJobs : () => {
			dispatch(jobList())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(JobEdit);
