import { AppState } from "../AppState.js"
// import { examplesService } from "../services/ExampleService.js"
import { changeService } from "../services/ChangeService.js"
import { setText } from "../utils/Writer.js"

function _drawChange() {
  console.log('drawing change')

  setText('changeCount', AppState.Change)
}

export class ChangeController {

  constructor() {
    console.log('change controller loaded')
  }
  addChange() {
    console.log('Adding change');
    changeService.addChange()
    _drawChange()
  }
}