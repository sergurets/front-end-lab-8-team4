import React from 'react';
import './info.css';

class Info extends React.Component {
    constructor() {
        super();
        this.user = {
            name: 'Ivan',
            surname: 'Ivanov',
            phoneNumber: 'numbers',
            age: 81,
            worksRating: 0,
            chillsRating: 5,
            chills: [],
            works: []
        }
    }

    render() {
        return (
            <div className="info">
                <div className="user-info">
                    <h3>Your Info</h3>
                    <div>
                        <p className="name">{this.user.name}</p>
                        <p className="surname">{this.user.surname}</p>
                        <p className="phone-number">this.user.phoneNumber</p>
                        <p className="age">this.user.age</p>
                        <button id="edit-button" onClick={() => console.log('MAGIC')}>Edit</button>
                    </div>
                </div>
                <div className="done">
                    <h3>Your works</h3>
                    <p className="rating-done">Rating {this.user.rating}</p>
                    <ul>
                        <li>here</li>
                        <li>goes</li>
                        <li>done</li>
                        <li>works</li>
                        <li>components</li>
                    </ul>
                </div>
                <div className="posted">
                    <h3>Your chills</h3>
                    <p className="rating-posted">Rating {this.user.rating}</p>
                    <ul>
                        <li>here</li>
                        <li>goes</li>
                        <li>posted</li>
                        <li>works</li>
                        <li>components</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Info;