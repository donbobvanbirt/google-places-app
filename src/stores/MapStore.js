import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let pos = null;

class MapStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_PLACES':
          pos = action.payload;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  getDefaultPosition() {
    return defaultPos
  }
}

export default new MapStore;
