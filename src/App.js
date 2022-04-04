import React, {useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api/index'


import Header from './component/Header/Header';
import List from './component/List/List';
import Map from './component/Map/Map';
// import PlaceDetails from './component/PlaceDetails/placedetails';

const App = () => {
  const [ places, setPlaces ] = useState([])
  const [ cordinates, setCordinates ] = useState({})
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [ bounds, setBounds ] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [ types, setTypes] = useState('restaurants');
   const [ ratings, setRatings ] = useState('')

  // to get the lng and lat of a location automatically
useEffect(() => {
  navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCordinates({lat: latitude, lng: longitude})
  })
}, []);

useEffect(() => {
  const filteredPlaces = places.filter((place) => places.ratings > ratings)
  setFilteredPlaces(filteredPlaces)
}, [ratings])



  useEffect(() => {
    setIsLoading(true)
    getPlacesData(types, bounds.sw, bounds.ne) 
      .then((data) => {
          setPlaces(data)
          setFilteredPlaces([])
          setIsLoading(false)
      })
  }, [types, cordinates, bounds])
  
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List 
              places={filteredPlaces.length ? filteredPlaces : places} 
              childClicked={childClicked}
              isLoading={isLoading}
              types={types}
              setTypes={setTypes}
              ratings={ratings}
              setRatings={setRatings}
            />
        </Grid>
        <Grid item xs={12} md={8}>
            <Map
              setCordinates={setCordinates}
              setBounds={setBounds}
              cordinates={cordinates} 
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
        </Grid>
    </Grid>
    </>
  )
}

export default App;