import React, {useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api/index'


import Header from './component/Header/Header';
import List from './component/List/List';
import Map from './component/Map/Map';
// import PlaceDetails from './component/PlaceDetails/placedetails';

const App = () => {
  const [ places, setPlaces ] = useState('')
  const [ cordinates, setCordinates ] = useState({})
  const [ bounds, setBounds ] = useState(null)


  useEffect(() => {
    console.log(cordinates, bounds)
    getPlacesData() 
      .then((data) => {
          setPlaces(data)
      })
  }, [])
  
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List />
        </Grid>
        <Grid item xs={12} md={4}>
            <Map
              setCordinates={setCordinates}
              setBounds={setBounds}
              cordinates={cordinates} 
            />
        </Grid>
    </Grid>
    </>
  )
}

export default App;