import React from 'react';
import JobList from 'react'
import '../user.css';


class UserInfo extends React.Component {
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
            <div className="user-info">
                <img className="user-info__photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAA1GehqeTqfTpLSXqj1kNdfCei5Y287DWSkkYwKHJlSYfuSj1DL3P-1g" alt="photo" />
                <div className="user-info__description">
                    <ul>
                        <li>Name: {}</li>
                        <li>Surname: {}</li>
                        <li>Number: {}</li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default UserInfo;