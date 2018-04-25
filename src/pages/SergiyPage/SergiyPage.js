import React from 'react';
import { connect } from 'react-redux';
import { jobList } from '../../actions';
import './SergiyPage.css';


class JobInfo extends React.Component{
	componentWillMount(){
		this.props.getJobs();
	}
	
	find(object, id){
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
	renderList = (jobList) =>{
			
		if (jobList)
		{ 
	     var obj = Object.assign({}, jobList);
		 console.log(obj);
		 var jobId=this.props.location.hash.slice(1)+'';
		 var job=this.find(obj, jobId);	
         		 
		 console.log(jobId);
		 console.log('job',job);
	      if (job.id) {console.log('length');  
		  	return  (
		<div className="App">
			<div className="Description">
				<h1 className="titleInfo">
				  {job.title}
				</h1>
				<p className="information">{job.info}</p>
				<div className="JobFeatures">
					<div className="JobList">
					<p className="information">Additional Information</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(JobInfo);
