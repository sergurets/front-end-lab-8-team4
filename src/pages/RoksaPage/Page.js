import React from "react";
import ReactDOM from "react-dom";
import "./Page.css";

import AboutUs from "./AboutUs/AboutUs.js";
import JobList from "./JobList/JobList.js";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <AboutUs />
        <JobList />
      </div>
    );
  }
}

export default HomePage;
