import AppDispatcher from '../AppDispatcher'
import API from '../API'

const MapActions = {
  searchLocation(loc) {
    API.searchLocation(loc);
  }
}

export default MapActions;
