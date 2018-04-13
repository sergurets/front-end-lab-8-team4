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
                <h1>Your Info</h1>
                <div className="user-info">
                    <div id="description">
                        <img alt="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAA1GehqeTqfTpLSXqj1kNdfCei5Y287DWSkkYwKHJlSYfuSj1DL3P-1g" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis risus nec purus dignissim, sit amet finibus arcu pharetra. Nulla consequat viverra sapien, sit amet euismod erat hendrerit sit amet.</p>
                    </div>
                    <ul>
                        <li className="name">Name: {this.user.name}</li>
                        <li className="surname">Surname: {this.user.surname}</li>
                        <li className="phone-number">Phone number: {this.user.phoneNumber}</li>
                        <li className="age">Age: {this.user.age}</li>
                        <li className="avarage-rating">Avarage rating: {this.user.worksRating + this.user.chillsRating / 2}</li>
                    </ul>
                    <div id="edit-button" onClick={() => console.log('MAGIC')}>Edit</div>
                </div>
                <div className="tasks">
                    <div className="done">
                        <h3>Your works</h3>
                        <p className="rating-done">Rating: {this.user.worksRating}</p>
                        <ul>
                            <li>here<span>&#10060;</span></li>
                            <li>goes<span>&#10060;</span></li>
                            <li>done<span>&#10060;</span></li>
                            <li>tasks<span>&#10060;</span></li>
                            <li>components<span>&#10060;</span></li>
                        </ul>
                    </div>
                    <div className="posted">
                        <h3>Your chills</h3>
                        <p className="rating-posted">Rating: {this.user.chillsRating}</p>
                        <ul>
                            <li>here<span>&#10004;</span></li>
                            <li>goes<span>&#10004;</span></li>
                            <li>posted<span>&#10004;</span></li>
                            <li>tasks<span>&#10004;</span></li>
                            <li>components<span>&#10004;</span></li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

export default Info;