import React from 'react';
import JobsList from './user/JobsList';
import { connect } from 'react-redux';
import { jobsList } from '../../actions';
import { bindActionCreators } from 'redux';


class UserDone extends React.Component {

    componentWillMount() {
        this.props.jobsList();
    }

    render() {
        return (
            <div className="user-done">
                <JobsList {...this.props} />
            </div >
        );
    }
}

const mapStateProps = (state) => {
    return {
        data: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        jobsList
    }, dispatch)
}

export default connect(mapStateProps, mapDispatchToProps)(UserDone);