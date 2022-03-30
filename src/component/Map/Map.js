import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

 const Map =({ setCordinates, setBounds, cordinates })=> {
     const classes = useStyles()
     const isMobile = useMediaQuery('(min-width: 600px)');
     const coordinates = {lat: 0, lng:0 }
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyC9f-3je6jtXTo4FxlnKNy7CHzZl4OUyv8'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            onChange={(e) => {
              
              setCordinates({lat: e.center.lat, lng:e.center.lng })
              setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
            }}
            options={''}
            // onChildClick={''}
            
        >
            
        </GoogleMapReact>
    </div>
  )
}



export default Map;
