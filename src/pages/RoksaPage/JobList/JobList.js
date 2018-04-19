import React from 'react';
import './JobList.css';
import { connect } from 'react-redux';
import { jobList } from '../../../actions';

class JobList extends React.Component{
	componentWillMount(){
		this.props.getJobs()
	}
	renderList = (jobList) =>{
		return(
			jobList?
			jobList.map(item =>(
					<li className = "job-list__item" key ={item.id}>
						<p>{item.job_title}</p>
						<p>{item.description}</p>
					</li>
				)): null
		);
	}
	render(){
		console.log(this.props.data.jobList);
		return(
			<div id = "job-container">
				<h1> Jobs</h1>
				<ol className = "job-list">
					{this.renderList(this.props.data.jobList)}
				</ol>
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
