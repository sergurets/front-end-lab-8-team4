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

    renderList = (obj) => {
        let jobs = [];
        for (let key in jobList) {
            jobs.push(jobList[key]);
        }

        return (
            jobs.map(item => (
                <li className="job-list__item" key={item.id}>
                    <Link to={`/jobInfo/#${item.id}`}>{item.title}</Link>
                    <p>{item.info}</p>
                </li>
            ))
        );
    }

    render() {
        return (
            <div id="job-container">
                <h1 className="job-container__heading">Jobs</h1>
                <ol className="job-list">
                    {this.renderList(this.props.data)}
                </ol>
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
        getUserByEmail: () => {
            dispatch(jobList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJobList);