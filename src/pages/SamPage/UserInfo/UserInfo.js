import React from 'react';

class Info extends React.Component {


    render() {
        return (
            <div className="info">
                <h1>Your Info</h1>
                <div className="user-info">
                    <ul className="user-info__list">
                        <li class="user-info__item">
                            <div>Name</div><div>VALUE</div>
                        </li>
                        <li class="user-info__item">
                            <div>Surname</div><div>VALUE</div>
                        </li>
                        <li class="user-info__item">
                            <div>Phone number</div><div>VALUE</div>
                        </li>
                        <li class="user-info__item">
                            <div>E-Mail</div><div>VALUE</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Info;