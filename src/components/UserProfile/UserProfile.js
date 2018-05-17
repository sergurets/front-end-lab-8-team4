import React from 'react';

import UserInfo from '../UserInfo/UserInfo';
import UserJobList from '../UserJobList/UserJobList';
import { Redirect } from "react-router-dom";
import './userProfile.css';
import { connect } from "react-redux";

class UserProfile extends React.Component {
    render() {
        let user = this.props.CurUser;
        if (user) {
            return (
                <section className="section-user-info">
                    <div className="section--features">
                        <div className="section__layout">
                            <UserInfo />
                            <UserJobList />
                        </div>
                    </div>
                </section>
            );
        } else {
            return (
                <div>
                    <Redirect to="/login" />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        CurUser: state.user.CurUser
    };
};

export default connect(mapStateToProps, null)(UserProfile);
