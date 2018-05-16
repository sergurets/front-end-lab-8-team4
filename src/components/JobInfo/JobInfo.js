import React from 'react';
import { connect } from 'react-redux';
import { jobList, addExecutor, deleteJob, getUser, deletejobExecutor, addjobExecutor, addRatingToEmployer, addRatingToEmployee } from '../../actions';
import './JobInfo.css';
import * as firebase from 'firebase';
import Map from '../MapJobInfo/map.js';

class JobInfo extends React.Component {
	componentWillMount() {
		let user = firebase.auth().currentUser;
		let email = '';
		if (user) {
			email = user.email;
		}
		this.props.getUser(email);
		this.props.getJobs();

	}

	find(object, id) {
		let obj = {};
		for (let key in object) {
			if (object[key].id === id) {
				obj = Object.assign({}, object[key]);
			}
		}
		return obj;
	}

	renderButton(email, id, databaseId, job) {
		let JobInfo = {
			id: job.id,
			title: job.title,
			jobKey: job.databaseId,
			user: job.userID,
			userJobKey: job.userJobKey,
			jobStatus: 'inProcess'
		};
		let user = firebase.auth().currentUser;
		if (this.props.user.user) {
			let id = Object.keys(this.props.user.user)[0];
			if (user.email === job.executor) {
				function finishButton() {
					if (job.jobStatus !== 'done') {
						if (job.jobStatus === 'inProcess') {
							function renderComlete() {
								let element = document.getElementById('finish');
								element.innerHTML =
									`<div id="finishform">
									    <label>Impression of work</label>
										<select id="finish_form_Impression">
											<option>excellent</option>
											<option>OK</option>
											<option>badly</option>
											<option>horribly</option>
										</select>
										<button class="button">Сomplete</button>
								</div>`;
								let elem = document.querySelector('#finishform .button ');
								elem.onclick = function () {
									let formSel = document.getElementById('finish_form_Impression').value.toString();
									addRatingToEmployer(formSel, job);
								};
							}
							return (
								<div>
									<button className="button" onClick={() => { renderComlete() }}>Сomplete</button>
									<div id="finish"></div>
								</div>
							)
						}

					}

				}
				if (job.jobStatus !== 'done') {
					return (
						<div>
							<button className="button" onClick={() => { addExecutor('', '', 'new', job.databaseId); deletejobExecutor(id, job) }}>Сancel execution</button>
							{finishButton()}
						</div>
					);
				}
			}
			else if (user.email === email) {
				if (job.jobStatus === 'inProcess') {
					return (<p>In process. Executor {job.executor}</p>)
				}
				if (job.jobStatus === 'done') {
					function addRating() {

						let elem = document.getElementById('form_Employer').value.toString();
						addRatingToEmployee(elem, job);
						deleteJob(job, job.databaseId);

					}
					return (<div id="finishformEmployer"><label>The work is completed, evaluate the level of execution</label>
						<select id="form_Employer">
							<option>excellent</option>
							<option>OK</option>
							<option>badly</option>
							<option>horribly</option>
						</select>
						<button className="button" onClick={() => { addRating() }} >Сomplete</button>
					</div>)
				}
				else {
					return (
						<div><a className=' button ButtonLink' href={this.addEdit(job.id)}>Edit</a>
							<button className="button" onClick={() => deleteJob(job, databaseId)}>Delete</button></div>);
				}


			}
			else if (user.email !== email) {
				return (<div><button className="button" onClick={() => { addExecutor(user.email, id, 'inProcess', job.databaseId); addjobExecutor(id, JobInfo) }}>Accept Job</button></div>);
			}
		}
		else return (<div><p>You must login to accept job</p></div>);

	}

	addEdit(id) {
		return `/editJob#${id}`;
	};

	renderList = jobList => {
		if (jobList) {
			let obj = Object.assign({}, jobList);
			let jobId = this.props.location.hash.slice(1) + '';
			let job = this.find(obj, jobId);
			if (job.id) {
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
												<h3>{job.user}</h3>
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
};
const mapDispatchToProps = (dispatch) => {
	return {
		getJobs: () => {
			dispatch(jobList())
		},
		getUser: (mail) => {
			dispatch(getUser(mail))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo);
