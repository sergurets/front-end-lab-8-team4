import React from 'react';
// import JobsList from './user/JobsList';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { getJobs, saveJob } from '../../Actions/JobActions';
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

    onSubmit(values) {
        this.props.saveJob(values).then(this.props.dispatch(reset('NewPost')));
    }

    renderField(field) {
        return (
            <input type="text" placeholder={`Enter ${field.label}...`} {...field.input} />
        );
    }

    render() {
        console.log(this.props.jobs);
        const { handleSubmit } = this.props;
        return (
            <div>
                <div>
                    {this.renderJobs()}
                    <div>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                            <Field
                                name="title"
                                component={this.renderField}
                                label="Title"
                            />
                            <Field
                                name="body"
                                component={this.renderField}
                                label="Body"
                            />
                            <button type="submit">Post A Job</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

let form = reduxForm({
    form: 'NewPost'
})(User);

form = connect(state => ({ jobs: state.jobs }), { getJobs, saveJob })(form);

export default form;