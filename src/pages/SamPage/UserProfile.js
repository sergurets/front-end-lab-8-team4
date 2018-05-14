import React from 'react';

import UserInfo from './UserInfo/UserInfo';
import UserJobList from './UserJobList/UserJobList';
import './userProfile.css';

class UserProfile extends React.Component {
    render() {
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
    }
}

export default UserProfile;
