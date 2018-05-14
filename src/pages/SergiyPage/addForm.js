import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import "./addjob.css";
import { saveJob, getUser } from "../../actions";
import { firebaseJobList } from "../../firebase";
import * as firebase from "firebase";
import Autocomplete from "react-google-autocomplete";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";

function TodayDate() {
    let month, date;
    let defaultDate = new Date;
    if (defaultDate.getMonth() <= 8) {
        month = '0' + (defaultDate.getMonth() + 1)
    }
    else {
        month = (defaultDate.getMonth() + 1)
    }
    if (defaultDate.getDate() <= 9) {
        date = '0' + defaultDate.getDate()
    }
    else {
        date = defaultDate.getDate()
    }

    return `${defaultDate.getFullYear()}-${month}-${date}`;
}

let defDate = TodayDate();

class Addjob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            info: "",
            salary: "",
            duration: "up to 2 hours",
            deadlineDate: defDate,
            jobStatus: "new"
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.infohandleInfoChange = this.infohandleInfoChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    addjobUser(user, job) {
        let key = firebase.database().ref(`usersT/${user}/createdJob`).push(job).key
        this.state.userJobKey = key
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.id = Date.now().toString();
        let userId = Object.keys(this.props.data.user)[0];
        this.state.userID = userId;
        this.state.userName = this.props.data.user[userId].name;
        let JobInfo = {
            id: this.state.id,
            title: this.state.title,
            executor: null,
            executorID: null,
            jobStatus: 'new',
        };
        this.addjobUser(userId, JobInfo);
        this.props.onAddJob(this.state);
        window.location.href = `/jobInfo/#${this.state.id}`;
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


    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    infohandleInfoChange(event) {
        this.setState({ info: event.target.value });
    }

    componentWillMount() {
        let user = firebase.auth().currentUser;
        let email = "";
        if (user) {
            email = user.email;
        }
        this.props.getUser(email);
    }

    render() {
        let user = firebase.auth().currentUser;
        console.log("active_user", user);
        if (user) {
            console.log("active_user", user);
            this.state.user = user.email;
            return (
                <section id="addJobForm" className="section-add-job">
                    <div className="section--features">
                        <form
                            onSubmit={this.handleSubmit}
                            method="post"
                            className="section__layout"
                        >
                            <h1 className="add-job__header"> Fill in : </h1>
                            <input
                                type="text"
                                placeholder="title"
                                id="title"
                                className="add-job__input"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                required
                            />
                            <br />
                            <textarea
                                placeholder="Enter info"
                                id="info"
                                className="add-job__input"
                                value={this.state.info}
                                onChange={this.infohandleInfoChange}
                                required
                            />
                            <br />
                            <Autocomplete
                                className="add-job__input"
                                style={{ width: "90%" }}
                                onPlaceSelected={place => {
                                    this.state.lng =
                                        (place.geometry.viewport.b.f +
                                            place.geometry.viewport.b.b) /
                                        2;
                                    this.state.lat =
                                        (place.geometry.viewport.f.f +
                                            place.geometry.viewport.f.b) /
                                        2;
                                    this.state.city = place.formatted_address;
                                    console.log(this.state, place.geometry.viewport);
                                }}
                                types={["geocode"]}
                                componentRestrictions={{ country: "ua" }}
                            />
                            <br />
                            <input
                                type="number"
                                min="0"
                                placeholder="salary"
                                id="salary"
                                className="add-job__input"
                                value={this.state.salary}
                                onChange={this.handleSalaryChange}
                                required
                            />
                            <br />
                            <div className="job-info__selections">
                                <div className="job-info_duration">
                                    <label className="job-info__label">Тривалість</label>
                                    <select
                                        onChange={this.handleDurationChange}
                                        value={this.state.duration}
                                        required
                                    >
                                        <option>up to 2 hours</option>
                                        <option>3-5 hours</option>
                                        <option>6-8 hours</option>
                                        <option>more than 8 hours</option>
                                    </select>
                                </div>
                                <div className="job-info_deadline">
                                    <label className="job-info__label">Крайній термін</label>
                                    <input
                                        min={defDate}
                                        onChange={this.handleDateChange}
                                        value={this.state.deadlineDate}
                                        type="date"
                                        name="calendar"
                                        className="inpform"
                                        required
                                    />
                                </div>
                                <div className="job-info_img">
                                    <label htmlFor="file" className="job-info__label">
                                        Upload Image
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="photo"
                                        multiple
                                        accept="image/*,image/jpeg"
                                        onChange={this.handleFileUpload}
                                        value={this.state.file}
                                    />
                                    <br />
                                </div>
                            </div>
                            <button className="button send-button">Send</button>
                        </form>
                    </div>
                </section>
            );
        } else
            return (
                <div>
                    <Redirect to={"/login"} />
                </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        saveJob: state.saveJob,
        data: state.userList
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddJob: job => {
            dispatch(saveJob(job));
        },
        getUser: mail => {
            dispatch(getUser(mail));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addjob);