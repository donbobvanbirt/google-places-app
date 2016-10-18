import { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  searchLocation(loc) {
    get(`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${process.env.API_KEY}`)
    .then(res => {
      let { location } = res.data.results[0].geometry;
      // ServerActions.gotCoord(location);

      let { lat, lng } = location;
      console.log('lat:', lat, 'lng', lng);
      this.searchPlaces(location);
    })
    .catch(console.error)
  },

  searchPlaces(pos) {
    let coord = `${pos.lat},${pos.lng}`;
    get(`/api/places/${coord}`)
    .then(res => {
      let { data } = res;
      ServerActions.gotPlaces(data.results)
      console.log('data:', data);
    })
    .catch(console.error)
  },

}

export default API
