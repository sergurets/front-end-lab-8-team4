import React from 'react';
import { connect } from 'react-redux';
import { getUser, jobList } from '../../../actions';
import FB from '../../../firebase';
import { Link } from "react-router-dom";

class UserJobList extends React.Component {

    componentDidMount() {
        let email = FB.firebase.auth().currentUser.email;
        this.props.getUserByEmail(email);
    }

    renderCreatedJobList = (obj) => {
        let temp = obj.user;

        try {
            temp = temp[Object.keys(temp)[0]].createdJob;
            for (let i in temp) {
                return (
                    <li className="job-list__item" key={i.id}>
                        <Link to={`/jobInfo/#${temp[i].id}`}>{temp[i].title}</Link>
                        <p>{temp[i].info}</p>
                    </li>
                );
            }
        } catch (e) {
            return;
        }
    }

    renderAccptedJobList = (obj) => {
        let temp = obj.user;

        try {
            temp = temp[Object.keys(temp)[0]].AcceptedJob;
            for (let i in temp) {
                return (
                    <li className="job-list__item" key={i.id}>
                        <Link to={`/jobInfo/#${temp[i].id}`}>{temp[i].title}</Link>
                        <p>{temp[i].info}</p>
                    </li>
                );
            }
        } catch (e) {
            return;
        }
    }

    render() {
        return (
            <div id="job-container">
                <div className="created-jobs">
                    <h1 className="jobs__heading">Created Jobs</h1>
                    <ul className="job-list">
                        {this.renderCreatedJobList(this.props.data)}
                    </ul>
                </div>
                <div className="accepted-jobs">
                    <h1 className="jobs__heading">Accepted Jobs</h1>
                    <ul className="job-list">
                        {this.renderAccptedJobList(this.props.data)}
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