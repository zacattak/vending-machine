import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'



class ObservableAppState extends EventEmitter {


  Change = 0

  name = ''


}

export const AppState = createObservableProxy(new ObservableAppState())