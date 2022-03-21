import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';


import Header from './component/Header/Header';
import List from './component/List/list';
import Map from './component/Map/map';
import PlaceDetails from './component/PlaceDetails/placedetails';

const App = () => {
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List />
        </Grid>
        <Grid item xs={12} md={4}>
            <Map />
        </Grid>
    </Grid>
    </>
  )
}

export default App;