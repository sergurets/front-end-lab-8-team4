import React from 'react';
//import './JobList.css';
import { connect } from 'react-redux';
import { jobList } from '../../actions';
import { Link } from "react-router-dom";

/*function getObj(obj)
{
	(for var key in obj)
	{
		if (key) == '-LAmLRviwch1VqN45FMB' return obj
	}
	
}

*/



class JobList extends React.Component{
	componentWillMount(){
		this.props.getJobs()
	}
	
	renderList = (jobList) =>{
		
		
		if (jobList)
		{
	     function find(object, id){
			 var obj={};
			 for (var key in object){
				 console.log(key, object[key].id, id);
				 if (object[key].id===id){
					 obj= Object.assign({}, object[key] );
				 }
	 
			 }
			 console.log(obj)
				 return obj;
		 }
		 
		 
	     var obj = Object.assign({}, jobList);
		 console.log(obj);
		 var jobId=this.props.location.hash.slice(1)+'';
		 var job=find(obj, jobId);
		 //var id="1524484394807";
		 
		 console.log(jobId);
		 
		 
		 
		 
		 console.log(job)
	
		return  (<div className="App">
        <div className="Description">
        <h1 className="Name">
          {job.title}
        </h1>
        <p>{job.info}</p>
        <div className="JobFeatures">
        <div className="JobList">
        <ul>
          <li>Duration: {job.duration}</li>
          <li>Deadline: {job.deadlineDate}</li>
          <li>Location: {job.city}</li>
          <li>Salary: {job.salary}</li>
          </ul>
          </div>
          <div className="Contacts">
          <h3>Serg</h3>
          <p>+380670000000</p>
          </div>
        </div>
        </div>
 
      </div>)}
		 else {return null }
		
					
	}
	render(){
		//console.log(this.props.data.jobList);
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

export default connect(mapStateToProps,mapDispatchToProps)(JobList);
