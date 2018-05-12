
import React from 'react';
import { connect } from 'react-redux';
import { jobList, addExecutor, deleteJob, getUser, deletejobExecutor, addjobExecutor} from '../../actions';
import './jobInfo.css';
import * as firebase from 'firebase';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Map from './Map/map.js';


class JobInfo extends React.Component{
	componentWillMount(){
		let user = firebase.auth().currentUser;
		let email = '';
		if (user) {
			email = user.email;
		}
		this.props.getUser(email);
		this.props.getJobs();
		
	}
    
	find(object, id){
		let obj={};
		for (let key in object){
			if (object[key].id===id){
					obj= Object.assign({}, object[key] );
				 }
			 }
		return obj;
	}
	
	renderButton(email, id, databaseId, job){
		let JobInfo = {
			id: job.id,
			title: job.title,
			jobKey:job.databaseId,
			user: job.userID,
			userJobKey: job.userJobKey,
			jobStatus: 'inProcess'
		}
	
		let user = firebase.auth().currentUser;
		if (user)
		{	
			let userId =  Object.assign({}, this.props.user.users );
			let id = Object.keys(userId)[0];
			
			if (user.email==job.executor) {
				return  (
				<div>
					<button className="button" onClick={() => {addExecutor('', '', 'new', job.databaseId); deletejobExecutor (id,job) }}>Сancel execution</button>
				</div> 
					); 
				}
		else if (user.email===email) {
        if(job.jobStatus=='inProcess'){
			return (<p>In process. Executor {job.executor}</p>)	}
		else {
			  return (
			  <div><a className=' button ButtonLink' href={this.addEdit(job.id)}>Edit</a>
			  <button className="button" onClick={() => deleteJob(job, databaseId)}>Delete</button></div> ); 
		}			
        		

			}
			else if (user.email!==email){
				return  (<div><button className="button" onClick={() => {addExecutor(user.email, id, 'inProcess',job.databaseId); addjobExecutor(id,JobInfo)}}>Accept Job</button></div> ); 
			}
		}
		  else return  (<div><p>You must login to accept job</p></div> ); 
	
	}

	
    addEdit(id){
		return `/editJob#${id}`;
	};

  renderList = jobList => {
   if (jobList)
		{
	     let obj = Object.assign({}, jobList);
		 let jobId=this.props.location.hash.slice(1)+'';
		 let job=this.find(obj, jobId);
      if (job.id) {
        console.log("length");
        return (
          <section className=" section-job-info">
            <div className="section--features">
              <div className="section__layout">
                <div className="job-info__description">
                  <h1 className="job-info__header">{job.title}</h1>
                  <div className="section__line" />
                  <div className="job-info__text">
                    <p className="job-info__information">{job.info}</p>
                    <div className="job-info__details">
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
                        <h3>{job.userName}</h3>
                        <p>+380670000000</p>
                      </div>
                    </div>
                  </div>
                </div>
                {this.renderButton(job.user, job.id, job.databaseId, job)}
                <Map className="job-info-map" name={job} />
              </div>
            </div>
          </section>
        );
      } else {
        return "no data";
      }
    } else {
      return "no data";
    }
  };
  render() {
    return <div>{this.renderList(this.props.data.jobList)}</div>;
  }
}

const mapStateToProps = (state) => {
	return {
		data: state.jobList,
		user: state.userList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getJobs : () => {
			dispatch(jobList())
		},
		getUser: (mail) =>{
			dispatch(getUser(mail))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo);