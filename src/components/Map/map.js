import React from "react";
import "./map.css";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import { connect } from "react-redux";
import { jobList } from "../../actions";
import { Link } from "react-router-dom";

class WorkMap extends React.Component {
  componentWillMount() {
    this.props.getJobs();
  }
  renderWorksOnMap = jobList => {
    let jobs = [];
    for (var key in jobList) {
      jobs.push(jobList[key]);
    }

    jobs = jobs.filter(el => {
      return el.jobStatus === 'new'
    });

    return jobs
      ? jobs.map(item => (
        <Marker
          key={Number(`${item.id}`)}
          position={{
            lat: Number(`${item.lat}`),
            lng: Number(`${item.lng}`)
          }}
          onClick={e => {
            window.location.href = `/jobInfo/#${item.id}`; // redirect to
          }}
        />
      ))
      : null;
  };
  render() {
    const WorksMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 49.861684, lng: 24.063663 }}
        defaultZoom={12}
      >
        {this.renderWorksOnMap(this.props.data.jobList)}
      </GoogleMap>
    ));
    return (
      <div className="section--map">
        <WorksMap
          containerElement={<div id="work-map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkMap);
