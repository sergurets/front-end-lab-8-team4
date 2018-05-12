import React from 'react';
import './map.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { connect } from 'react-redux';
import { jobList } from '../../../actions';
import { Link } from "react-router-dom";

class WorkMap extends React.Component{


	componentWillMount(){
		console.log(this.props.name)
		this.props.getJobs()
	}
	renderWorksOnMap = () =>{

		return(

					<Marker position={{ lat: Number(`${this.props.name.lat}`), lng: Number(`${this.props.name.lng}`) }}/>

		);
	}
	handleMarkerClick = (props, marker, e) => {
		console.log(e);
  	}

   render(){
this.props.name
   const WorksMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: this.props.name.lat, lng: this.props.name.lng } }
        defaultZoom = { 12 }
      >
      {this.renderWorksOnMap(this.props.data.jobList)}
      </GoogleMap>
   ));
   return(
      <div className = "job-info-map" >

        <WorksMap
          containerElement={ <div id = "one-work-map"/> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

const mapStateToProps = (state) => {
	return {
		data: state.jobList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getJobs : () => {
			dispatch(jobList())
		}
	}
}
 export default connect(mapStateToProps,mapDispatchToProps)(WorkMap)
