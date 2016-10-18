import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotPlaces(results) {
    AppDispatcher.dispatch({
      type: 'GOT_PLACES',
      payload: results
    })
  },
}

export default ServerActions
