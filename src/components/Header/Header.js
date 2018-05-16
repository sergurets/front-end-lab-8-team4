import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import $ from "jquery";

class Header extends React.Component {
  onScroll = () => {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".header").addClass("header--scrolled");
      } else {
        $(".header").removeClass("header--scrolled");
      }
    });
  };
  render() {
    this.onScroll();
    return (
      <header className="header section--header ">
        <nav className="header__nav">
          <a href="/#job-container" className="header__nav-links">
            Find a job
          </a>
          <Link to="/Addjob" className="header__nav-links">
            Post a job
          </Link>
          <a href="/#about-us" className="header__nav-links">
            About us
          </a>
        </nav>
        <div className="header__div">
          <Link to="/Login" className="header__nav-links">
            Sign in
          </Link>
          <Link to="/UserProfile" className="header__div__img" />
        </div>
      </header>
    );
  }

}

export default Header;
