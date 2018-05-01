import React from 'react';

import UserInfo from './UserInfo/UserInfo';
import UserJobList from './UserJobList/UserJobList';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <UserInfo />
                <UserJobList />
            </div>
        );
    }
}

export default UserProfile;