import React from "react";
import { connect } from "react-redux";
import { jobList, editJob } from "../../actions";
import "./addjob.css";
import Autocomplete from "react-google-autocomplete";

function addLink(id) {
  if (id != undefined) {
    var link = document.createElement("p");
    link.innerHTML = `<a  href='jobInfo#${id}'>link to job</a>`;
    document.getElementById("editJob").appendChild(link);
  }
}
var ID;
var Coordinates = {};
class JobEdit extends React.Component {
  defaultObj = {};
  componentWillMount() {
    this.props.getJobs();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.infohandleInfoChange = this.infohandleInfoChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  find(object, id) {
    var obj = {};
    for (var key in object) {
      //	console.log(key, object[key].id, id);
      if (object[key].id === id) {
        obj = Object.assign({}, object[key]);
        /*obj.databaseId=key;*/
      }
    }
    this.defaultObj = Object.assign({}, obj);
    console.log(this.defaultObj);
    //	console.log(obj)
    ID = obj.databaseId;
    return obj;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state, ID);
    var res = Object.assign(this.defaultObj, this.state, Coordinates);

    editJob(res, ID);
    addLink(this.props.location.hash.slice(1));
  }

  handleDateChange(event) {
    this.setState({ deadlineDate: event.target.value });
  }

  handleSalaryChange(event) {
    this.setState({ salary: event.target.value });
  }

  handleDurationChange(event) {
    this.setState({ duration: event.target.value });
    console.log(event.target.value);
  }

  handleSalaryChange(event) {
    this.setState({ salary: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  infohandleInfoChange(event) {
    this.setState({ info: event.target.value });
  }

  renderList = jobList => {
    if (jobList) {
      var obj = Object.assign({}, jobList);
      // console.log(obj);
      var jobId = this.props.location.hash.slice(1) + "";
      var job = this.find(obj, jobId);

      var defaultState = {
        title: job.title,
        info: job.info,
        city: job.city,
        salary: job.salary,
        duration: job.duration,
        deadlineDate: job.deadlineDate
      };

      //         console.log(this.state)

      //		 console.log(jobId);
      //		 console.log('job',job);
      if (job.id) {
        return (
          <div id="editJob">
            <form
              onSubmit={this.handleSubmit}
              method="post"
              className="formjob"
            >
              <label className="formLabel">title</label>
              <input
                type="text"
                placeholder="title"
                id="title"
                className="regform_name"
                defaultValue={defaultState.title}
                onChange={this.handleTitleChange}
                required
              />
              <br />
              <label className="formLabel">Enter info</label>
              <textarea
                placeholder="Enter info"
                id="info"
                className="form input"
                defaultValue={defaultState.info}
                onChange={this.infohandleInfoChange}
                required
              />
              <br />
              <label className="formLabel">Location</label>
              <Autocomplete
                style={{ width: "90%" }}
                onPlaceSelected={place => {
                  Coordinates.lng =
                    (place.geometry.viewport.b.f +
                      place.geometry.viewport.b.b) /
                    2;
                  Coordinates.lat =
                    (place.geometry.viewport.f.f +
                      place.geometry.viewport.f.b) /
                    2;
                  Coordinates.city = place.formatted_address;
                  console.log(Coordinates, place);
                  /*this.state.lng = place.geometry.viewport.b.b;
				  this.state.lat = place.geometry.viewport.f.b;*/
                  //this.state.city = place.address_components[0].long_name;
                  //console.log(place.address_components[0].long_name)
                }}
                types={["(regions)"]}
                componentRestrictions={{ country: "ua" }}
              />
              <br />
              <label className="formLabel">Salary</label>
              <input
                type="number"
                min="0"
                placeholder="salary"
                id="salary"
                className="form input"
                defaultValue={defaultState.salary}
                onChange={this.handleSalaryChange}
                required
              />
              <br />
              <label className="formLabel">Duration</label>
              <select
                onChange={this.handleDurationChange}
                defaultValue={defaultState.duration}
                required
              >
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
                required
              />
              <label htmlFor="file">Upload Image</label>
              <input
                type="file"
                id="file"
                name="photo"
                multiple
                accept="image/*,image/jpeg"
                onChange={this.handleFileUpload}
                defaultValue={defaultState.file}
              />
              <br />
              <button className="button">Save</button>
            </form>
          </div>
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
console.log(this.state);
export default connect(mapStateToProps, mapDispatchToProps)(JobEdit);
