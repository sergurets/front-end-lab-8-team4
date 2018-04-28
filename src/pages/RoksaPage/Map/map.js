import React from 'react';
//import google from 'google-map-react';
import './map.css';

import { withGoogleMap, GoogleMap } from 'react-google-maps';
class WorkMap extends React.Component{
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div >
        <GoogleMapExample
          containerElement={ <div id = "work-map"/> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
 export default WorkMap
