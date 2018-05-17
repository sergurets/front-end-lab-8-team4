import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {


	onScroll = () => {
				if (window.pageYOffset > 50) {
					document.querySelector('.header').classList.add("header--scrolled");
				} else {
					document.querySelector('.header').classList.remove("header--scrolled");
				}

	};
	 scrollJob = () =>{
	 	if(window.pageYOffset < 300){
			window.scrollBy(0, 500);
		}
	 };
	scrollAboutUs = () =>{
		if(window.pageYOffset < 100){
			window.scrollBy(0, 50);
		}
	};
	 componentDidMount(){
		 window.addEventListener('scroll', this.onScroll);
	 }

  render() {
    return (
      <header className="header section--header ">
        <nav className="header__nav">

          <Link to="/#job-container" className="header__nav-links" onСlick = {this.scrollJob()}>

            Find a job
          </Link>
          <Link to="/Addjob" className="header__nav-links">
            Post a job
          </Link>

          <Link to="/#about-us" className="header__nav-links" onСlick = {this.scrollAboutUs()}>

            About us
          </Link>
        </nav>
        <div className="header__div">
          <Link to="/Login" className="header__nav-links header__div-links" >
						<span></span>
            Sign in
          </Link>
          <Link to="/UserProfile" className="header__div__img" />
        </div>
      </header>
    );
  }

}

export default Header;
