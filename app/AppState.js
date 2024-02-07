
import { Treats } from './models/treats.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'



class ObservableAppState extends EventEmitter {


  Change = 0

  name = ''
  treats = [
    new Treats({ name: 'berry', cost: '1' }),
    new Treats({ name: 'chip', cost: '2' })
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())