import React from 'react';
import { connect } from 'react-redux';
import { jobList } from '../../../actions';
import { Link } from "react-router-dom";

class UserJobList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email
        }
    }

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
        console.log(this.state.email);
        return (
            <div id="job-container">
                <h1> Jobs</h1>
                <ol className="job-list">
                    {this.renderList(this.props.data)}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.jobList.jobs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getJobs: () => {
            dispatch(jobList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJobList);