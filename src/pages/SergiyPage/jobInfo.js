import React from "react";
import { connect } from "react-redux";
import { jobList, addExecutor, deleteJob } from "../../actions";
import "./jobInfo.css";
import * as firebase from "firebase";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Map from "./Map/map.js";

function a(id) {
  return `/editJob#${id}`;
}

function renderButton(email, id, databaseId, job) {
  var user = firebase.auth().currentUser;

  if (user) {
    console.log("autor:", email, "active user:", user.email);
    if (user.email == job.executor) {
      return (
        <div>
          <button
            className="button"
            onClick={() => addExecutor("", databaseId)}
          >
            Сancel execution
          </button>
        </div>
      );
    } else if (user.email === email) {
      return (
        <div>
          <a className="button ButtonClick" href={a(id)}>
            Edit
          </a>
          <button className="button" onClick={() => deleteJob(job, databaseId)}>
            Delete
          </button>
        </div>
      );
    } else if (user.email !== email) {
      return (
        <div>
          <button
            className="button"
            onClick={() => addExecutor(user.email, databaseId)}
          >
            Accept Job
          </button>
        </div>
      );
    }
  } else
    return (
      <div>
        <p>You must login to accept job</p>
      </div>
    );
}

class JobInfo extends React.Component {
  componentWillMount() {
    this.props.getJobs();
  }

  find(object, id) {
    var obj = {};
    for (var key in object) {
      console.log(key, object[key].id, id);
      if (object[key].id === id) {
        obj = Object.assign({}, object[key]);
        /*obj.databaseId=key;*/
      }
    }
    console.log(obj);
    return obj;
  }

  renderList = jobList => {
    if (jobList) {
      var obj = Object.assign({}, jobList);
      console.log(obj);
      var jobId = this.props.location.hash.slice(1) + "";
      var job = this.find(obj, jobId);

      console.log(jobId);
      //	 console.log('job',job);
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
                {renderButton(job.user, job.id, job.databaseId, job)}
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

const mapStateToProps = state => {
  return {
    data: state.jobList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => {
      dispatch(jobList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo);
