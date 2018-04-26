import React from 'react';
import './JobList.css';
import { connect } from 'react-redux';
import { jobList } from '../../../actions';
import { Link } from "react-router-dom";

class JobList extends React.Component {
	componentWillMount() {
		this.props.getJobs()
	}
	renderList = (jobList) => {
		let jobs = [];
		for (var key in jobList) {
			jobs.push(jobList[key]);
		}
		return (
			jobs ?
				jobs.map(item => (
					<li className="job-list__item" key={item.id}>
						<Link to={`/jobInfo/#${item.id}`}>{item.title}</Link>
						<p>{item.info}</p>
					</li>
				)) : null
		);
	}

	render() {
		console.log(this.props.data.jobList);
		return (
			<div id="job-container">
				<h1> Jobs</h1>
				<ol className="job-list">
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
		getJobs: () => {
			dispatch(jobList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);