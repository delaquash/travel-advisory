import axios from 'axios';



  
export const getPlacesData = async (types, sw, ne) => {
    try {
        // we can just destructure to pull out the data itself rather than the whole response
        const {data : { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${types}/list-in-boundary`, 
          {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng ,
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': 'b286648626mshb5a701605ade81bp154604jsncf5b4b6ff8f6'
          }
        });
        return data
    } catch (error) {
        console.log(error)
    }
}