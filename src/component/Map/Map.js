import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

 const Map =({ setCordinates, setBounds, cordinates, places, weatherData })=> {
     const classes = useStyles();
     const isDesktop = useMediaQuery('(min-width: 600px)');
     const coordinates = {lat: 0, lng:0 }
     const [childClicked, setChildClicked] = useState(null)

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
            onChildClick={(child) => setChildClicked(child)}
            
        >
          {places?.map((place, i) => (
            <div
              className={classes.markerContainer}
              key={i}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              {
                !isDesktop? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large" /> 
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                        {place.name}
                    </Typography>
                    <img
                        className={classes.pointer}
                        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        alt={place.name}
                    />
                    <Rating size='small' value={Number(place.number)} readOnly/>
                  </Paper>
                )
              }

            </div>
          ))}   
          {
            weatherData?.list?.map((data, i) => (
              <div key={i} lat={data.coord.lat} lng={data.coord.lng}> 
                  <img height={100} src={`https://openweather.org/w/${data.weather[0].icon}.png`} />
              </div> 
            ))
          }
        </GoogleMapReact>
    </div>
  )
}



export default Map;
