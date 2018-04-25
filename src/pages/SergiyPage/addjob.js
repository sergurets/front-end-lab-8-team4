import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './addjob.css';
import { saveJob } from '../../actions';
import { firebaseJobList } from '../../firebase';

function a(id){
	var link=document.createElement('p');
	link.innerHTML = `<a href='SergiyPage#${id}'>link to job</a>`;
	document.getElementById('addJobForm').appendChild(link);

};

class Addjob extends Component {
	constructor(props){
		super(props);
		this.state = {
		  title: "",
		  info: "",
		  city: "",
		  salary: "",
		  duration: "up to 2 hours" ,
		  deadlineDate: ""
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.infohandleInfoChange = this.infohandleInfoChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);		
		
	  }
	
	handleSubmit(event){
		event.preventDefault();
		this.state.id= Date.now().toString();
		a(this.state.id);
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
	
	  handleCityChange(event){
		this.setState({city: event.target.value});
	  }

	
  render() {
	
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

      <input type="text"
        placeholder="Enter city"
        id="city"
        className="form input"
        value={this.state.city}
        onChange={this.handleCityChange}
        required
      /><br/>
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
	  value="2028-04-18"
	  onChange={this.handleDateChange} 
	  value={this.state.date}
	  type="date" 
	  name="calendar" 
	  min="2018-04-18"
	 className="inpform"
	 required/>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" name="photo" multiple accept="image/*,image/jpeg" onChange={this.handleFileUpload} value={this.state.file}/><br/>
      <button className="button">Send</button>
      </form>
	  
      </div>
    );
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

