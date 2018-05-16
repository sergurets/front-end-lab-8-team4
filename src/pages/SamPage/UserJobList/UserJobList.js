import React from 'react';
import "./UserJobList.css";
import { connect } from 'react-redux';
import { getUser, jobList } from '../../../actions';
import FB from '../../../firebase';
import { Link } from "react-router-dom";

class UserJobList extends React.Component {

    componentDidMount() {
        let email = FB.firebase.auth().currentUser.email;
        this.props.getUserByEmail(email);
    }

    renderJobList = (obj, status) => {
        let temp = obj.user;

        try {
            if (status === 'created') {
                temp = temp[Object.keys(temp)[0]].createdJob;
            } else {
                temp = temp[Object.keys(temp)[0]].AcceptedJob;
            }

            let jobs = [];
            for (let key in temp) {
                jobs.push(temp[key]);
            }

            return (
                jobs.map(item => (
                    <li className="job-list__item" key={item.id}>
                        {item.jobStatus === 'deleted' ? <p>{item.title}(deleted)</p> : <Link to={`/jobInfo/#${item.id}`}>{item.title}</Link>}
                    </li>
                ))
            )
        } catch (e) {
            return (
                <li>Job List is empty</li>
            )
        }
    }

    render() {
        return (
            <div id="user-job-container" className="user-job-container" >
                <div className="created-jobs">
                    <h1 className="jobs__heading">Created Jobs</h1>
                    <ul className="user-job-list">
                        {this.renderJobList(this.props.data, 'created')}
                    </ul>
                </div>
                <div className="accepted-jobs">
                    <h1 className="jobs__heading">Accepted Jobs</h1>
                    <ul className="user-job-list">
                        {this.renderJobList(this.props.data, 'accepted')}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.userList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserByEmail: (email) => {
            dispatch(getUser(email));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJobList);
