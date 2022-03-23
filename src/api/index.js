import axios from 'axios';

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

var options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': 'b286648626mshb5a701605ade81bp154604jsncf5b4b6ff8f6'
    }
  };
  
export const getPlacesData = async () => {
    try {
        // we can just destructure to pull out the data itself rather than the whole response
        const {data : { data }} = await axios.get(URL, options)
    } catch (error) {
        console.log(error)
    }
}