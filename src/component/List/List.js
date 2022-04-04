import React, { createRef, useEffect, useState } from 'react';
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

 const List =({ places, childClicked, isLoading, types, setTypes, ratings, setRatings  })=> {
   const classes = useStyles()
   
   const [elRefs, setElRefs] = useState([])

   useEffect(() => {
     const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
      setElRefs(refs)
     
   }, [places])
   

  return (
    <div className={classes.container}>
      <Typography variant='h4'> 
        Restaurant, Hotels & Side Attractions Around You.
      </Typography>
      {
        isLoading? (
          <div className={classes.loading}>
            <CircularProgress  size='5rem' /> 
          </div>) : (
              <>
                  <FormControl className={classes.formControl}>
                  <InputLabel>Type</InputLabel>
                  <Select value={types} onClick={(e) => setTypes(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel>Rating</InputLabel>
                  <Select value={ratings} onClick={(e) => setRatings(e.target.value)}>
                    <MenuItem value={0}>All Ratings </MenuItem>
                    <MenuItem value={3}>Above 3.0   </MenuItem>
                    <MenuItem value={4}>Above 4.0   </MenuItem>
                    <MenuItem value={4.5}> Above 4.5</MenuItem>
                  </Select>
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place, i) =>(
                      <Grid item xs={12} key={i}>
                          <PlaceDetails 
                              place={place}
                              selected={Number(childClicked) === i}
                              refProp={elRefs[i]} 
                          />
                      </Grid>
                    ))}
                </Grid>
            </>
          )}
    </div>
  );
}


export default List