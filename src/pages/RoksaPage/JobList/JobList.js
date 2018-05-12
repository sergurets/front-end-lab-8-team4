import React from "react";
import "./JobList.css";
import { connect } from "react-redux";
import { jobList } from "../../../actions";
import { Link } from "react-router-dom";
import WorkMap from "../Map/map.js";
import $ from "jquery";

class JobList extends React.Component {
  onScroll = () => {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".section__line").css({ right: "10px" });
      } else {
        $(".section__line").css({ right: "1500px" });
      }
    });
  };

  componentWillMount() {
    this.props.getJobs();
  };

  renderList = jobList => {
    let jobs = [];
    for (let key in jobList) {
      jobs.push(jobList[key]);
    }

    return(
			jobs?// check length
			jobs.map(item =>(
					<li className = "job-list__item" key ={item.id}>
						<Link to= {`/jobInfo/#${item.id}`}>{item.title}</Link>
						<p>{item.info}</p>
					</li>
				)): null
		);
  };

  render() {
    this.onScroll();
    console.log(this.props.data.jobList);
    return (
      <div id="job-container" className="section--features">
        <div className="section__layout">
          <h1 className="job-container__header"> Jobs</h1>
          <div className="section__line" />
          <ol className="job-list">
            {this.renderList(this.props.data.jobList)}
          </ol>
          <WorkMap />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.jobList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => {
      dispatch(jobList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
