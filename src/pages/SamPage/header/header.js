import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="nav">
                    <li className="nav-item">home</li>
                    <li className="nav-item">work</li>
                    <li className="nav-item">chill</li>
                    <li className="nav-item" id="user">account</li>
                </ul>
            </header>
        );
    }
}

export default Header;