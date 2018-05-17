import React from "react";
import "./JobList.css";
import { connect } from "react-redux";
import { jobList } from "../../actions";
import { Link } from "react-router-dom";
import WorkMap from "../Map/map.js";

class JobList extends React.Component {


	onScroll() {
		let el = document.querySelector('.section__line');
		if (window.pageYOffset > 100) {
			el.setAttribute("style", "right:10px");
		} else {
			el.setAttribute("style", "right: 1500px");
		}
	}

	componentDidMount() {
		this.props.jobList();
		window.addEventListener('scroll', this.onScroll);
	}


	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	renderList = jobList => {
		let jobs = [];
		for (let key in jobList) {
			jobs.push(jobList[key]);
		}

		jobs = jobs.filter(el => {
			return el.jobStatus === 'new'
		});

		return (
			jobs.length ?
				jobs.map(item => (
					<li className="job-list__item" key={item.id}>
						<Link to={`/jobInfo/#${item.id}`}>{item.title}</Link>
						<p>{item.info}</p>
					</li>
				)) : <li className="job-list__item"><h3>No jobs for you</h3></li>
		);
	};


	render() {
		return (
			<div id="job-container" className="section--features">
				<div className="section__layout">
					<h1 className="job-container__header"> Jobs</h1>
					<div className="section__line" />
					<ul className="job-list">
						{this.renderList(this.props.data.jobList)}
					</ul>
					<WorkMap />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.jobList
	};
};

const mapDispatchToProps = dispatch => {
	return {
		jobList: () => {
			dispatch(jobList());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
