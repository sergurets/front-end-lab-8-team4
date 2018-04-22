import React from 'react';
// import JobsList from './user/JobsList';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { getJobs } from '../../Actions/JobActions';
import _ from 'lodash';

class User extends React.Component {

    componentWillMount() {
        this.props.getJobs();
    }

    renderJobs() {
        return _.map(this.props.jobs, (job, key) => {
            return (
                <div key={key}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.jobs);
        return (
            <div>
                {this.renderJobs()}
            </div>
        )
    }
}

let form = reduxForm({
    form: 'NewPost'
})(User);

form = connect(state => ({ jobs: state.jobs }), { getJobs })(form);

export default form;