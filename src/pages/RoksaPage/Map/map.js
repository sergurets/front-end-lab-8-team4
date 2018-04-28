import React from 'react';
import './map.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { connect } from 'react-redux';
import { jobList } from '../../../actions';
import { Link } from "react-router-dom";

class WorkMap extends React.Component{

	componentWillMount(){
		this.props.getJobs()
	}
	renderWorksOnMap = (jobList) =>{
		let jobs = [];
		for(var key in jobList){
			jobs.push(jobList[key]);
		}
		return(
			jobs?
			jobs.map(item =>(
					<Marker position={{ lat: Number(`${item.lat}`), lng: Number(`${item.lng}`) }}
						onClick= {this.handleMarkerClick}/>
				)): null
		);
	}
	handleMarkerClick = (props, marker, e) => {
		console.log(e);
  	}

   render(){
   const WorksMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 49.861684, lng: 24.063663 } }
        defaultZoom = { 12 }
      >
      {this.renderWorksOnMap(this.props.data.jobList)}
      </GoogleMap>
   ));
   return(
      <div >
        <WorksMap
          containerElement={ <div id = "work-map"/> }
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
