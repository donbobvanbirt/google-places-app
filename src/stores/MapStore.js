import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let infoList = null;

class MapStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_PLACES':
          infoList = action.payload;
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

  getList() {
    return infoList;
  }
}

export default new MapStore;
